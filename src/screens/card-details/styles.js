import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const makeStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#032726',
      padding: 10,
      justifyContent: 'space-between',
    },
    cardDetails: {
      fontSize: RFValue(20),
      color: '#fff',
    },
    btn: {marginTop: 50},
    scrollView: {flexGrow: 1},
  });
