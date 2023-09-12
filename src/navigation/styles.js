import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const makeStyles = () =>
  StyleSheet.create({
    modal: {
      width: '90%',
      backgroundColor: 'black',
      margin: 0,
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      height: '100%',
    },
    header: {
      padding: 20,
      width: '98%',
      marginTop: 30,
      flexDirection: 'row',
      borderBottomColor: '#212121',
      borderBottomWidth: 1,
      paddingBottom: 30,
    },
    col: {
      marginLeft: 15,
      flexDirection: 'column',
    },
    text1: {
      color: '#ebebf0',
      fontSize: RFValue(22),
      marginBottom: 5,
      fontWeight: '700',
    },
    text2: {
      color: '#ebebf0',
      fontSize: RFValue(16),
      marginBottom: 5,
    },
    text3: {
      color: '#bcbcbc',
      fontSize: RFValue(14),
    },
    text4: {
      fontWeight: '700',
      color: '#ebebf0',
      fontSize: RFValue(16),
    },
    dot: {
      color: '#bcbcbc',
      fontSize: RFValue(4),
    },
    view1: {
      flex: 1,
      width: '100%',
      height: '100%',
      padding: 20,
      justifyContent: 'space-between',
      marginBottom: 50,
    },
    scrollView: {width: '100%', flexGrow: 1},
    width: {flex: 1, width: '100%'},
  });
