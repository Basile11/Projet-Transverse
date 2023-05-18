import React, {lazy} from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';

import Profil from '../../screen/Profil/Profil.js';

export default function HeaderHome ({color, Name}){    

  const navigation = useNavigation();
    const ProfilPress = () => {
      navigation.navigate(Profil);
    }

  const { width, height } = Dimensions.get('window');

  const styles = StyleSheet.create({
    container: {
      height: height * 0.5,
    },
    
    rect_haut_droit : {
      position : 'absolute',
      backgroundColor: color,
      height : height * 0.11,
      width : width,
      top: 0,
      left: 0,
      right: 0,
    },
  
    rect_haut_gauche: {
      position : 'absolute',
      width: width * 0.5,
      height: height * 0.32,
      left: 0,
      top: 0,
      backgroundColor: color,
      },
  
    cercle_haut: {
      position: 'absolute',
      width: width,
      height: height * 0.22,
      borderRadius: 90,
      backgroundColor: color,
    },
    
    cercle_bas: {
      position: 'absolute',
      width: width,
      height: height * 0.25,
      top : height * 0.22,
      left: 0,
      borderRadius: 90,
      backgroundColor: '#F5F5F5',
    },

    
    text: {
      position: 'absolute',
      width: 'auto',
      height: 'auto',
      left: '11%',
      // left: '28%',
      top: height * 0.18 - height * 0.045,
      // top: height * 0.18 - height * 0.075,
      fontSize: height * 0.05,
      Lineheight: 53,
      fontWeight: 'semi-bold',
      color: '#FFFFFF',
    },

    utilisateur: {
      position: 'absolute',
      height : height * 0.05,
      width : height * 0.05,
      top : height * 0.18 - height * 0.147,
      // top : height * 0.055,
      // top: height * 0.18 - height * 0.125,
      left : '10%',
      // left: '5.5%',
      // right : '10%',
      // left : '8%',
    },

    gestock: {
      position: 'absolute',
      width: 'auto',
      height: 'auto',
      // left: '11%',
      // left: '28%',
      top : height * 0.18 - height * 0.1,
      // top: height * 0.18 - height * 0.075,
      fontSize: height * 0.02,
      Lineheight: 53,
      // fontWeight: 'semi-bold',
      color: '#FFFFFF',
      alignSelf: 'center',
    },
  });

    
  return (
    <View style={styles.container}>
          
      <View style={styles.rect_haut_droit}></View>
      <View style={styles.rect_haut_gauche}></View>
      <View style={styles.cercle_haut}></View>
      <View style={styles.cercle_bas}></View>
      
      
      <TouchableOpacity onPress={ProfilPress} style={styles.utilisateur}>
        <Image source={require('../../../img/utilisateur3.png')} style={styles.utilisateur}/> 
      </TouchableOpacity>

        <Text style={styles.text}>{Name}</Text> 
      
      <Text style={styles.text}>Le Train Bleu</Text>
      <Text style={styles.gestock}>Gestock</Text> 

    </View>
  );
};

