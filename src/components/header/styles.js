import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const makeStyles = () =>
  StyleSheet.create({
    view1: {
      flexDirection: 'row',
      backgroundColor: '#000',
      alignItems: 'center',
    },
    containerStyle: {flex: 3, backgroundColor: '#000'},
    inputContainerStyle: {backgroundColor: '#fff'},

    text: {
      fontSize: RFValue(15),
      fontWeight: '700',
      color: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
