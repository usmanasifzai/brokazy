import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import CheckBoxWithText from '../check-box-with-text/check-box-with-text';

export default function PlanCard({plan, index, activeTextBox}) {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#053130',
    borderWidth: 2,
    borderColor: '#014443',
    borderRadius: 8,
    padding: 30,
  },
  active: {
    flex: 1,
    backgroundColor: '#054b49',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 8,
    padding: 30,
  },
  iconContainer: {
    position: 'absolute',
    bottom: -30,
    right: 30,
  },
  icon: {
    backgroundColor: '#00b4b0',
    borderWidth: 2,
    borderColor: '#fff',
    width: 55,
    height: 60,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#fff',
  },
  textHeading: {
    color: '#fff',
    fontWeight: '500',
    fontSize: RFValue(20),
  },
  checkbox: {flexDirection: 'row', marginTop: 10},
});
