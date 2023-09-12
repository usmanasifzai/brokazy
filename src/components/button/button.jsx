import React from 'react';
import {View, Text} from 'react-native';
import {commonStyles} from '../../../styles';
import {makeStyles} from './styles';

export default function Button({text}) {
  const commonStyle = commonStyles();
  const styles = makeStyles();
  return (
    <View style={styles.btn}>
      <Text style={commonStyle.text}>{text}</Text>
    </View>
  );
}
