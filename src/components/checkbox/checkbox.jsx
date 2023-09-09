import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import TickIcon from '../../assets/svgs/tick';

const CheckBox = () => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.checkbox}>
      <TickIcon height={10} width={10} fill="#fff" />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 10,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default CheckBox;
