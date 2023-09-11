import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import Button from '../../components/button/button';
import HeaderWithBackIcon from '../../components/header-with-back-icon/header-with-back-icon';
import CustomTextInput from '../../components/input/input';
import SuccessModal from '../../components/success-modal/success-modal';

const CardDetails = ({navigation}) => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#032726',
    padding: 10,
    justifyContent: 'space-between',
  },
  cardDetails: {
    fontSize: RFValue(20),
    color: '#fff',
  },
  btn: {marginTop: 50},
  scrollView: {flexGrow: 1},
});

export default CardDetails;
