import React from 'react';
import {TextInput} from 'react-native';
import {makeStyles} from './styles';

export default function CustomTextInput({placeholder}) {
  const styles = makeStyles();
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="gray"
    />
  );
}
