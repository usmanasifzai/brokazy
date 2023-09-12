import React from 'react';
import {
  Modal,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import CreditCardIcon from 'react-native-vector-icons/AntDesign';
import PayPalIcon from 'react-native-vector-icons/FontAwesome';
import CardDetails from '../../screens/card-details/card-details';
import {makeStyles} from './styles';

const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

function CustomModal({modal, setModal, navigation}) {
  const styles = makeStyles(isPortrait);
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

export default CustomModal;
