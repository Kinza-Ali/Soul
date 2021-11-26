import React from 'react';
import {IconButtons, IconImage} from '../styles/iconButton';

const IconButton = ({icon, onPress}) => {
  return (
    <IconButtons onPress={onPress}>
      <IconImage source={icon} />
    </IconButtons>
  );
};

export default IconButton;
