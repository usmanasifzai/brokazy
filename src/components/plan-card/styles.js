import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const makeStyles = () =>
  StyleSheet.create({
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
