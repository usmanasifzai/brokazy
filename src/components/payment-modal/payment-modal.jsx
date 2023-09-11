import React from 'react';
import {
  Modal,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import CreditCardIcon from 'react-native-vector-icons/AntDesign';
import PayPalIcon from 'react-native-vector-icons/FontAwesome';
import CardDetails from '../../screens/card-details/card-details';

const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

function CustomModal({modal, setModal, navigation}) {
  return (
    <Modal
      onRequestClose={() => setModal(false)}
      animationType="slide"
      transparent={true}
      supportedOrientations={[
        'portrait',
        'portrait-upside-down',
        'landscape',
        'landscape-left',
        'landscape-right',
      ]}
      visible={modal}>
      <TouchableWithoutFeedback onPress={() => setModal(!modal)}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>
      <View style={styles.screenContainer}>
        <View style={styles.container}>
          <View style={styles.div1}>
            <TouchableOpacity
              onPress={() => {
                setModal(!modal);
                navigation.navigate(CardDetails);
              }}
              style={styles.creditCard}>
              <View style={styles.innerView}>
                <CreditCardIcon name="creditcard" size={20} color="white" />
                <Text style={styles.paymentText}>Credit/Debit Card</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setModal(!modal);
                navigation.navigate(CardDetails);
              }}>
              <View style={styles.innerView}>
                <PayPalIcon name="cc-paypal" size={20} color="white" />
                <Text style={styles.paymentText}>PayPal</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.div2}>
            <TouchableOpacity
              style={styles.center}
              onPress={() => {
                setModal(!modal);
              }}>
              <Text style={styles.textColor}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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

export default CustomModal;
