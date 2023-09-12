import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const makeStyles = () =>
  StyleSheet.create({
    view1: {
      width: '40%',
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      borderRadius: 10,
      backgroundColor: '#033534',
    },
    container: {
      flex: 1,
      backgroundColor: '#032726',
    },
    center: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      backgroundColor: '#00b4b0',
      borderWidth: 2,
      width: 100,
      height: 100,
      padding: 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
    },
    calender: {
      width: '40%',
      height: 40,
      borderRadius: 50,
      backgroundColor: '#033534',
      marginTop: 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    plansContainer: {
      position: 'relative',
      width: '100%',
      marginTop: 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    line: {
      position: 'absolute',
      width: '95%',
      height: 1,
      backgroundColor: '#033c3a',
    },
    text1: {
      marginLeft: 10,
      color: '#fff',
      fontSize: RFValue(20),
      textAlign: 'center',
    },
    title: {
      color: '#fff',
      marginTop: 20,
      fontSize: RFValue(30),
      fontWeight: '700',
    },
    date: {marginLeft: 10, color: 'orange'},
    text2: {color: '#fff', fontSize: RFValue(18)},
    text3: {
      color: '#fff',
      fontSize: RFValue(14),
      marginTop: 20,
      textAlign: 'center',
    },
    m50: {
      marginTop: 50,
    },
    m20: {
      marginTop: 20,
    },
    p10: {
      padding: 10,
    },
  });
