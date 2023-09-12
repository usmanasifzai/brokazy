import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import Lottie from 'lottie-react-native';
import Button from '../button/button';

import {HOME} from '../../constants/navigation';

import {makeStyles} from './styles';

export default function SuccessModal({modalVisible, closeModal, navigation}) {
  const styles = makeStyles();
  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        supportedOrientations={[
          'portrait',
          'portrait-upside-down',
          'landscape',
          'landscape-left',
          'landscape-right',
        ]}
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
              style={styles.w100}
              onPress={() => {
                closeModal(false);
                navigation.navigate(HOME);
              }}
              testID="button">
              <Button text={'CONTINUE'} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
