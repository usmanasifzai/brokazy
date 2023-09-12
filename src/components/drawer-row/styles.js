import {StyleSheet} from 'react-native';

export const makeStyles = () =>
  StyleSheet.create({
    view1: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    view2: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    text1: {
      color: 'white',
      marginLeft: 20,
    },
  });
