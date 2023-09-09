import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function Button({text}) {
  return (
    <View style={styles.btn}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    margin: 10,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b4b0',
  },
  text: {
    color: '#fff',
  },
});
