import React from 'react';
import {TouchableOpacity} from 'react-native';
import TickIcon from '../../assets/svgs/tick';
import {commonStyles} from '../../../styles';

const CheckBox = () => {
  const commonStyle = commonStyles();
  return (
    <TouchableOpacity activeOpacity={1} style={commonStyle.checkboxView}>
      <TickIcon height={10} width={10} fill="#fff" />
    </TouchableOpacity>
  );
};

export default CheckBox;
