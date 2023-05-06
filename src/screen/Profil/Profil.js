import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

import Footer from '../../components/Footer/Footer.js';


export default function Profil() {
  const navigation = useNavigation();

  const { width, height } = Dimensions.get('window');

  const styles = StyleSheet.create({
    container: {
      backgroundColor : 'black',
    //   alignItems: 'center',
    },
    page: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        top: 0,
    },
    
    title: {
        position: 'absolute',
        top: height*0.25,
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        textAligne : 'center',
    },
    text: {  
        position: 'absolute',
        // top: height*0.4,
        color: 'white',
        fontSize: 20,
        // textAligne : 'center',
    },

    image: {
        position: 'absolute',
        top: height*0.4,
    },
  
  });
  
  return (
    <View style={[styles.container]}> 
        
        <View style={styles.footer}>
            <Footer color='black'/>
        </View> 
        <View style={styles.page}>
            <Text style={styles.title}>Le Train Bleu</Text>    
            <Image style={styles.image} source={require('../../../img/logo_train_bleu.png')}/>
            <Text style={[styles.text, {top:height*0.6}]}>Pl. Louis-Armand hall 1, 75012 Paris</Text>
            <Text style={[styles.text, {top:height*0.64}]}>01 43 43 09 06</Text>
            <Text style={[styles.text, {top:height*0.68}]}>www.le-train-bleu.com</Text>
        </View>
    </View>
    
  );
}