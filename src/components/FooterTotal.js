import React from 'react';
import {View, Text} from 'react-native';
import {
  SubTotalContainer,
  SubTotalText,
  SubTotalPriceText,
  TotalContainer,
  ShippingFeeContainer,
  ShippingFeeText,
  ShippingFeePriceText,
  TotalView,
  TotalTitle,
  TotalPriceText,
  OrderButton,
  ViewButtons,
  ButtonText,
} from '../styles/footerTotal';

const FooterTotal = ({totalItems, subTotal, shippingFee, total, onPress}) => {
  return (
    <View>
      <TotalContainer>
        <SubTotalContainer>
          <SubTotalText>Total Items ({totalItems} items)</SubTotalText>
        </SubTotalContainer>
        <SubTotalContainer>
          <SubTotalText>Subtotal</SubTotalText>
          <SubTotalPriceText>Rs. {subTotal}</SubTotalPriceText>
        </SubTotalContainer>
        <ShippingFeeContainer>
          <ShippingFeeText>Shipping Fee</ShippingFeeText>
          <ShippingFeePriceText>Rs. {shippingFee}</ShippingFeePriceText>
        </ShippingFeeContainer>
        <TotalView>
          <TotalTitle>Total:</TotalTitle>
          <TotalPriceText>Rs. {total}</TotalPriceText>
        </TotalView>
        <ViewButtons>
          <OrderButton onPress={onPress}>
            <ButtonText>Place Your Order</ButtonText>
          </OrderButton>
        </ViewButtons>
      </TotalContainer>
    </View>
  );
};

export default FooterTotal;
