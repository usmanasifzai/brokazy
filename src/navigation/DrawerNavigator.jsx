import React from 'react';

import Modal from 'react-native-modal';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Avatar} from 'react-native-paper';

import DrawerRow from '../components/drawer-row/drawer-row';
import {PLAN} from '../constants/navigation';
import {makeStyles} from './styles';

const DrawerNavigation = ({isVisible, setIsVisible, navigation}) => {
  const styles = makeStyles();
  return (
    <Modal
      style={styles.modal}
      isVisible={isVisible}
      animationIn="slideInLeft"
      animationOut="slideOutLeft">
      <ScrollView
        style={styles.width}
        contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setIsVisible(false)}>
            <Avatar.Image
              size={60}
              source={require('../assets/images/avatar.jpeg')}
              testID={'avatar1'}
            />
          </TouchableOpacity>
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
                navigation.navigate(PLAN);
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
      </ScrollView>
    </Modal>
  );
};

export default DrawerNavigation;
