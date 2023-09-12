import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {Avatar} from 'react-native-paper';
import {makeStyles} from './styles';
import {commonStyles} from '../../../styles';

const Header = ({setIsVisible, isVisible}) => {
  const commonStyle = commonStyles();
  const styles = makeStyles();
  return (
    <View style={styles.view1}>
      <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
        <Avatar.Image
          size={50}
          source={require('../../assets/images/avatar.jpeg')}
          color="black"
          testID={'avatar'}
        />
      </TouchableOpacity>
      <SearchBar
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
        searchIcon={{size: 24}}
        placeholder="Search"
      />
      <View style={commonStyle.center}>
        <Text style={styles.text}>Brokazy</Text>
      </View>
    </View>
  );
};

export default Header;
