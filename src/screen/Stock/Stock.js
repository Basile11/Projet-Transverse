import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Button } from 'react-native';
import Searchbar from '../../components/Header/Searchbar.js';

import React from 'react';
import { useNavigation } from '@react-navigation/core';


import Cave from './Cave/Cave.js';

import HeaderRest from '../../components/Header/HeaderRest.js';
import Footer from '../../components/Footer/Footer.js';
import ButtonHome from '../../components/ButtonHome/ButtonHome.js';



export default function Stock() {
  const navigation = useNavigation();

  const CavePress = () => {
    navigation.navigate(Cave);
  }

  const { width, height } = Dimensions.get('window');

  const styles = StyleSheet.create({
    container: {
      backgroundColor : '#F5F5F5',
    },
  
    header: {
      // position: 'absolute',
      top: 0,
    },

    name:{
      position: 'absolute',
      width: 239,
      height: 53,
      left: 44,
      top: 100,
      fontSize: 40,
      Lineheight: 53,
      color: '#FFFFFF',
    },
  
    localisation: {
      position: 'absolute',
      width: 147,
      height: 35,
      left: 125,
      top: 165,
      fontSize: 28,
      color: '#97B5EB',
    },
  
    button: {
      flex : 1,
      position: 'absolute',
      top: height*0.26,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },

    Test: {
      position: 'absolute',
      top: height*0.5,
      left: width*0.5,
      width: 100,
      height: 100,
      backgroundColor: 'red',
    },
  });

  return (
    <View>
      <View style={[styles.container]}> 
        
        {/* <Button style={styles.button} title="Go to Cave" onPress={() => navigation.navigate(Cave)}  /> */}

        {/* <TouchableOpacity style={styles.button} onPress={CavePress}>
          <Text>Cliquez ici</Text>
        </TouchableOpacity> */}

        

        
        <View style={styles.footer}>
          <Footer color='#F5F5F5'/>
        </View>

        <View style={styles.header}>
          <HeaderRest name='Stock'/>
        </View>

        <View style={styles.button}>
          <ButtonHome text='Cave' onPress={CavePress} img={require('../../../img/product.png')} color='rgba(151, 181, 235, 0.5)'/>
        </View>

      </View>
    </View>

  );
}

