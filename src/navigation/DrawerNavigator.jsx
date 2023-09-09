import React from 'react';

import Modal from 'react-native-modal';
import {Text, StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import {Avatar} from 'react-native-paper';
import DrawerRow from '../components/drawer-row/drawer-row';
import {useNavigation} from '@react-navigation/native';

const DrawerNavigation = ({isVisible, setIsVisible}) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => setIsVisible(false)}>
      <Modal
        style={styles.modal}
        testID={'modal'}
        isVisible={isVisible}
        animationIn="slideInLeft"
        animationOut="slideOutLeft">
        <View style={styles.header}>
          <Avatar.Image
            size={60}
            source={require('../assets/images/avatar.jpeg')}
          />
          <View style={styles.col}>
            <Text style={styles.text1}>Shawn Pope</Text>
            <Text style={styles.text2}>@Shawn_pope</Text>
            <Text style={styles.text4}>
              142 <Text style={styles.text3}>Following {'  '}</Text>
              <Text style={styles.dot}> {'\u2B24'}</Text>
              <Text style={styles.text4}>
                {'  '}
                17 <Text style={styles.text3}>Followers</Text>{' '}
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.view1}>
          <View>
            <DrawerRow name="user" text="My Profile" />
            <DrawerRow name="save" text="Saved Articles" />
            <DrawerRow
              name="plus"
              text="Subscription Plan"
              onClick={() => {
                setIsVisible(false);
                navigation.navigate('Plan');
              }}
            />
            <DrawerRow name="block" text="Blocked Users" />
            <DrawerRow name="rate-review" text="Rate App" />
            <DrawerRow name="exclamationcircleo" text="About Us" />
            <DrawerRow name="notifications" text="Notification" />
          </View>
          <View>
            <DrawerRow name="exit" text="Sign Out" />
          </View>
        </View>
      </Modal>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: '90%',
    backgroundColor: 'black',
    margin: 0,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  header: {
    padding: 20,
    width: '98%',
    marginTop: 30,
    flexDirection: 'row',
    borderBottomColor: '#212121',
    borderBottomWidth: 1,
    paddingBottom: 30,
  },
  col: {
    marginLeft: 15,
    flexDirection: 'column',
  },
  text1: {
    color: '#ebebf0',
    fontSize: 22,
    marginBottom: 5,
    fontWeight: '700',
  },
  text2: {
    color: '#ebebf0',
    fontSize: 16,
    marginBottom: 5,
  },
  text3: {
    color: '#bcbcbc',
    fontSize: 14,
  },
  text4: {
    fontWeight: '700',
    color: '#ebebf0',
    fontSize: 16,
  },
  dot: {
    color: '#bcbcbc',
    fontSize: 4,
  },
  view1: {
    flex: 1,
    width: '100%',
    padding: 20,
    justifyContent: 'space-between',
    marginBottom: 50,
  },
});

export default DrawerNavigation;