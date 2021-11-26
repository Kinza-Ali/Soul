import React, {useState} from 'react';
import {Container, SubContainer} from '../styles/wrapper';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RoundInput, InputContainer, RoundInputCheckout} from '../styles/input';
import {LoginBackgroundImage} from '../styles/backgroundImage';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {RoundedLoginButton} from '../styles/button';
import {CheckoutFormTitle, ErrorText, FormTitle, Title} from '../styles/text';
import {loginUser} from '../redux/actions/userActions';

const Login = ({navigation}) => {
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const user = useSelector(state => state.allUser.user);
  const errorMessage = useSelector(state => state.allUser.error);
  const dispatch = useDispatch();

  const validateSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required(),
    password: Yup.string().min(6, 'Must be 6 character long').required(),
  });

  return (
    <Container>
      <LoginBackgroundImage source={require('../assets/test.jpeg')}>
        <SubContainer>
          <Title>Login</Title>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={validateSchema}
            onSubmit={values => {
              dispatch(loginUser(values.email, values.password));
              if (user && user._id) {
                navigation.navigate('Home');
              } else {
                if (errorMessage === "Email doesn't exist") {
                  setEmailError(errorMessage);
                  setPasswordError('');
                } else {
                  setPasswordError(errorMessage);
                  setEmailError('');
                }
              }
            }}>
            {props => (
              <InputContainer>
                <CheckoutFormTitle>Email</CheckoutFormTitle>
                <RoundInput
                  placeholder="Enter email"
                  onChangeText={props.handleChange('email')}
                  values={props.values.email}
                  autoCapitalize="none"
                />
                <ErrorText> {props.errors.email}</ErrorText>
                <ErrorText> {emailError}</ErrorText>
                <CheckoutFormTitle>Password</CheckoutFormTitle>
                <RoundInput
                  password
                  onChangeText={props.handleChange('password')}
                  values={props.values.password}
                  placeholder="Enter password"
                />
                <ErrorText> {props.errors.password}</ErrorText>
                <ErrorText> {passwordError}</ErrorText>

                <RoundedLoginButton
                  title="Login"
                  onPress={props.handleSubmit}
                />
              </InputContainer>
            )}
          </Formik>
        </SubContainer>
      </LoginBackgroundImage>
    </Container>
  );
};

export default Login;
