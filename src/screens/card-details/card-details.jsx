import React, {useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';

import Button from '../../components/button/button';
import HeaderWithBackIcon from '../../components/header-with-back-icon/header-with-back-icon';
import CustomTextInput from '../../components/input/input';
import SuccessModal from '../../components/success-modal/success-modal';
import {makeStyles} from './styles';

const CardDetails = ({navigation}) => {
  const styles = makeStyles();
  const [modalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <HeaderWithBackIcon title={'Payment'} navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scrollView}>
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
            onPress={() => setIsModalVisible(!modalVisible)}
            testID="continue">
            <Button text={'CONTINUE'} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <SuccessModal
        closeModal={setIsModalVisible}
        modalVisible={modalVisible}
        navigation={navigation}
      />
    </>
  );
};

export default CardDetails;
