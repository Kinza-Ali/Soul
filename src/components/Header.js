import React from 'react';
import {HeaderView, MainView} from '../styles/header';
import {Title} from '../styles/text';
const Header = ({title, leftComponent, rightComponent}) => {
  return (
    <HeaderView>
      {leftComponent}
      <MainView>
        <Title>{title}</Title>
      </MainView>
      {rightComponent}
    </HeaderView>
  );
};

export default Header;
