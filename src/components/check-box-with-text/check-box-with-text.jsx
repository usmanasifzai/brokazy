import React from 'react';
import {View, Text} from 'react-native';

import {commonStyles} from '../../../styles';
import CheckBox from '../checkbox/checkbox';

const CheckBoxWithText = (style1 = {}) => {
  const commonStyle = commonStyles();
  return (
    <View style={[commonStyle.checkbox, style1]}>
      <CheckBox />
      <Text style={commonStyle.text}>Extra member benefits</Text>
    </View>
  );
};

export default CheckBoxWithText;
