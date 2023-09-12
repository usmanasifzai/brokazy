import React, {useState} from 'react';
import {View, Text, Switch, TouchableOpacity} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {makeStyles} from './styles';

const DrawerRow = ({name, text, onClick = () => {}}) => {
  const styles = makeStyles();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.view1}>
      <TouchableOpacity style={styles.view2} onPress={onClick}>
        {name === 'rate-review' && (
          <MaterialIcons name={name} color={'#323232'} size={30} />
        )}
        {(name === 'notifications' || name === 'exit') && (
          <Ionicons name={name} color={'#323232'} size={30} />
        )}
        {name === 'block' && <Entypo name={name} color={'#323232'} size={30} />}
        {(name === 'user' ||
          name === 'save' ||
          name === 'plus' ||
          name === 'exclamationcircleo') && (
          <AntIcon name={name} color={'#323232'} size={30} />
        )}
        <Text style={styles.text1}>{text}</Text>
      </TouchableOpacity>
      <View>
        {name === 'notifications' && (
          <Switch
            testID="switch"
            trackColor={{false: '#767577', true: '#34c759'}}
            thumbColor={isEnabled ? 'white' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        )}
      </View>
    </View>
  );
};

export default DrawerRow;
