import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {Avatar} from 'react-native-paper';
import {RFValue} from 'react-native-responsive-fontsize';

const Header = ({setIsVisible, isVisible}) => {
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
      <View style={styles.center}>
        <Text style={styles.text}>Brokazy</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  view1: {flexDirection: 'row', backgroundColor: '#000', alignItems: 'center'},
  containerStyle: {flex: 3, backgroundColor: '#000'},
  inputContainerStyle: {backgroundColor: '#fff'},
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: RFValue(15),
    fontWeight: '700',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
