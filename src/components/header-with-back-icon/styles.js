import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const makeStyles = () =>
  StyleSheet.create({
    header: {
      flexDirection: 'row',
      height: 50,
      width: '100%',
      alignItems: 'center',
      paddingHorizontal: 10,
      backgroundColor: '#032726',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
      borderBlockColor: '#1b3538',
      borderBottomWidth: 1,
    },
    ripple: {
      height: 40,
      width: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: RFValue(17),
      textAlign: 'center',
      width: '70%',
      fontWeight: '400',
      color: 'white',
    },
  });
