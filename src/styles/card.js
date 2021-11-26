import {Dimensions} from 'react-native';
import styled from 'styled-components';
const width = Dimensions.get('screen').width / 2 - 30;
export const CardView = styled.View`
  height: 225px;
  background-color: rgb(219, 226, 226);
  width: 170px
  margin-horizontal: 2px;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 15px;
  margin-left:20px
  margin-right:20px
`;
export const SubView = styled.View`
  align-items: flex-end;
`;

export const IconView = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

export const ImgView = styled.View`
  height: 100;
  align-items: center;
`;

export const ImgStyle = styled.Image`
  flex: 1;
  
  height: 50px;
  width:90px
  border-radius:20px
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 17px;
  margin-top: 10px;
`;

export const PriceView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;

export const Price = styled.Text`
  font-weight: bold;
  font-size: 17px;
  margin-top: 10px;
`;

export const CartView = styled.View`
  height: 25px;
  width: 25px;
  background-color: darkblue;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const AddText = styled.Text`
  font-size: 22px;
  color: white;
  font-weight: bold;
`;
