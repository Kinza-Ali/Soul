import styled from 'styled-components';

export const SafeAreaContainer = styled.View`
  flex: 1;
  background-color: white;
`;

export const RenderView = styled.View`
  height: 100px;
  background-color: #f5f5f8;
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
  padding-horizontal: 12px;
  border-radius: 12px;
`;

export const RenderText = styled.Text`
  font-size: 16px;
  line-height: 22px;
`;

export const RenderPrice = styled.Text`
  font-size: 16px;
  line-height: 22px;
  color: #ff6c44;
`;
export const RenderImageView = styled.View`
  width: 90px;
  height: 100px;
  margin-left: -10px;
`;
export const RenderImage = styled.Image`
  width: 90%;
  height: 90%;
  position: absolute;
  top: 5px;
  border-radius: 20px;
`;
export const RenderInfo = styled.View`
  flex: 1;
`;

//productInfo styling

export const QuantityView = styled.View`
  position: absolute;
  width: 100px;
  height: 50px;
  flex-direction: row;
  margin-left: 230px;
`;

export const DcereaseQuantityButton = styled.TouchableOpacity`
  width: 25px;
  background-color: white;
  align-item: center;
  justify-content: center;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
`;

export const DcereaseQuantityText = styled.Text`
  font-size: 20px;
  line-height: 36px;
  margin-left: 10px;
`;

export const QuantityButton = styled.TouchableOpacity`
  width: 50px;
  background-color: white;
  align-item: center;
  justify-content: center;
`;

export const QuantityText = styled.Text`
  font-size: 20px;
  line-height: 36px;
  margin-left: 20px;
`;

export const IncreaseQuantityButton = styled.TouchableOpacity`
  width: 20px;
  background-color: white;
  align-item: center;
  justify-content: center;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const IncreaseQuantityText = styled.Text`
  font-size: 20px;
  line-height: 36px;
`;

export const IconButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-end;
  background-color: #ff6c44;
  margin-right: 10px;
  flex-ditection: row;
  align-items: flex-end;
  padding-bottom:35px
  margin-top: 12px;
  padding-horizontal: 12px;
  border-radius: 12px;
`;
