import styled from 'styled-components';

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

//productInfo styling
export const MainView = styled.View`
  align-item: center;
`;

export const SubView = styled.View`
  height: 400px;
`;

export const ProductImage = styled.Image`
  width: 310px;
  height: 300px;
  margin-top: -20px;
  margin-left: 50px;
`;

export const QuantityView = styled.View`
  position: absolute;
  bottom: 100px;
  width: 148px;
  height: 45px;
  justify-content: center;
  flex-direction: row;
  margin-left: 130px;
`;

export const DcereaseQuantityButton = styled.TouchableOpacity`
  width: 40px;
  background-color: #f6f6f7;
  align-item: center;
  justify-content: center;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
`;

export const DcereaseQuantityText = styled.Text`
  font-size: 30px;
  line-height: 36px;
  margin-left: 20px;
`;

export const QuantityButton = styled.TouchableOpacity`
  width: 50px;
  background-color: #f6f6f7;
  align-item: center;
  justify-content: center;
`;

export const QuantityText = styled.Text`
  font-size: 23px;
  line-height: 30px;
  margin-left: 20px;
`;

export const IncreaseQuantityButton = styled.TouchableOpacity`
  width: 40px;
  background-color: #f6f6f7;
  align-item: center;
  justify-content: center;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const IncreaseQuantityText = styled.Text`
  font-size: 30px;
  line-height: 36px;
  margin-left: 10px;
`;

//name and description styling

export const ProductTitleView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 20px;
  margin-top: 20px;
  padding-horizontal: 20px;
`;

export const ProductTitle = styled.Text`
  font-size: 22px;
  font-weight:bold
  margin-vertical: 10px;
  line-height: 30px;
  margin-left:-20px
`;

export const PriceView = styled.View`
  background-color: #0353a4;
  width: 100px;
  height: 40px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  justify-content: center;
  margin-right: -17px;
`;
export const PriceTitle = styled.Text`
  margin-left: 15px;
  color: white;
  font-weight: bold;
  font-size: 16px;
`;
export const ProductDescriptionView = styled.View`
  padding-horizontal: 20px;
  margin-top: 5px;
`;
export const ProductQuantityView = styled.View`
  padding-horizontal: 20px;
  margin-top: 10px;
`;
export const DescriptionTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
export const QuantityTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
export const ProductDescription = styled.Text`
  font-size: 15px;
  line-height: 22px;
`;
export const ProductQuantity = styled.Text`
  font-size: 15px;
  line-height: 22px;
`;
export const OutOfStock = styled.Text`
  color: red;
  font-size: 15px;
  line-height: 22px;
`;

// Order styling

export const MainOrderView = styled.View`
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  height:100%
  background-color: #F1F1F1;
  margin-top:-90px
  
`;

export const SubOrderView = styled.View`
  border-bottom-color: #f6f6f7;
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 20px;
  padding-horizontal: 30px;
`;

export const ItemText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  line-height: 20px;
  margin-left: -10px;
`;
// Add to cart or proceed to checkout buttons
export const ViewButtons = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 7px;
`;

export const Btn = styled.TouchableOpacity`
border-radius:30px
background-color:#0353a4;
margin-bottom:10px
padding:8px;
height:40px
width: 250px;
`;
export const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
`;
