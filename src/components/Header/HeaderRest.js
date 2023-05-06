import React, {useState, useEffect, lazy} from 'react';
import {ImageBackground, Image, StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Searchbar from './Searchbar';
// const Profil = lazy(() => import('../../screen/Profil/Profil'));


export default function HeaderRest ({name}){    
    const [Name] = useState(name);
    const { width, height } = Dimensions.get('window');

    const navigation = useNavigation();
      const ProfilPress = () => {
        navigation.navigate('Profil');
      }
    

    const styles = StyleSheet.create({
        container: {
          height : '100%',
        },
      
        text: {
            height : height,
            position: 'absolute',
            width: width,
            height: 'auto',
            textAlign: 'center',
            top: height * 0.18 - height * 0.03,
            fontSize: height * 0.043,
            Lineheight: 53,
            fontWeight: 'semi-bold',
            color: '#FFFFFF',
        },
      
        rect_haut_droit: {
          position: 'absolute',
          width: '100%',
          height: '11%',
          right: 0,
          top: 0,
          backgroundColor: '#2F3031',
          backgroundColor: 'black',
      },
      
      rect_haut_gauche: {
          position: 'absolute',
          width: "50%",
          height: "32.5%",
          left: 0,
          top: 0,
          backgroundColor: '#2F3031',
          backgroundColor: 'black',
      },
      
      cercle_haut: {
          width: '100%',
          height: '22%',
          borderRadius:90 ,
          backgroundColor: '#2F3031',
          backgroundColor: 'black',
      },
      
      cercle_bas: {
          width: '100%',
          height: '22%',
          left: 0,
          borderRadius: 90,
          backgroundColor: '#F5F5F5',
      },

      // Profil: {
      //   position: 'absolute',
      //   height : height * 0.06,
      //   width : height * 0.06,
      //   top : height * 0.035,
      //   left : '10%',
      // },

      utilisateur: {
        position: 'absolute',
        height : height * 0.055,
        width : height * 0.055,
        top : height * 0.18 - height * 0.143,
        // top : height * 0.055,
        // top: height * 0.18 - height * 0.125,
        left : '10%',
        // right : '10%',
        // left : '8%',
      },
      });
      

    return (
        <View style={styles.container}>
            

            <View style={styles.rect_haut_droit}></View>
            <View style={styles.rect_haut_gauche}></View>
            <View style={styles.cercle_haut}></View>
            <View style={styles.cercle_bas}></View>

            <Text style={styles.text}>{name}</Text>
            
            <TouchableOpacity onPress={ProfilPress} style={styles.utilisateur}>
              <Image source={require('../../../img/utilisateur3.png')} style={styles.utilisateur}/> 
            </TouchableOpacity>

            <Searchbar/>


        </View>
    );
};

