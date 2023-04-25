import { View, Image, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
// import FastImage from 'react-native-fast-image';
import React, { useState }from 'react';
// import Rubik from '../../../font/Rubik/Rubik-Black.ttf';


// import {useTailwind} from 'tailwind-rn';


export default function ListButton({text, onPress, img, color}) {
  const [texte] = useState(text);

  const data = [
    { id: '1', title: 'Bouton 1', onPress: () => console.log('Bouton 1 appuyé'), image: require('../../../img/product.png'), color: '#00ff00' },
    { id: '2', title: 'Bouton 2', onPress: () => console.log('Bouton 2 appuyé'), image: require('../../../img/product.png'), color: '#ff0000' },
    { id: '3', title: 'Bouton 3', onPress: () => console.log('Bouton 3 appuyé'), image: require('../../../img/product.png'), color: '#0000ff' },
  ];

  return (
        // <FlatList data={data} />
        <Text>Test</Text>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // height: '100%',
  },
  
  button: {
    // width: '100%',
    // width: 'flex',
    // alignItems: 'stretch',
    
    flexDirection: 'row',
    flex: 1,
    width: '85%',
    
    // height :'65%',
    // height: '100%',
    height: 95,
    // height: 'auto',
    
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    
    // marginBottom: '5%',
    marginBottom: 20,
    
    alignContent: 'center',
    
    paddingLeft:'6%',
    // paddingLeft: 25,
    
    // flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'flex-start',
    // justifyContent: 'space-between',
    

  },

  cadre: {
    flex: 1,
    position: 'absolute',
    width: 60,
    // width: '32%',
    height: 60,
    // height: '60%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',

    
    // left: -5,
    left: '-3%',
    // bottom: -15,
    bottom: '-15%',

    // backgroundColor : 'rgba(151, 181, 235, 0.5)',

    // left: 0,
  },

  text: {
    // marginLeft: 20,
    // fontSize: 24,
    fontSize: '25%',
    Lineheight: 26,
    // Lineheight: '100%',
    marginLeft: 75,
    // marginLeft: '50%',
  },

  fleche: {
    position: 'absolute', 
    // width: 25, 
    width: '5%',
    // height: 25,
    height:'22%',
    right : '6%',
  }
});