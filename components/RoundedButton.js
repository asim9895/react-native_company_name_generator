import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const RoundedButton = ({ text, backgroundColor, icon, textColor, onPress }) => {
  const color = textColor || 'white';
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: backgroundColor || 'transparent' },
      ]}
      onPress={() => onPress && onPress()}>
      <View style={styles.wrapper}>
        {icon && icon}
        <Text style={[{ color }, styles.text]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 40,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'white',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 15,
    width: '70%',
  },
  text: {
    fontSize: 16,
  },
});

export default RoundedButton;
