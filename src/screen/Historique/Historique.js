import { StyleSheet, Text, View } from 'react-native';
import ButtonHome from '../../components/ButtonHome/ButtonHome.js';
import Searchbar from '../../components/Header/Searchbar.js';

import React from 'react';
import { useNavigation } from '@react-navigation/core';



import HeaderRest from '../../components/Header/HeaderRest.js';
import Footer from '../../components/Footer/Footer.js';

const Historique = () => {
  const navigation = useNavigation();


  return (
    <View>
      <View style={[styles.container]}> 
        
        {/* <Searchbar/> */}
        

        
        <View style={styles.footer}>
          <Footer color='#F5F5F5'/>
        </View>

        <View style={styles.header}>
          <HeaderRest name='Historique'/>
        </View>

      </View>
    </View>

  );
}
export default Historique;

const styles = StyleSheet.create({
  container: {
    backgroundColor : '#F5F5F5',
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
    marginTop: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    
  },
});