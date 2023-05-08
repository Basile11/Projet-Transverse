import React, {useState, useEffect} from 'react';
import {ImageBackground, Image, StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function HeaderHome (name){    
    const [Name] = useState(name);
    const { width, height } = Dimensions.get('window');

    const navigation = useNavigation();
      const ProfilPress = () => {
        navigation.navigate(Option);
      }
    

    const styles = StyleSheet.create({
        container: {
          height : '100%',
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

      utilisateur: {
        position: 'absolute',
        height : height * 0.045,
        width : height * 0.045,
        top : height * 0.18 - height * 0.145,
        // top : height * 0.055,
        // top: height * 0.18 - height * 0.125,
        left : '10%',
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
              <Image source={require('../../../img/utilisateur.png')} style={styles.utilisateur}/> 
            </TouchableOpacity>

            {/* <Text style={styles.text}>{Name}</Text> */}
            
            <Text style={styles.text}>Le Train Bleu</Text>
            <Text style={styles.gestock}>Gestock</Text>

        </View>
    );
};

