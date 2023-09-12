import React, {useState} from 'react';
import {View, Text} from 'react-native';

import Header from '../../components/header/header';
import DrawerNavigation from '../../navigation/DrawerNavigator';
import {makeStyles} from './styles';

const Home = ({navigation}) => {
  const styles = makeStyles();
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <DrawerNavigation
        setIsVisible={setIsVisible}
        isVisible={isVisible}
        navigation={navigation}
      />
      <Header setIsVisible={setIsVisible} isVisible={isVisible} />
      <View style={styles.view1}>
        <Text style={styles.title}>BROKAZY</Text>
      </View>
    </>
  );
};

export default Home;
