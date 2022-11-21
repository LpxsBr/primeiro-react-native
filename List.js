import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function List() {
  return (
    <View>
        <View style={cardStyle.card}>
            <Text style={cardStyle.cardTitle}>Titulo</Text>
            <Text style={cardStyle.cardSubtitle}>Sub-titulo</Text>
        </View>
    </View>
  );
}

const cardStyle = StyleSheet.create({
    card:{
        backgroundColor: "#fff",
        height: 100,
        width: 250,
        padding: 12,
        borderRadius: 10,
        marginVertical: 10,        
        flexWrap: 'wrap'
    },
    cardTitle:{
        fontWeight: 'bold',
        fontSize: 25
    },
    cardSubtitle:{
        fontSize: 20
    }
    
});