import styled from 'styled-components';

export const RoundInput = styled.TextInput.attrs(props => ({
  secureTextEntry: props.password ? true : false,
  placeholderTextColor: 'grey',
}))`
  font-size: 18px;
  background-color: rgb(219, 226, 226);
  width:290px
  height:50px;
  margin:16px
  border-radius:20px;
  color:grey
  padding-left:15px
`;
export const RoundInputCheckout = styled.TextInput.attrs(props => ({
  secureTextEntry: props.password ? true : false,
  placeholderTextColor: 'grey',
}))`
  font-size: 14px;
  background-color: rgb(219, 226, 226);
  width:80%
  height:40px;
  margin-top:5px
  margin-left:30px
  border-radius:30px;
  color:grey
  padding-left:15px
`;

export const InputContainer = styled.View`
  flex-direction: column;
  padding-bottom: 10px;
  justify-content: center;
`;
