import React from 'react';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function BottomButton({ text, onPressCallback }) {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: `3%`,
        right: '7%',
      }}
      onPress={() => onPressCallback()}
    >
      <Text style={styles.buttonText}>{text}</Text>
      <Feather name="arrow-right" size={28} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    marginRight: 18,
  },
});

export default BottomButton;
