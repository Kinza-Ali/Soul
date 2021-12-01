import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {RoundInputCheckout} from '../styles/input';
import {RoundedCheckoutButton, RoundedSignOutoutButton} from '../styles/button';
import {CheckoutFormTitle, ErrorText, FormTitle, Title} from '../styles/text';
import {useDispatch, useSelector} from 'react-redux';
import {addUserData} from '../redux/actions/userActions';

const SignUp = ({navigation}) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(state => state.allUser.error);
  const [animating, setAnimating] = useState(false);
  const user = useSelector(state => state.allUser.user);

  const validateSchema = Yup.object().shape({
    name: Yup.string()
      .min(7, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    contact: Yup.string()
      .min(11, 'Must be 11 digit number')
      .max(11, 'Must be 11 digit numer')
      .required(),
    password: Yup.string().min(6, 'Must be 6 character long').required(),
  });

  useEffect(() => {
    if (user && user.email) {
      navigation.navigate('Home');
    }
  }, [user, user?.email]);

  const closeActivityIndicator = () => {
    setTimeout(() => setAnimating(false), 6000);
  };

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
          setAnimating(true);
          closeActivityIndicator();
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

            <RoundedSignOutoutButton
              title={animating ? <ActivityIndicator /> : 'SignUp'}
              onPress={props.handleSubmit}
              disabled={animating}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignUp;
