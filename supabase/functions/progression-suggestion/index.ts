import { createClient } from 'jsr:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

function getEnv(name: string): string {
  const value = Deno.env.get(name);

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const authHeader = request.headers.get('Authorization');

    if (!authHeader?.startsWith('Bearer ')) {
      return Response.json(
        { error: 'Missing or invalid Authorization header.' },
        { status: 401, headers: corsHeaders },
      );
    }

    const { workout_id: workoutId } = await request.json();

    if (!workoutId || typeof workoutId !== 'string') {
      return Response.json(
        { error: 'workout_id is required.' },
        { status: 400, headers: corsHeaders },
      );
    }

    const supabaseUrl = getEnv('SUPABASE_URL');
    const supabaseAnonKey = getEnv('SUPABASE_ANON_KEY');

    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      global: {
        headers: {
          Authorization: authHeader,
        },
      },
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return Response.json(
        { error: 'Unauthorized.' },
        { status: 401, headers: corsHeaders },
      );
    }

    const { data: logs, error: logsError } = await supabase
      .from('set_logs')
      .select('workout_id, set_number, weight, reps, performed_at, notes')
      .eq('workout_id', workoutId)
      .order('performed_at', { ascending: false })
      .limit(20);

    if (logsError) {
      throw logsError;
    }

    if (!logs || logs.length === 0) {
      return Response.json(
        { error: 'No workout logs found for the requested workout_id.' },
        { status: 404, headers: corsHeaders },
      );
    }

    return Response.json(
      {
        workout_id: workoutId,
        logs,
      },
      { headers: corsHeaders },
    );
  } catch (error) {
    return Response.json(
      {
        error: error instanceof Error ? error.message : 'Unexpected server error.',
      },
      { status: 500, headers: corsHeaders },
    );
  }
});
