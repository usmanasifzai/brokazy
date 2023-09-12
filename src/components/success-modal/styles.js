import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const makeStyles = () =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      elevation: 5,
    },
    title: {
      color: 'black',
      fontSize: RFValue(15),
      fontWeight: '700',
    },
    lottie: {
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 100,
    },
    img: {width: 100, height: 100},
    text: {
      fontSize: RFValue(14),
      color: 'black',
    },
    w100: {width: '100%'},
  });
