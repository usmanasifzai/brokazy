import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import Button from '../button/button';
import CustomModal from '../payment-modal/payment-modal';
import CheckBoxWithText from '../check-box-with-text/check-box-with-text';

const PlanModal = ({
  modalVisible,
  setModalVisible,
  planDetails,
  navigation,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const IconComponent =
    planDetails?.iconSource === 'FontAwesome5Icon'
      ? FontAwesome5Icon
      : planDetails?.iconSource === 'FontAwesomeIcon'
      ? FontAwesomeIcon
      : planDetails?.iconSource === 'Ionicons'
      ? Ionicons
      : null;

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        supportedOrientations={[
          'portrait',
          'portrait-upside-down',
          'landscape',
          'landscape-left',
          'landscape-right',
        ]}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <TouchableWithoutFeedback
            onPress={() => setModalVisible(!modalVisible)}>
            <View style={styles.modalOverlay} />
          </TouchableWithoutFeedback>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable
                style={{alignItems: 'flex-end'}}
                onPress={() => setModalVisible(!modalVisible)}>
                <EntypoIcon name="cross" color="white" size={30} />
              </Pressable>
              <View style={styles.iconContainer}>
                <View style={styles.icon}>
                  <IconComponent
                    name={planDetails?.icon}
                    color="white"
                    size={30}
                  />
                </View>
              </View>
              <View style={styles.card}>
                <Text style={styles.textHeading}>{planDetails?.name}</Text>

                <Text style={[styles.text, {marginBottom: 10}]}>
                  <Text>$</Text>
                  <Text style={styles.textHeading}>{planDetails?.price}</Text>

                  <Text>/{planDetails?.duration}</Text>
                </Text>
              </View>
              <View style={styles.center}>
                <CheckBoxWithText />
                <CheckBoxWithText />
                <CheckBoxWithText />
              </View>
              <View style={{marginTop: 40}}>
                <TouchableOpacity
                  testID="subscribe"
                  onPress={() => {
                    setIsVisible(true);
                    setModalVisible(false);
                  }}>
                  <Button text={'SUBSCRIBE'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </Modal>
      <CustomModal
        modal={isVisible}
        setModal={setIsVisible}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  card: {
    alignItems: 'center',
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
  center: {alignItems: 'center'},
});

export default PlanModal;
