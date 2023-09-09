import React from 'react';
import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Lottie from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../button/button';

export default function SuccessModal({modalVisible, closeModal}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>SUCCESS!</Text>

            <Lottie
              source={require('../../assets/svgs/lottie.json')}
              autoPlay={true}
              duration={2000}
              style={styles.img}
              loop={false}
              autoSize={true}
            />

            <Text style={styles.text}>
              Congratulation, your payment received
            </Text>
            <TouchableOpacity
              style={{width: '100%'}}
              onPress={() => {
                closeModal(false);
                navigation.navigate('Home');
              }}>
              <Button text={'CONTINUE'} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
});
