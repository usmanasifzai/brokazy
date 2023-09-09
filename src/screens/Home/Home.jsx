import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/button/button';
import Header from '../../components/header/header';
import DrawerNavigation from '../../navigation/DrawerNavigator';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <View>
      <DrawerNavigation setIsVisible={setIsVisible} isVisible={isVisible} />
      <Header setIsVisible={setIsVisible} isVisible={isVisible} />
      <TouchableOpacity onPress={() => navigation.navigate('Plan')}>
        <Button text={'Subscription Plans'} />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
