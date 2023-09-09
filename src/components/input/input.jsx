import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export default function CustomTextInput({placeholder}) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="gray"
    />
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: 'gray',
    color: '#fff',
    marginTop: 20,
  },
});
