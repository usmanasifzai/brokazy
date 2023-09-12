import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const makeStyles = () =>
  StyleSheet.create({
    modalView: {
      margin: 20,
      width: '90%',
      backgroundColor: '#033c3a',
      borderRadius: 20,
      padding: 35,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },

    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    container: {
      backgroundColor: '#053130',
      borderWidth: 2,
      borderColor: '#014443',
      borderRadius: 8,
      padding: 30,
    },

    iconContainer: {
      alignItems: 'center',
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
      marginBottom: 30,
    },
    text: {
      color: '#fff',
    },
    textHeading: {
      color: '#fff',
      fontWeight: '700',
      fontSize: RFValue(20),
      marginBottom: 10,
    },
    modalOverlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    scrollView: {flexGrow: 1},
    flexEnd: {alignItems: 'flex-end'},
    mb10: {marginBottom: 10},
    mt40: {marginTop: 40},
  });
