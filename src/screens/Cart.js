import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SwipeListView} from 'react-native-swipe-list-view';
import Icons from 'react-native-vector-icons/FontAwesome';
import {
  removeFromCart,
  changeQuantity,
  getItem,
} from '../redux/actions/cartActions';
import {StepperInput, FooterTotal} from '../components';
import {
  RenderImage,
  RenderImageView,
  RenderInfo,
  RenderPrice,
  RenderText,
  RenderView,
  SafeAreaContainer,
  IconButton,
} from '../styles/cart';

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const CartData = useSelector(state => state.allCart.cart);
  const [cartList, setCartList] = useState(CartData);
  const [subTotalprice, setSubTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const totalPrice = subTotalprice > 0 ? `${subTotalprice + 200}` : 0;
  useEffect(() => {
    let items = 0;
    let price = 0;

    CartData.forEach(item => {
      items += item.quantity;
      price += item.quantity * item.price;
    });
    setSubTotalPrice(price);
    setTotalItems(items);
  }, [CartData, subTotalprice, setSubTotalPrice, totalItems, setTotalItems]);

  const updateQuantityHandler = (newQty, id) => {
    const newMyCartList = cartList.map(list =>
      list.id === id ? {...list, quantity: newQty} : list,
    );
    setCartList(newMyCartList);
    dispatch(changeQuantity(id, newQty));
  };

  const removeCartItem = id => {
    dispatch(removeFromCart(id));
  };

  const renderCartList = () => {
    return (
      <SwipeListView
        data={CartData}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={{
          marginTop: 12,
          paddingHorizontal: 24,
          paddingBottom: 48,
        }}
        disableRightSwipe={true}
        rightOpenValue={-75}
        renderItem={(data, rowMap) => (
          <RenderView>
            <RenderImageView>
              <RenderImage
                source={{uri: data.item.image}}
                resizeMode="contain"
              />
            </RenderImageView>
            <RenderInfo>
              <RenderText>{data.item.productName}</RenderText>
              <RenderPrice>Rs. {data.item.price}</RenderPrice>
            </RenderInfo>

            <StepperInput
              value={data.item.quantity}
              onAdd={() =>
                updateQuantityHandler(data.item.quantity + 1, data.item._id)
              }
              onMinus={() => {
                if (data.item.quantity > 1) {
                  updateQuantityHandler(data.item.quantity - 1, data.item._id);
                }
              }}
            />
          </RenderView>
        )}
        renderHiddenItem={(data, rowMap) => (
          <IconButton onPress={() => removeCartItem(data.item._id)}>
            <Icons name="trash-o" size={35} color="white" />
          </IconButton>
        )}
      />
    );
  };

  return (
    <SafeAreaContainer>
      {renderCartList()}
      <FooterTotal
        totalItems={totalItems}
        subTotal={subTotalprice}
        shippingFee={200}
        total={totalPrice}
        onPress={() => {
          if (CartData != '') navigation.navigate('Checkout', {totalPrice});
          else {
            alert('Cart is empty');
          }
        }}
      />
    </SafeAreaContainer>
  );
};

export default Cart;
