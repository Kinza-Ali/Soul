import React from 'react';
import styled from 'styled-components';

export const RoundButton = styled.TouchableOpacity`
  height: 60px;
  border-radius: 30px;
  width: 180px;
  justify-content: center;
  align-items: center;
  background-color: #cfdbd5;
  margin-bottom: 17px
  margin-top: 16px;
`;
export const RoundLoginButton = styled.TouchableOpacity`
  height: 50px;
  border-radius: 30px;
  width: 180px;
  justify-content: center;
  align-items: center;
  background-color: #0353a4;
  margin-top: 12px;
  margin-left: 70px;
`;
export const RoundCheckoutButton = styled.TouchableOpacity`
  height: 40px;
  border-radius: 30px;
  width: 180px;
  justify-content: center;
  align-items: center;
  background-color: #0353a4;
  margin-top: 12px;
  margin-left: 110px;
`;
export const CheckoutButtonText = styled.Text`
  color: white;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
`;
export const ButtonText = styled.Text`
  color: black;
  font-size: 16px;
`;

export const RoundedButton = ({onPress, title}) => (
  <RoundButton onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </RoundButton>
);
export const RoundedCheckoutButton = ({onPress, title}) => (
  <RoundCheckoutButton onPress={onPress}>
    <CheckoutButtonText>{title}</CheckoutButtonText>
  </RoundCheckoutButton>
);
export const RoundedSignOutoutButton = ({onPress, title, disabled}) => (
  <RoundCheckoutButton onPress={onPress} disabled={disabled}>
    <CheckoutButtonText>{title}</CheckoutButtonText>
  </RoundCheckoutButton>
);
export const RoundedLoginButton = ({onPress, title, disabled}) => (
  <RoundLoginButton onPress={onPress} disabled={disabled}>
    <CheckoutButtonText>{title}</CheckoutButtonText>
  </RoundLoginButton>
);
export const RoundedLogoutButton = styled.TouchableOpacity`
  background-color: black;
  width: 140px;
  padding-left: 20px;
  height: 60px;
  border-radius: 20px;
`;
