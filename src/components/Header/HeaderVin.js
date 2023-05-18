import React, {useState, useEffect, lazy} from 'react';
import {ImageBackground, Image, StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// const Profil = lazy(() => import('../../screen/Profil/Profil'));


export default function HeaderVin ({color, name}){    
  const [Name] = useState(name);
  const { width, height } = Dimensions.get('window');

  const navigation = useNavigation();
    const ProfilPress = () => {
      navigation.navigate('Profil');
    }
  

  const styles = StyleSheet.create({
      container: {
        height : height * 0.5,
      },
    
      rect_haut_droit: {
        position: 'absolute',
        width: width,
        height: height * 0.09,
        top: 0,
        backgroundColor: color,
    },
    
    rect_haut_gauche: {
        position: 'absolute',
        width: width * 0.5,
        height: height * 0.275,
        left: 0,
        top: 0,
        backgroundColor: color,
    },
    
    cercle_haut: {
      position: 'absolute',
      width: width,
      height: height * 0.18,
      borderRadius:90 ,
      backgroundColor: color,
    },
    
    cercle_bas: {
      position: 'absolute',
      width: width,
      height: height * 0.25,
      top : height * 0.18,
      left: 0,
      borderRadius: 90,
      backgroundColor: '#F5F5F5',
    },

    text: {
      height : height,
      position: 'absolute',
      width: width,
      height: 'auto',
      textAlign: 'center',
      top: height * 0.18 - height * 0.07,
      fontSize: height * 0.043,
      Lineheight: 53,
      fontWeight: 'semi-bold',
      color: '#FFFFFF',
  },

    utilisateur: {
      position: 'absolute',
      height : height * 0.055,
      width : height * 0.055,
      top : height * 0.18 - height * 0.143,
      left : '10%',
    },
    });
    

  return (
      <View style={styles.container}>
          

          <View style={styles.rect_haut_droit}></View>
          <View style={styles.rect_haut_gauche}></View>
          <View style={styles.cercle_haut}></View>
          <View style={styles.cercle_bas}></View>

          <Text style={styles.text}>{name}</Text>
          
          {/* <TouchableOpacity onPress={ProfilPress} style={styles.utilisateur}>
            <Image source={require('../../../img/utilisateur3.png')} style={styles.utilisateur}/> 
          </TouchableOpacity> */}



      </View>
  );
};

