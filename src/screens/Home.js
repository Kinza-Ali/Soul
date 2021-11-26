import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  SafeAreaContainer,
  Header,
  TextView,
  HeaderText,
  FlatListView,
  MainCategoryContainer,
  MainText,
  MainCategoryText,
  CategoryButton,
  BackgroundView,
  CategoryImage,
  CategoryText,
  IconsView,
  IconButton,
  QunatityView,
  QuantityText,
} from '../styles/home';
import Icon from 'react-native-vector-icons/FontAwesome';
import {category} from '../const/data';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {
  CardView,
  SubView,
  ImgView,
  ImgStyle,
  Title,
  PriceView,
  Price,
  CartView,
  AddText,
  IconView,
} from '../styles/card';
import {getProducts} from '../redux/actions/productActions';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.allUser.user);
  const cartData = useSelector(state => state.allCart.cart);
  const products = useSelector(state => state.allProducts.products.data);
  // console.log(products);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [productItems, setProductItems] = useState(products);
  const [quantity, setQuantity] = useState(0);
  let counter = 0;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    itemQuantity();
  });

  const itemQuantity = () => {
    console.log(JSON.stringify(cartData) + 'data');
    cartData.map(item => (counter += item.quantity));
    setQuantity(counter);
  };
  const Card = ({products}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SingleProduct', products);
        }}>
        <CardView>
          <SubView>
            <IconView>
              <Icon name="heart-o" size={15} color="black" />
            </IconView>
          </SubView>
          <ImgView>
            <ImgStyle source={{uri: products.image}} />
          </ImgView>
          <Title> {products.productName}</Title>
          <PriceView>
            <Price> Rs. {products.price}</Price>
            <CartView>
              <AddText>+</AddText>
            </CartView>
          </PriceView>
        </CardView>
      </TouchableOpacity>
    );
  };

  const onSelectCategory = category => {
    let productList = products.filter(prod => prod.productType === category.id);

    setProductItems(productList);
    // console.log(productList);
    setSelectedCategory(category);
  };

  const renderHeader = () => {
    return (
      <Header>
        <View>
          <HeaderText> Soul</HeaderText>
        </View>
        <IconsView>
          <IconButton onPress={() => navigation.navigate('Profile')}>
            <Icon name="user-o" size={33} color="black" />
          </IconButton>
          <IconButton onPress={() => navigation.navigate('Cart')}>
            <Icon name="shopping-cart" size={38} color="black" />
            <QunatityView>
              <QuantityText>{quantity}</QuantityText>
            </QunatityView>
          </IconButton>
        </IconsView>
      </Header>
    );
  };

  const renderMainCategories = () => {
    const renderItem = ({item}) => {
      return (
        <CategoryButton
          onPress={() => {
            onSelectCategory(item);
          }}>
          <BackgroundView>
            <CategoryImage source={item.icon} resizeMode="contain" />
          </BackgroundView>
          <CategoryText>{item.name}</CategoryText>
        </CategoryButton>
      );
    };

    return (
      <MainCategoryContainer>
        <MainText>Main</MainText>
        <MainCategoryText>Categories</MainCategoryText>
        <FlatList
          data={category}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{paddingVertical: 20}}
        />
      </MainCategoryContainer>
    );
  };

  const renderProducts = () => {
    return (
      <FlatListView>
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{marginTop: 10, paddingBottom: 50}}
          numColumns={2}
          data={productItems}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Card products={item} />}
        />
      </FlatListView>
    );
  };

  return (
    <SafeAreaContainer>
      {renderHeader()}
      {renderMainCategories()}
      {renderProducts()}
    </SafeAreaContainer>
  );
};

export default Home;
