import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RoundedButton from './components/RoundedButton';

const App = () => {
  const [color, setcolor] = useState('white');

  const colorChange = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  };
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={{ color: 'white' }}>{color}</Text>

      <RoundedButton
        text='Next'
        backgroundColor='teal'
        onPress={() => setcolor(colorChange())}
        textColor='white'
      />
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
