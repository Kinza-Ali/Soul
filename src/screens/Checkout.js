import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {RoundInputCheckout} from '../styles/input';
import {RoundedCheckoutButton} from '../styles/button';
import {CheckoutFormTitle, ErrorText, FormTitle, Title} from '../styles/text';
import {addOrder} from '../redux/actions/orderActions';

const Checkout = ({navigation, route}) => {
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.allCart.cart);
  const user = useSelector(state => state.allUser.user);
  const items = [];
  const {totalPrice} = route.params;
  const validateSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    address: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string()
      .min(11, 'Must be 11 digit number')
      .max(11, 'Must be 11 digit numer')
      .required('Enter phone number'),
    country: Yup.string().required(),
    city: Yup.string().required(),
    postalCode: Yup.number()
      .required()
      .min(10000, 'Must be exactly 5 characters')
      .max(99999, 'Must be exactly 5 characters')
      .label('Zip Code'),
  });

  const getItems = () => {
    cartData.map(product => {
      items.push({productId: product._id, quantity: product.quantity});
    });
  };

  const handleOrder = values => {
    getItems();
    var date = new Date();
    orderData = {
      item: items,
      deliveryDate:
        date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
      customerId: user._id,
      address: values.address,
    };
    console.log(orderData);
    dispatch(addOrder(orderData));
    navigation.navigate('Home');
  };

  return (
    <View>
      <Formik
        initialValues={{
          name: '',
          address: '',
          email: '',
          phone: '',
          city: '',
          country: '',
          postalCode: '',
        }}
        validationSchema={validateSchema}
        onSubmit={handleOrder}>
        {props => (
          <View>
            <FormTitle> Shipping</FormTitle>
            <CheckoutFormTitle>Name</CheckoutFormTitle>
            <RoundInputCheckout
              placeholder="Enter name"
              onChangeText={props.handleChange('name')}
              values={props.values.name}
            />
            <ErrorText> {props.errors.name}</ErrorText>
            <CheckoutFormTitle>Address</CheckoutFormTitle>
            <RoundInputCheckout
              placeholder="Enter address"
              onChangeText={props.handleChange('address')}
              values={props.values.address}
            />
            <ErrorText> {props.errors.address}</ErrorText>
            <CheckoutFormTitle>Email</CheckoutFormTitle>
            <RoundInputCheckout
              placeholder="Enter email"
              onChangeText={props.handleChange('email')}
              values={props.values.email}
            />
            <ErrorText> {props.errors.email}</ErrorText>
            <CheckoutFormTitle>Phone</CheckoutFormTitle>
            <RoundInputCheckout
              placeholder="Enter phone"
              onChangeText={props.handleChange('phone')}
              values={props.values.phone}
            />
            <ErrorText> {props.errors.phone}</ErrorText>
            <CheckoutFormTitle>City</CheckoutFormTitle>
            <RoundInputCheckout
              placeholder="Enter city"
              onChangeText={props.handleChange('city')}
              values={props.values.city}
            />
            <ErrorText> {props.errors.city}</ErrorText>
            <CheckoutFormTitle>Country</CheckoutFormTitle>
            <RoundInputCheckout
              placeholder="Enter country"
              onChangeText={props.handleChange('country')}
              values={props.values.country}
            />
            <ErrorText> {props.errors.country}</ErrorText>
            <CheckoutFormTitle>Postal Code</CheckoutFormTitle>
            <RoundInputCheckout
              placeholder="Enter postalCode"
              onChangeText={props.handleChange('postalCode')}
              values={props.values.postalCode}
            />
            <ErrorText> {props.errors.postalCode}</ErrorText>
            <CheckoutFormTitle>
              {' '}
              TotalAmount: Rs. {totalPrice}
            </CheckoutFormTitle>
            <RoundedCheckoutButton
              title="Confirm Order"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Checkout;
