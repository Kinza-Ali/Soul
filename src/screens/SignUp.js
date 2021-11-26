import React from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {RoundInputCheckout} from '../styles/input';
import {RoundedCheckoutButton} from '../styles/button';
import {CheckoutFormTitle, ErrorText, FormTitle, Title} from '../styles/text';
import {useDispatch, useSelector} from 'react-redux';
import {addUserData} from '../redux/actions/userActions';

const SignUp = ({navigation}) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(state => state.allUser.error);
  const user = useSelector(state => state.allUser.user);
  console.log(user.email);
  const validateSchema = Yup.object().shape({
    name: Yup.string()
      .min(7, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    contact: Yup.string()
      .min(14, 'Must be 14 digit number')
      .max(14, 'Must be 14 digit numer')
      .required(),
    password: Yup.string().min(6, 'Must be 6 character long').required(),
  });

  return (
    <View>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          contact: '',
        }}
        validationSchema={validateSchema}
        onSubmit={values => {
          console.log(values);
          dispatch(addUserData(values));
          // console.log(user.email);
          if (!errorMessage) {
            navigation.navigate('Home');
          }
        }}>
        {props => (
          <View>
            <FormTitle> SignUp</FormTitle>
            <CheckoutFormTitle>Name</CheckoutFormTitle>
            <RoundInputCheckout
              placeholder="Enter name"
              onChangeText={props.handleChange('name')}
              values={props.values.name}
            />
            <ErrorText> {props.errors.name}</ErrorText>

            <CheckoutFormTitle>Email</CheckoutFormTitle>
            <RoundInputCheckout
              placeholder="Enter email"
              onChangeText={props.handleChange('email')}
              values={props.values.email}
              autoCapitalize="none"
            />
            <ErrorText> {props.errors.email}</ErrorText>
            <ErrorText> {errorMessage}</ErrorText>
            <CheckoutFormTitle>Password</CheckoutFormTitle>
            <RoundInputCheckout
              password
              onChangeText={props.handleChange('password')}
              values={props.values.password}
              type="password"
            />
            <ErrorText> {props.errors.password}</ErrorText>

            <CheckoutFormTitle>Phone</CheckoutFormTitle>
            <RoundInputCheckout
              placeholder="Enter contact"
              onChangeText={props.handleChange('contact')}
              values={props.values.contact}
            />
            <ErrorText> {props.errors.contact}</ErrorText>

            <RoundedCheckoutButton
              title="SignUp"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignUp;
