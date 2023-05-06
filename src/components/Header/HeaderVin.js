import React, {useState, useEffect, lazy} from 'react';
import {ImageBackground, Image, StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// const Profil = lazy(() => import('../../screen/Profil/Profil'));


export default function HeaderVin ({name}){    
    const [Name] = useState(name);
    const { width, height } = Dimensions.get('window');

    const navigation = useNavigation();
      const ProfilPress = () => {
        navigation.navigate('Profil');
      }
    

    const styles = StyleSheet.create({
        container: {
          height : height,
          width : width,
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
      
        rect_haut_droit: {
          position: 'absolute',
          width: "100%",
          height: '9%',
          right: 0,
          top: 0,
          backgroundColor: '#2F3031',
          backgroundColor: 'black',
      },
      
      rect_haut_gauche: {
          position: 'absolute',
          width: "50%",
          height: "27,5%",
          left: 0,
          top: 0,
          backgroundColor: '#2F3031',
          backgroundColor: 'black',
      },
      
      cercle_haut: {
          width: "100%",
          height: '18%',
          borderRadius:90 ,
          backgroundColor: '#2F3031',
          backgroundColor: 'black',
        //   backgroundColor: 'red',
      },
      
      cercle_bas: {
          width: "100%",
          height: '18%',
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

