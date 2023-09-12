import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const makeStyles = () =>
  StyleSheet.create({
    view1: {
      flex: 1,
      backgroundColor: '#033534',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: RFValue(22),
      color: 'white',
      fontWeight: '700',
    },
  });
