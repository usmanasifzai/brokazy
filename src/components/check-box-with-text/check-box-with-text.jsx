/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CheckBox from '../checkbox/checkbox';

const CheckBoxWithText = (style1 = {}) => (
  <View style={[styles.checkbox, style1]}>
    <CheckBox />
    <Text style={styles.text}>Extra member benefits</Text>
  </View>
);

export default CheckBoxWithText;

const styles = StyleSheet.create({
  text: {
    color: '#fff',
  },
  checkbox: {flexDirection: 'row', marginTop: 10},
});
