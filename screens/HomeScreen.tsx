import * as React from 'react';
import {
  Text as RNText,
  Text,
  TextInput,
  ScrollView,
  ImageBackground,
  View,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { Button, Card, Text as PaperText } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }: any) {
  const [number, onChangeNumber] = React.useState('');
  const { width } = useWindowDimensions();

  const isDesktop = width >= 768;

  const programs = [
    {
      title: 'Beginner Program',
      subtitle: 'Start your fitness journey',
      description: 'Simple workouts for building consistency.',
      image:
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop',
    },
    {
      title: 'Intermediate Program',
      subtitle: 'Build strength and skill',
      description: 'A balanced plan for steady progress.',
      image:
        'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1469&auto=format&fit=crop',
    },
    {
      title: 'Advanced Program',
      subtitle: 'Push your limits',
      description: 'Harder training for experienced lifters.',
      image:
        'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?q=80&w=1470&auto=format&fit=crop',
    },
  ];

  return (
    <LinearGradient
      colors={['#FFFFFF', '#FFFFFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <RNText style={styles.title}>Team 10 Lifts</RNText>
        <Text style={styles.subtitle}>
          Stay Strong, Stay Consistent, Stay Team 10
        </Text>

        <RNText style={styles.sectionTitle}>Programs</RNText>

        <View
          style={[
            styles.cardGrid,
            { flexDirection: isDesktop ? 'row' : 'column' },
          ]}
        >
          {programs.map((program, index) => (
            <Card
              key={index}
              style={[
                styles.card,
                { width: isDesktop ? '31%' : '100%' },
              ]}
            >
              <ImageBackground
                source={{ uri: program.image }}
                style={styles.cardBackground}
                imageStyle={styles.cardImage}
              >
                <View style={styles.overlay}>
                  <PaperText variant="titleLarge" style={styles.cardTitle}>
                    {program.title}
                  </PaperText>

                  <PaperText variant="bodyMedium" style={styles.cardSubtitle}>
                    {program.subtitle}
                  </PaperText>

                  <RNText style={styles.cardDescription}>
                    {program.description}
                  </RNText>

                  <Button
                    mode="contained"
                    buttonColor="#5D00FF"
                    textColor="white"
                    onPress={() => navigation.navigate('Programs')}
                    style={styles.button}
                  >
                    View Program
                  </Button>
                </View>
              </ImageBackground>
            </Card>
          ))}
        </View>

        <RNText style={styles.sectionTitle}>Meals</RNText>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Ask Jake..."
          placeholderTextColor="#5D00FF"
          keyboardType="default"
        />
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    color: '#000000',
    fontFamily: 'Impact',
    letterSpacing: 3,
    fontSize: 80,
    textAlign: 'center',
    marginTop: 150,
  },
  subtitle: {
    color: '#5D00FF',
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 150,
    textAlign: 'center'
  },
  sectionTitle: {
    color: '#5D00FF',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 30,
    marginBottom: 15,
  },
  cardGrid: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  card: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 16,
    backgroundColor: 'transparent',
  },
  cardBackground: {
    minHeight: 250,
    justifyContent: 'flex-end',
  },
  cardImage: {
    borderRadius: 20,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 18,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  cardTitle: {
    color: 'white',
    fontWeight: '700',
    marginBottom: 4,
  },
  cardSubtitle: {
    color: 'white',
    marginBottom: 8,
  },
  cardDescription: {
    color: 'white',
    fontSize: 14,
    marginBottom: 14,
  },
  button: {
    borderRadius: 20,
  },
  input: {
    color: '#5D00FF',
    fontSize: 12,
    fontWeight: 700,
    height: 40,
    marginTop: 12,
    borderWidth: 2,
    borderColor: '#5D00FF',
    borderRadius: 20,
    padding: 10,
  },
});