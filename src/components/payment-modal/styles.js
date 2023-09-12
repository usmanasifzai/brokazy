import {Dimensions, StyleSheet} from 'react-native';

export const makeStyles = isPortrait =>
  StyleSheet.create({
    container: {
      bottom: 0,
      position: 'absolute',
      width: '100%',

      backgroundColor: 'transparent',

      height: isPortrait()
        ? Dimensions.get('window').height * 0.35
        : Dimensions.get('window').height * 0.6,
      maxHeight: isPortrait()
        ? Dimensions.get('window').height * 0.35
        : Dimensions.get('window').height * 0.6,
      shadowOffset: {
        height: 5,
        width: 5,
      },
      shadowOpacity: 10.22,
      shadowRadius: 10.22,
      elevation: 10,
      padding: 20,
    },
    screenContainer: {flex: 1, backgroundColor: '#00000AA'},
    div1: {
      backgroundColor: 'black',
      borderRadius: 10,
    },
    div2: {
      backgroundColor: 'black',
      borderRadius: 10,
      marginTop: 20,
    },
    innerView: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 20,
    },
    center: {
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textColor: {
      color: '#fff',
    },
    paymentText: {color: '#fff', marginLeft: 10},
    creditCard: {borderBottomWidth: 1, borderBottomColor: '#fff'},
    modalOverlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
  });
