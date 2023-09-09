import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Button from '../../components/button/button';
import HeaderWithBackIcon from '../../components/header-with-back-icon/header-with-back-icon';
import CustomTextInput from '../../components/input/input';
import SuccessModal from '../../components/success-modal/success-modal';

const CardDetails = () => {
  const [modalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <HeaderWithBackIcon title={'Payment'} />
      <View style={styles.container}>
        <View>
          <Text style={styles.cardDetails}>CARD DETAILS</Text>
          <CustomTextInput placeholder={'CARD NUMBER'} />
          <CustomTextInput placeholder={'EXPIRY DATE'} />
          <CustomTextInput placeholder={'CVV SECURITY CODE'} />
          <CustomTextInput placeholder={'CARD HOLDER NAME'} />
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setIsModalVisible(true)}>
          <Button text={'CONTINUE'} />
        </TouchableOpacity>
      </View>
      <SuccessModal
        closeModal={setIsModalVisible}
        modalVisible={modalVisible}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#032726',
    padding: 10,
    justifyContent: 'space-between',
  },
  cardDetails: {
    fontSize: 20,
    color: '#fff',
  },
  btn: {marginTop: 50},
});

export default CardDetails;
