import React from 'react';
import {RoundedButton} from '../styles/button';
import {Container, SubContainer} from '../styles/wrapper';
import {LoginBackgroundImage} from '../styles/backgroundImage';
import {Title} from '../styles/text';

const SplashScreen = ({navigation}) => {
  return (
    <Container>
      <LoginBackgroundImage source={require('../assets/main.jpeg')}>
        <SubContainer>
          <RoundedButton
            title="Login"
            onPress={() => navigation.navigate('Login')}
          />
          <RoundedButton
            title="SignUp"
            onPress={() => navigation.navigate('SignUp')}
          />
        </SubContainer>
      </LoginBackgroundImage>
    </Container>
  );
};

export default SplashScreen;
