import React from 'react';
import {
  Modal,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CreditCardIcon from 'react-native-vector-icons/AntDesign';
import PayPalIcon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

function CustomModal({modal, setModal}) {
  const navigation = useNavigation();

  return (
    <Modal
      onRequestClose={() => setModal(false)}
      animationType="slide"
      transparent={true}
      visible={modal}>
      <View style={styles.screenContainer}>
        <View style={styles.container}>
          <View style={styles.div1}>
            <TouchableOpacity
              onPress={() => {
                setModal(!modal);
                navigation.navigate('CardDetails');
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
                navigation.navigate('CardDetails');
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

    height: Dimensions.get('window').height * 0.4,
    maxHeight: Dimensions.get('window').height * 0.4,
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
    marginTop: 60,
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
});

export default CustomModal;
