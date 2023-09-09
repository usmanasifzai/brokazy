import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import CheckBox from '../checkbox/checkbox';

export default function PlanCard({plan, index, activeTextBox}) {
  return (
    <View
      style={
        activeTextBox !== null && activeTextBox === index
          ? styles.active
          : styles.container
      }>
      <View style={styles.card}>
        <Text style={styles.textHeading}>{plan.type}</Text>

        <Text style={styles.text}>
          <Text>$</Text>
          <Text style={styles.textHeading}>{plan.price}</Text>

          <Text>/{plan.duration}</Text>
        </Text>
      </View>
      <View style={styles.checkbox}>
        <CheckBox />
        <Text style={styles.text}>Extra member benefits</Text>
      </View>
      <View style={styles.checkbox}>
        <CheckBox />
        <Text style={styles.text}>Extra member benefits</Text>
      </View>
      <View style={styles.checkbox}>
        <CheckBox />
        <Text style={styles.text}>Extra member benefits</Text>
      </View>
      <View style={styles.iconContainer}>
        <View style={styles.icon}>
          {plan.type === 'Premium' && (
            <FontAwesomeIcon name="diamond" color="white" size={30} />
          )}
          {plan.type === 'Basic' && (
            <Icon name="paper-plane" color="white" size={30} />
          )}
          {plan.type === 'Standard' && (
            <FontAwesome5Icon name="crown" color="white" size={30} />
          )}
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
