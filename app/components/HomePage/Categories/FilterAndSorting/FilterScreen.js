import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import RnRangeSlider from 'rn-range-slider';
import Thumb from '../../../UI/Slider/Thumb';
import Rail from '../../../UI/Slider/Rail';
import RailSelected from '../../../UI/Slider/RailSelected';
import Label from '../../../UI/Slider/Label';
import Notch from '../../../UI/Slider/Notch';
import Selection from './Selection';
import {useDispatch, useSelector} from 'react-redux';
import {setFilteredProducts} from '../../../../store/slices/products';
import px from '../../../../assets/utility/dimension';
import colors from '../../../../config/colors';
import Button from '../../../UI/Button';
import {useIsFocused, useNavigation} from '@react-navigation/native';

const FilterScreen = ({navigation}) => {
  const data = useSelector(state => state.products);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100);
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);




  const focus = useIsFocused()

  const maxValue = useMemo(() =>
    
  {

   
    return parseInt(data.categorySpecificProducts.reduce((previous, current) => {
      return current.price > previous.price ? current : previous;
    }).price.replace(/\s/g, ''))
  

    }
    
    , [focus])
    

  const dispatch = useDispatch();

  const filter = () => {
    const tempdata =data.categorySpecificProducts
    const newData = tempdata.filter(item => {

      
      return item.price.replace(/\s/g, '') >= parseFloat(low) && item.price.replace(/\s/g, '') <= parseFloat(high);
    });
  
    dispatch(
      setFilteredProducts({
        filteredProducts: newData,
      }),
    );
  };
  useEffect(() => {
    filter();
  }, [data.categorySpecificProducts]);
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingVertical: px(20),
          borderBottomWidth: 1,
          borderBottomColor: 'lightgray',
        }}>
        <Text>Price Range</Text>
        <RnRangeSlider
          style={styles.slider}
          min={0}
          max={maxValue}
          step={1}
          floatingLabel
          renderThumb={renderThumb}
          renderRail={renderRail}
          renderRailSelected={renderRailSelected}
          renderLabel={renderLabel}
          renderNotch={renderNotch}
          onValueChanged={handleValueChange}
        />

        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <Text>0 $</Text>
          <Text>{maxValue} $</Text>
        </View>
      </View>
      <View style={{height: '70%'}}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={true}
          scrollEnabled={true}>
          {/* <Selection title={'Category1'} value={'sad'} />
          <Selection title={'Category2'} value={'sad'} />

          <Selection title={'Category3'} value={'sad'} />

          <Selection title={'Category4'} value={'sad'} />
          <Selection title={'Category5'} value={'sad'} />

          <Selection title={'Category6'} value={'sad'} />
          <Selection title={'Category7'} value={'sad'} />
          <Selection title={'Category8'} value={'sad'} />
          <Selection title={'Category9'} value={'sad'} />
          <Selection title={'Category10'} value={'sad'} />
          <Selection title={'Category11'} value={'sad'} />
          <Selection title={'Category12'} value={'sad'} /> */}
        </ScrollView>
        <View style={{flexDirection: 'row'}}>
          <View style={{height: px(50), flex: 1, marginHorizontal: 10}}>
            <Button
              borderColor={'black'}
              color={colors.fontColor}
              onPress={() => {
                setHigh(100), setLow(0);
              }}>
              reset
            </Button>
          </View>
          <View style={{height: px(50), flex: 1, marginHorizontal: 10}}>
            <Button
              onPress={() => {
                filter(), navigation.goBack();
              }}
              borderColor={colors.blue}
              backgroundColor={colors.blue}
              color={'white'}>
              Apply
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: px(25),
    marginVertical: px(20),
  },
});
