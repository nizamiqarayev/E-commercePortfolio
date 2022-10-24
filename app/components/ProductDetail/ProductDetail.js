import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import px from '../../assets/utility/dimension';
import Share from 'react-native-share';
import Antdesign from 'react-native-vector-icons/AntDesign';
import colors from '../../config/colors';
import Reviews from '../Reviews/Reviews';
import ProductCard from '../ProductCard/ProductCard';
import Button from '../UI/Button';
import base from '../../helpers/base';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import AddedButton from '../UI/AddedButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import ProductsCarousel from '../HomePage/Products/ProductsCarousel';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductDetail = ({route}) => {
  const id = route.params?.id ? route.params.id : '';
  const [data, setData] = useState({});
  const [store, setStore] = useState({});
  const [loading, setLoading] = useState(false);
  const [addedWish, setAddedWish] = useState(false);
  const [inCard, setInCard] = useState(false);

  const navigation = useNavigation();

  const productsAllData = useSelector(state => state.products);

  /// Wishlist

  //mentiqi tam dogru deyil, wishlist store da saxlanilmalidi login olduqda, ordan check olunmalidi;

  const deleteFromWishList = async () => {
    try {
      const userId = await AsyncStorage.getItem('_id');
      if (!userId) {
        let wishlist = await AsyncStorage.getItem('wishlist');
        if (wishlist) wishlist = JSON.parse(wishlist);
        else return setAddedWish(false);
        const filtered = wishlist.filter(item => item._id !== id);
        await AsyncStorage.setItem('wishlist', JSON.stringify(filtered));
        return setAddedWish(false);
      }
      await base.api().delete('wishlists/delete', {
        data: {
          userId,
          productId: id,
        },
      });
      setAddedWish(false);
    } catch (error) {
      console.log(error);
    }
  };

  const addToWishlist = async () => {
    if (addedWish) return deleteFromWishList();
    try {
      const userId = await AsyncStorage.getItem('_id');
      if (!userId) {
        let wishlist = await AsyncStorage.getItem('wishlist');
        if (wishlist) {
          wishlist = JSON.parse(wishlist);
          wishlist.push(data);
          await AsyncStorage.setItem('wishlist', JSON.stringify(wishlist));
        } else await AsyncStorage.setItem('wishlist', JSON.stringify([data]));
        return setAddedWish(true);
      }
      await base.api().post('wishlists/create', {
        userId,
        productId: id,
      });
      setAddedWish(true);
    } catch (error) {
      console.log({error});
    }
  };

  const getWishlist = async () => {
    try {
      const userId = await AsyncStorage.getItem('_id');
      const token = await AsyncStorage.getItem('token');
      base.token = token;
      const res = await base.api().get(`wishlists/${userId}`);
      const data = await res.data;
      const productIds = data.data.products.map(item => item._id);
      if (productIds.includes(id)) return setAddedWish(true);
      setAddedWish(false);
    } catch (error) {
      const errCode = error.response?.data?.code;
      if (errCode === 'auth') {
        let wishlist = await AsyncStorage.getItem('wishlist');
        if (wishlist) wishlist = JSON.parse(wishlist);
        else return setAddedWish(false);
        const ids = wishlist.map(item => item._id);
        if (ids?.includes(id)) return setAddedWish(true);
        setAddedWish(false);
      }
      console.log(error);
    }
  };
  /////Wishlist ^^

  ///Cards
  const deleteFromCardStore = async () => {
    try {
      let card = await AsyncStorage.getItem('card');
      if (card) {
        card = JSON.parse(card);
        card = card.filter(item => item._id !== id);
        await AsyncStorage.setItem('card', JSON.stringify(card));
      }
      setInCard(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFromCard = async () => {
    try {
      const userId = await AsyncStorage.getItem('_id');
      if (!userId) return deleteFromCardStore();
      await base.api().delete('cards/delete', {
        data: {
          userId,
          productId: id,
        },
      });
      setInCard(false);
    } catch (error) {
      console.log(error);
    }
  };

  const addToStoreCard = async () => {
    try {
      let card = await AsyncStorage.getItem('card');
      if (card) {
        card = JSON.parse(card);
        card.push(data);
        await AsyncStorage.setItem('card', JSON.stringify(card));
        return setInCard(true);
      }
      await AsyncStorage.setItem('card', JSON.stringify([data]));
      setInCard(true);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCard = async () => {
    if (inCard) return deleteFromCard();
    try {
      const userId = await AsyncStorage.getItem('_id');
      if (!userId) return addToStoreCard();
      await base.api().post('cards', {
        userId,
        productId: id,
      });
      setInCard(true);
    } catch (error) {
      console.log(error);
    }
  };

  const getStoreCards = async () => {
    let card = await AsyncStorage.getItem('card');
    if (card) {
      card = JSON.parse(card);
      const ids = card.map(item => item._id);
      if (ids.includes(id)) return setInCard(true);
    }
    setInCard(false);
  };

  const getCards = async () => {
    try {
      const userId = await AsyncStorage.getItem('_id');
      if (!userId) return getStoreCards();
      const response = await base.api().get(`cards/${userId}`);
      const data = await response.data;
      const ids = data.products.map(item => item._id);
      if (ids?.includes(id)) return setInCard(true);
      setInCard(false);
    } catch (error) {
      console.log(error);
    }
  };

  ///Cards ^^

  const getCardAndWish = async () => {
    setLoading(true);
    await getWishlist();
    await getCards();
    setLoading(false);
  };

  useEffect(() => {
    getCardAndWish();
  }, [id]);

  const fun = async () => {
    setLoading(true);
    try {
      const shareResponse = await Share.open({
        title: 'Salam',
        message: `${data.coverPhoto}\n\n*${data.name}*\n\n${data.description}\n`,
        failOnCancel: true,
      });
    } catch (error) {
      setLoading(false);
    }
    setLoading(false);
  };
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View>
            <AddedButton onPress={fun}>
              <Ionicons
                name="md-arrow-redo-outline"
                size={px(16)}
                color={colors.black}></Ionicons>
            </AddedButton>
          </View>
        );
      },
    });
  }, [data]);

  async function getData() {
    setLoading(true);
    try {
      const response = await base
        .api()
        .get(`/products/product/${id ? id : '634e54d30e434937aa55060c'}`);

      setData(response.data);
      setStore(response.data.store);

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <View style={styles.ActivityIndicator}>
          <ActivityIndicator size={'large'}></ActivityIndicator>
        </View>
      ) : (
        <></>
      )}

      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <FlatList
            data={data.photos}
            keyExtractor={(_, index) => `indexx ${index}`}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return <Image style={styles.image} source={{uri: item.image}} />;
            }}
          />
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.title}>{data.name}</Text>
          {data.isSale ? (
            <View>
              <Text style={[styles.price, {marginBottom: 0}]}>
                $ {data.salePrice}
              </Text>
              <Text
                style={[
                  styles.price,
                  {
                    textDecorationLine: 'line-through',
                    color: colors.disabledButton,
                    fontSize: px(12),
                    marginTop: 2,
                  },
                ]}>
                $ {data.price}
              </Text>
            </View>
          ) : (
            <Text style={styles.price}>$ {data.price}</Text>
          )}
          <View style={styles.reviewParentContainer}>
            <View style={styles.reviewContainer}>
              <>
                <Antdesign
                  name="star"
                  size={px(14)}
                  style={styles.star}
                  color={colors.OrangeFresh}></Antdesign>
                <Text style={styles.reviewAverage}>4.6</Text>
              </>
              <Text style={styles.simpleText}>{data.reviewsCount} Reviews</Text>
            </View>
            <View style={styles.stock}>
              <Text style={styles.stockText}>Available: {data.stockCount}</Text>
            </View>
          </View>
        </View>
        <View style={styles.storeContainer}>
          <View>
            <Image
              style={styles.storePhoto}
              source={{uri: store.photo}}></Image>
          </View>
          <View style={styles.storeDescription}>
            <Text style={styles.storename}>{store.name}</Text>
            <View style={styles.isOfficial}>
              {store.isOfficial ? (
                <>
                  <Text style={styles.simpleText}>Official Store</Text>
                  <Octicons
                    style={{marginLeft: 10}}
                    name="shield-check"
                    size={px(20)}
                    color={colors.blue}></Octicons>
                </>
              ) : (
                <>
                  <Text style={styles.simpleText}>Non-official Store</Text>
                  <Octicons
                    style={{marginLeft: 10}}
                    name="shield-x"
                    size={px(20)}
                    color={colors.darkgray}></Octicons>
                </>
              )}
            </View>
          </View>
          <View>
            <Octicons
              name="chevron-right"
              size={px(24)}
              color={colors.darkgray}></Octicons>
          </View>
        </View>
        <View style={styles.ProductDescription}>
          <Text style={styles.ProductDescriptionTitle}>
            Description Product
          </Text>
          <Text style={styles.ProductDescriptionText}>{data.description}</Text>
        </View>
        <View>
          <Reviews />
        </View>
        <View style={styles.FeatureProductsContainer}>
          <View style={styles.FeatureProductsTitleContainer}>
            <Text style={styles.FeatureProductsText}>Featured Product</Text>
            <Pressable>
              <Text style={styles.SeeAllProducts}>See all</Text>
            </Pressable>
          </View>
          <View style={styles.FeatureProducts}>
            <ProductsCarousel inProductDetails={true} inProductId={data._id} />
          </View>
        </View>
        <View style={styles.ButtonContainer}>
          <View style={styles.AddedButton}>
            <AddedButton
              onPress={() => addToWishlist()}
              backgroundColor={addedWish ? colors.errorRed : colors.black}>
              <View style={styles.AddedButtonContainer}>
                <Text style={styles.ButtonText}>
                  {addedWish ? 'Added' : 'Add'}
                </Text>
                <Octicons
                  name="heart-fill"
                  color={colors.white}
                  size={px(18)}></Octicons>
              </View>
            </AddedButton>
          </View>
          <Button onPress={() => addToCard()} backgroundColor={colors.blue}>
            <Text style={styles.ButtonText}>
              {inCard ? 'In card' : 'Add to cart'}
            </Text>
          </Button>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: px(25),
    flex: 1,
    backgroundColor: colors.white,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
  ActivityIndicator: {
    position: 'absolute',
    zIndex: 2,
    right: 0,
    width: base.screenWidth,
    height: base.screenHeight,
    justifyContent: 'center',
    backgroundColor: colors.offGray,
    opacity: 0.5,
  },
  imageContainer: {
    alignItems: 'center',
    padding: px(10),
    backgroundColor: colors.offGray,
  },
  image: {
    height: px(300),
    width: px(300),
  },
  title: {
    fontFamily: 'DMSans-Bold',
    fontSize: px(32),
    color: colors.fontColor,
  },
  price: {
    fontFamily: 'DMSans-Medium',
    color: colors.errorRed,
    fontSize: px(16),
    marginVertical: px(10),
  },
  simpleText: {
    color: colors.fontColor,
    fontFamily: 'DMSans-Regular',
  },
  reviewContainer: {
    width: px(100),
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewParentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  stock: {
    backgroundColor: colors.offGreen,
    borderRadius: px(10),
    paddingHorizontal: px(10),
    paddingVertical: px(5),
  },
  stockText: {
    color: colors.EarthGreen,
  },
  informationContainer: {
    marginTop: px(30),
  },
  storePhoto: {
    width: px(45),
    height: px(45),
    borderRadius: px(1000),
  },
  isOfficial: {
    width: px(120),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  storename: {
    color: colors.fontColor,
    fontFamily: 'DMSans-Medium',
    fontSize: px(18),
  },
  storeDescription: {
    flex: 1,
    paddingLeft: px(20),
  },
  storeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: px(30),
    borderTopWidth: 1,
    borderTopColor: colors.softGray,
    borderBottomWidth: 1,
    borderBottomColor: colors.softGray,
    marginVertical: px(30),
  },
  reviewAverage: {
    color: colors.fontColor,
    fontFamily: 'DMSans-Regular',
    marginLeft: px(5),
    marginRight: px(20),
  },
  ProductDescription: {
    paddingBottom: px(30),
    borderBottomWidth: 1,
    borderBottomColor: colors.softGray,
    marginBottom: px(30),
  },
  ProductDescriptionText: {
    color: colors.fontColor,
    fontFamily: 'DMSans-Regular',
    paddingTop: px(15),
    fontSize: px(14),
  },
  ProductDescriptionTitle: {
    fontFamily: 'DMSans-Bold',
    fontSize: px(24),
    color: colors.fontColor,
  },
  FeatureProducts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  FeatureProductsContainer: {},
  FeatureProductsTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: px(20),
    marginBottom: px(25),
  },
  SeeAllProducts: {
    color: colors.blue,
    fontSize: px(12),
    fontFamily: 'DMSans-Regular',
  },
  FeatureProductsText: {
    color: colors.fontColor,
    fontFamily: 'DMSans-Medium',
    fontSize: px(18),
  },
  ButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: px(30),
  },
  AddedButton: {
    paddingHorizontal: px(10),
    flex: 1,
  },
  AddToCartButton: {
    flex: 1,
    paddingHorizontal: px(10),
  },
  AddedButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ButtonText: {
    color: colors.white,
    fontSize: px(14),
    fontFamily: 'DMSans-Medium',
  },
});

export default ProductDetail;
