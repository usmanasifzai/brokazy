import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import CheckBox from '../checkbox/checkbox';
import Button from '../button/button';
import {useNavigation} from '@react-navigation/native';

const PlanModal = ({modalVisible, setModalVisible, planDetails}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
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
                {planDetails?.type === 'Premium' && (
                  <FontAwesomeIcon name="diamond" color="white" size={30} />
                )}
                {planDetails?.type === 'Basic' && (
                  <Icon name="paper-plane" color="white" size={30} />
                )}
                {planDetails?.type === 'Standard' && (
                  <FontAwesome5Icon name="crown" color="white" size={30} />
                )}
              </View>
            </View>
            <View style={styles.card}>
              <Text style={styles.textHeading}>{planDetails?.type}</Text>

              <Text style={[styles.text, {marginBottom: 10}]}>
                <Text>$</Text>
                <Text style={styles.textHeading}>{planDetails?.price}</Text>

                <Text>/{planDetails?.duration}</Text>
              </Text>
            </View>
            <View style={styles.checkbox}>
              <CheckBox />
              <Text style={styles.text}>Extra member benefits</Text>
            </View>
            <View style={styles.checkbox}>
              <CheckBox />
              <Text style={styles.text}>Extra member benefits</Text>
            </View>
            <View style={styles.checkbox}>
              <CheckBox />
              <Text style={styles.text}>Extra member benefits</Text>
            </View>
            <View style={{marginTop: 40}}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('CardDetails');
                }}>
                <Button text={'SUBSCRIBE'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    fontSize: 20,
    marginBottom: 10,
  },
  checkbox: {flexDirection: 'row', marginTop: 10, justifyContent: 'center'},
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default PlanModal;