import {StyleSheet, Text, View, Modal} from 'react-native';
import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FilterScreen from './FilterScreen';
import SortScreen from './SortScreen';
import IconButton from '../../../UI/IconButton';
import px from '../../../../assets/utility/dimension';

const Tab = createMaterialTopTabNavigator();

function FilterModal({seeFilterModal, setTheFilterScreen}) {
  return (
    <Modal visible={seeFilterModal} transparent animationType='slide'>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontWeight: '700', fontSize: 22}}>Filter&Sorting</Text>
          <IconButton
            name={'close'}
            size={25}
            color={'black'}
            onPress={() => setTheFilterScreen(false)}
          />
        </View>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={FilterScreen} />
          <Tab.Screen name="Settings" component={SortScreen} />
        </Tab.Navigator>
      </View>
    </Modal>
  );
}

export default FilterModal;

const styles = StyleSheet.create({
    container: {

        padding:px(25),
                
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor:"white"
    }
});
