import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import Header from '../../components/header/header';
import DrawerNavigation from '../../navigation/DrawerNavigator';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <DrawerNavigation setIsVisible={setIsVisible} isVisible={isVisible} />
      <Header setIsVisible={setIsVisible} isVisible={isVisible} />
      <View style={styles.view1}>
        <Text style={styles.title}>BROKAZY</Text>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: '#033534',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: RFValue(22),
    color: 'white',
    fontWeight: '700',
  },
});
