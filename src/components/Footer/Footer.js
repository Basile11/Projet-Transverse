import React, {lazy} from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';

import Option from '../../screen/Option/Option.js';
import Notif from '../../screen/Notif/Notif.js';
import Home from '../../screen/Home/Home.js';

export default function Footer({color}) {  

  const navigation = useNavigation();
    const Optionpress = () => {
      navigation.navigate(Option);
    }
    const Homepress = () => {
      navigation.navigate(Home);
    }
    const Notificationpress = () => {
      navigation.navigate(Notif);
    }
  
  const { width, height } = Dimensions.get('window');

  const styles = StyleSheet.create({
    container: {
      height: height * 0.5,
    },

    footer: {
      position: 'absolute',
      backgroundColor: color,
      bottom: 0,
      left: 0,
      right: 0,
    },

    iconfooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: height * 0.03,
      marginTop: height * 0.03,
      marginLeft: width * 0.1,
      marginRight: width * 0.1,
    },

    cercle_bas: {
      position: 'absolute',
      width: '100%',        
      //height: height * 0.9049,
      height: height * 0.3, 
      bottom: height * 0.0951,       
      left: 0,
      borderRadius: 90,
      backgroundColor: '#F5F5F5',
    },

    rect_bas: {
      position: 'absolute',
      backgroundColor: 'black',
      height: height * 0.1, 
      bottom: height * 0.0951,  
      left: 0,
      width: width*0.5,
    }, 

    Image: {
      width: height * 0.035, 
      height: height * 0.035, 
      marginRight: 25, 
      marginLeft: 25,
    }
  });

  return (
    <View style={styles.container}>
        
        
        <View style={styles.footer}>
            <View style={styles.iconfooter}>

              <TouchableOpacity onPress={Optionpress} > 
                <Image
                  source={require('../../../img/more.png')}
                  style={styles.Image} />
              </TouchableOpacity>

              <TouchableOpacity onPress={Homepress}>
                <Image
                  source={require('../../../img/home.png')}
                  style={styles.Image}/>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={Notificationpress}>
                <Image
                  source={require('../../../img/bell.png')}
                  style={styles.Image}/>
              </TouchableOpacity>
            </View>
            
        </View>
        <View style={styles.rect_bas}></View>
        <View style={styles.cercle_bas}></View>
    </View>    
  );
}

