import {StyleSheet} from 'react-native';

export const commonStyles = () =>
  StyleSheet.create({
    text: {
      color: '#fff',
    },
    checkbox: {flexDirection: 'row', marginTop: 10},
    checkboxView: {
      width: 20,
      height: 20,
      marginRight: 10,
      borderRadius: 5,
      borderWidth: 1.5,
      borderColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
