import styled from 'styled-components';

export const TotalContainer = styled.View`
padding:24px;
border-top-left:20px
border-top-right:20px
background-color:#F5F5F8;
border-top-left-radius:25px;
border-top-right-radius:25px;

`;
export const SubTotalContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const SubTotalText = styled.Text`
  flex-direction: row;
  font-size: 16px;
  line-height: 22px;
`;
export const SubTotalPriceText = styled.Text`
  flex-direction: row;
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
`;

export const ShippingFeeContainer = styled.View`
  flex-direction: row;
  margin-top: 8px;
  margin-bottom: 24px;
  justify-content: space-between;
`;

export const ShippingFeeText = styled.Text`
  flex: 1;
  font-size: 16px;
  line-height: 22px;
`;

export const ShippingFeePriceText = styled.Text`
  flex-direction: row;
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
`;

export const TotalView = styled.View`
  flex-direction: row;
  margin-top: 24px;
`;

export const TotalTitle = styled.Text`
  flex: 1;
  font-size: 22px;
  font-weight: bold;
  line-height: 30px;
`;

export const TotalPriceText = styled.Text`
  flex-direction: row;
  font-size: 22px;
  font-weight: bold;
  line-height: 30px;
`;
export const ViewButtons = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const OrderButton = styled.TouchableOpacity`
  heigth: 60px;
  margin-top: 24px;
  border-radius: 12px;
  background-color: #0353a4;
  border-radius:30px
align-items:center
margin-bottom:20px
padding-top:10px;
height:45px
width: 250px;
`;
export const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
`;
