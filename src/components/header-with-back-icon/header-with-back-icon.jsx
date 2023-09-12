import React from 'react';
import {Text, View} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

import ArrowBack from '../../assets/svgs/ArrowBack';
import {makeStyles} from './styles';

export default function HeaderWithBackIcon({title, navigation}) {
  const styles = makeStyles();
  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <TouchableRipple
          borderless
          style={styles.ripple}
          onPress={() => navigation.goBack()}
          rippleColor={'#8493AE20'}>
          <ArrowBack fill={'white'} />
        </TouchableRipple>
        <Text style={[styles.title]}>{title}</Text>
      </View>
    </View>
  );
}
