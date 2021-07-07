import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {registerFetchTask} from './tasks';
const INTERVAL_TASKS = 10;
registerFetchTask('task_2', () => {
  console.log('Rodando em background');
}, INTERVAL_TASKS);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi hello</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
