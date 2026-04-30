import React from 'react';
import { Text, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type Program = {
    id: number;
    name: string;
};

export default function Team10Programs() {
    const programs: Program[] = [
        { id: 1, name: 'Beginner Strength Program' },
        { id: 2, name: 'Fat Loss Program' },
        { id: 3, name: 'Upper Body Focus Program'}
    ];

    return (
        <LinearGradient
            colors={['#FFFFFF', '#FFFFFF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
                flex: 1,
                alignItems: 'center',
                paddingTop: 60,
            }}>

            <Text style={{ color: '#5D00FF', fontSize: 24, marginBottom: 20 }}>
                Team 10 Programs
            </Text>

            <FlatList<Program>
                data={programs}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Text style={{ color: '#5D00FF', fontSize: 18, marginBottom: 12 }}>
                        {item.name}
                    </Text>
                )}
            />
        </LinearGradient>
    );
}