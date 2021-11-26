import styled from 'styled-components';

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  padding-horizontal: 20px;
  background-color: white;
`;

export const Header = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 10px;
`;
export const IconsView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-right: 5px;
  margin-left: 20px;
`;
export const HeaderText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: darkblue;
`;

export const FlatListView = styled.View`
  margin-top: 10px;
`;

//MainCategory styling
export const MainCategoryContainer = styled.View`
  padding: 20px;
  margin-top: 5px;
`;
export const MainText = styled.Text`
  font-size: 20px;
  line-height: 20px;

  color: #1d3557;
`;
export const MainCategoryText = styled.Text`
  font-size: 25px;
  line-height: 30px;
  color: #1d3557;
`;

export const CategoryButton = styled.TouchableOpacity`
  padding: 10px;
  padding-bottom: 20px;
  background-color: #457b9d;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const BackgroundView = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 0px;
`;

export const CategoryImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 60px;
`;

export const CategoryText = styled.Text`
  margin-top: 10px;
  color: white;
  font-size: 12px;
  line-height: 22px;
`;

export const IconButton = styled.TouchableOpacity`
  margin: 4px;
`;

export const QunatityView = styled.View`
  position: absolute;
  top: 2px;
  right: -9px;
  height: 15px;
  width: 15px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: #fae1dd;
`;

export const QuantityText = styled.Text`
  color: black;
  font-size: 10px;
  line-height: 0px;
`;
