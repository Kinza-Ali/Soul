import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../redux/actions/cartActions';

import {
  Btn,
  ButtonText,
  DcereaseQuantityButton,
  DcereaseQuantityText,
  IncreaseQuantityButton,
  IncreaseQuantityText,
  ItemText,
  MainOrderView,
  MainView,
  OutOfStock,
  PriceTitle,
  ProductDescription,
  ProductDescriptionView,
  ProductQuantityView,
  ProductTitleView,
  ProductImage,
  ProductQuantity,
  ProductTitle,
  PriceView,
  QuantityButton,
  QuantityTitle,
  QuantityText,
  QuantityView,
  SafeAreaContainer,
  SubOrderView,
  SubView,
  ViewButtons,
  DescriptionTitle,
} from '../styles/singleProduct';

const SingleProduct = ({route, navigation}) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([
    {
      id: 4,
      productName: 'bhb',
      productType: 1,
      price: 600,
      quantity: 34,
      image: 2,
    },
  ]);
  const [qty, setqty] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let product = route.params;
    setProducts(product);
  });

  const editOrder = action => {
    if (action === '+') {
      if (products.quantity > 0) {
        setqty(qty + 1);
        products.quantity = products.quantity - 1;
        setPrice(Number(price) + Number(products.price));
      }
    } else {
      if (qty > 0) {
        setqty(qty - 1);
        products.quantity = products.quantity + 1;
        setPrice(parseInt(price - products.price));
      }
    }
  };

  const handleAddToCart = product => {
    dispatch(addToCart(product, qty));
    navigation.navigate('Cart');
  };

  const renderProductInfo = () => {
    return (
      <MainView>
        <SubView>
          <ProductImage source={{uri: products.image}} resizeMode="cover" />
          <QuantityView>
            <DcereaseQuantityButton onPress={() => editOrder('-')}>
              <DcereaseQuantityText>-</DcereaseQuantityText>
            </DcereaseQuantityButton>
            <QuantityButton>
              <QuantityText>{qty}</QuantityText>
            </QuantityButton>
            <IncreaseQuantityButton onPress={() => editOrder('+')}>
              <IncreaseQuantityText>+</IncreaseQuantityText>
            </IncreaseQuantityButton>
          </QuantityView>
        </SubView>
      </MainView>
    );
  };

  const renderOrder = () => {
    return (
      <MainOrderView>
        <ProductTitleView>
          <ProductTitle>{products.productName}</ProductTitle>
          <PriceView>
            <PriceTitle> RS.{products.price}</PriceTitle>
          </PriceView>
        </ProductTitleView>
        <ProductDescriptionView>
          <DescriptionTitle>Description</DescriptionTitle>
          <ProductDescription>Product is very decent</ProductDescription>
        </ProductDescriptionView>
        <ProductQuantityView>
          <QuantityTitle>Quantity</QuantityTitle>
          {products.quantity < 1 ? (
            <OutOfStock>Out of Stock </OutOfStock>
          ) : (
            <ProductQuantity>{products.quantity}</ProductQuantity>
          )}
        </ProductQuantityView>
        <SubOrderView>
          <ItemText>{qty} items in the cart</ItemText>
          <ItemText>Rs. {price}</ItemText>
        </SubOrderView>
        <ViewButtons>
          <Btn
            disabled={qty == 0 ? true : false}
            onPress={() => handleAddToCart(products)}>
            <ButtonText>Add to Cart</ButtonText>
          </Btn>
        </ViewButtons>
      </MainOrderView>
    );
  };
  return (
    <SafeAreaContainer>
      {renderProductInfo()}
      {renderOrder()}
    </SafeAreaContainer>
  );
};

export default SingleProduct;
