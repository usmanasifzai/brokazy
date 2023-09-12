import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import CheckBoxWithText from '../check-box-with-text/check-box-with-text';
import {makeStyles} from './styles';

export default function PlanCard({plan, index, activeTextBox}) {
  const styles = makeStyles();
  const IconComponent =
    plan?.iconSource === 'FontAwesome5Icon'
      ? FontAwesome5Icon
      : plan?.iconSource === 'FontAwesomeIcon'
      ? FontAwesomeIcon
      : plan?.iconSource === 'Ionicons'
      ? Ionicons
      : null;

  return (
    <View
      style={
        activeTextBox !== null && activeTextBox === index
          ? styles.active
          : styles.container
      }>
      <View style={styles.card}>
        <Text style={styles.textHeading}>{plan?.name}</Text>

        <Text style={styles.text}>
          <Text>$</Text>
          <Text style={styles.textHeading}>{plan?.price}</Text>

          <Text>/{plan?.duration}</Text>
        </Text>
      </View>
      <CheckBoxWithText />
      <CheckBoxWithText />
      <CheckBoxWithText />
      <View style={styles.iconContainer}>
        <View style={styles.icon}>
          <IconComponent name={plan?.icon} color="white" size={30} />
        </View>
      </View>
    </View>
  );
}
