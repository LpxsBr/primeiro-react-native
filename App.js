import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { List } from './List';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>Oi, bem-vindo!</Text>
      <Text style={styles.containerSubtitle}>Confira o catálogo:</Text>
      <ScrollView>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    paddingTop: 50,
    marginTop: 30
  },
  containerText:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 40
  },
  containerSubtitle:{
    color: '#fff',
    fontWeight: 'normal',
    fontSize: 30,
    padding: 20,
    paddingTop: 0
  }
});