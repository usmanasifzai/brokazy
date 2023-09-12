import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import Button from '../button/button';
import CustomModal from '../payment-modal/payment-modal';
import CheckBoxWithText from '../check-box-with-text/check-box-with-text';
import {makeStyles} from './styles';
import {commonStyles} from '../../../styles';

const PlanModal = ({
  modalVisible,
  setModalVisible,
  planDetails,
  navigation,
}) => {
  const commonStyle = commonStyles();
  const styles = makeStyles();
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
    <View style={commonStyle.centeredView}>
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
          <View style={commonStyle.centeredView}>
            <View style={styles.modalView}>
              <Pressable
                style={styles.flexEnd}
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
              <View style={styles.iconContainer}>
                <Text style={styles.textHeading}>{planDetails?.name}</Text>

                <Text style={[styles.text, styles.mb10]}>
                  <Text>$</Text>
                  <Text style={styles.textHeading}>{planDetails?.price}</Text>

                  <Text>/{planDetails?.duration}</Text>
                </Text>
              </View>
              <View style={styles.iconContainer}>
                <CheckBoxWithText />
                <CheckBoxWithText />
                <CheckBoxWithText />
              </View>
              <View style={styles.mt40}>
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

export default PlanModal;
