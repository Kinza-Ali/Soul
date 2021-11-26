import React from 'react';
import {View, Text} from 'react-native';
import {Avatar, Caption} from 'react-native-paper';
import {
  Container,
  SafeAreaContainer,
  Title,
  AvatarContainer,
  TitleContainer,
  LogoutContainer,
  BtnContainer,
  Logout,
} from '../styles/profile';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import {IconButton} from '../styles/home';
import {logout} from '../redux/actions/userActions';
import {RoundedLogoutButton} from '../styles/button';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.allUser.user);
  // console.log(JSON.stringify(user) + 'from profile');
  const userName = user.name || null;

  const logoutUser = () => {
    dispatch(logout());

    navigation.navigate('main');
  };

  return (
    <SafeAreaContainer>
      <Container>
        <AvatarContainer>
          <Avatar.Image source={require('../assets/avatar.jpeg')} size={80} />
          <TitleContainer>
            <Title>{userName}</Title>
            <Caption>{user.email}</Caption>
          </TitleContainer>
        </AvatarContainer>
        <LogoutContainer>
          <RoundedLogoutButton onPress={logoutUser}>
            <BtnContainer>
              <Logout>Logout</Logout>
              <Icon name="power-off" size={30} color="white" />
            </BtnContainer>
          </RoundedLogoutButton>
        </LogoutContainer>
      </Container>
    </SafeAreaContainer>
  );
};

export default Profile;
