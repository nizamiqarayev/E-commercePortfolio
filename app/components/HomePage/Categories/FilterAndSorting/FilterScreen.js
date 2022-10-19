import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import RnRangeSlider from 'rn-range-slider';
import Thumb from '../../../UI/Slider/Thumb';
import Rail from '../../../UI/Slider/Rail';
import RailSelected from '../../../UI/Slider/RailSelected';
import Label from '../../../UI/Slider/Label';
import Notch from '../../../UI/Slider/Notch';
import Selection from './Selection';
import { useSelector } from 'react-redux';

const FilterScreen = () => {


  const data = useSelector((state) => state.products)
  const [low, setLow] = useState(0)
  const [high,setHigh] =useState(100)
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);


  const filter = () => {
    const newData = data.categorySpecificProducts.filter((item) => {
      console.log(item);
      return item.price >=low && item.price<=high
    })
    console.log("newData");
    console.log(newData);
  }
  useEffect(() => {
    filter()
  
   
  }, [])
  
 

  return (
    <View>
      <View>
      <RnRangeSlider
        style={styles.slider}
        min={0}
        max={100}
        step={1}
        floatingLabel
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        onValueChanged={handleValueChange}
      />
      </View>
      <Selection title={"Name (A / Z)"} value={"sad"} />
      <Selection title={"Name (A / Z)"} value={"sad"} />

      <Selection title={"Name (A / Z)"} value={"sad"} />

      <Selection title={"Name (A / Z)"} value={"sad"} />
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({});
