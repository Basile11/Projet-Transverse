import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Button, useState } from 'react-native';
import Searchbar from '../../components/Header/Searchbar.js';

import React, {useEffect} from 'react';
import { useNavigation } from '@react-navigation/core';
import { firebase, app } from '../../../config.js'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import Soft from './Soft/Soft.js';
import Cave from './Cave/Cave.js';
import Biere from './Biere/Biere.js';
import Spiritueux from './Spiritueux/Spiritueux.js';

import HeaderRest from '../../components/Header/HeaderRest.js';
import Footer from '../../components/Footer/Footer.js';
import ButtonHome from '../../components/ButtonHome/ButtonHome.js';



export default function Stock() {

  const navigation = useNavigation();
  const [data, setData] = React.useState(null);
  useEffect(() => {
    // CHEMIN D'ACCES
    const collectionRef = firebase.firestore().collection('/Bars/Le Train bleu/Stock');
  
    collectionRef
      .get()
      .then((querySnapshot) => {
        const documentNames = querySnapshot.docs.map((doc) => doc.id);
        // console.log('Noms des documents dans la sous-collection Stock:', documentNames);
        setData(documentNames);
      })
      .catch((error) => {
        // console.log('Erreur lors de la récupération des noms des documents:', error);
      });
  }, []);

  const Cave = () => {
    navigation.navigate(Cave);
  }
  const Biere = () => {
    navigation.navigate(Biere);
  }
  const Alcool_fort = () => {
    navigation.navigate(Spiritueux);
  }
  const Soft = () => {
    navigation.navigate(Soft);
  }

  const { width, height } = Dimensions.get('window');

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
  
    Test: {
      position: 'absolute',
      top: height*0.5,
      left: width*0.5,
      width: 100,
      height: 100,
      backgroundColor: 'red',
    },

    buttonview: {
      position: 'absolute',
      top: height*0.26,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: 'red',
    },

    buttonview2: {
      width: '100%',
    },
  });

  return (

      <View style={[styles.container]}>

        <HeaderRest name='Stock' color='black'/>
        <Footer color='black'/>


        {/* <View style={styles.button}>
          <ButtonHome text='Cave' onPress={CavePress} img={require('../../../img/product.png')} color='rgba(151, 181, 235, 0.5)'/>
        </View> */}

        <View style={styles.buttonview}>
        {/* <View> */}
          {data && (
            <View style={styles.buttonview2}>
              {data.map((category) => (
                // <Text key={index}>{category} {index}</Text>
                // <ButtonHome text={category} onPress={category} img={require('../../../img/product.png')} color='rgba(151, 181, 235, 0.5)'
                <ButtonHome key={category} text={category} img={require('../../../img/product.png')} color='rgba(151, 181, 235, 0.5)'/>
              ))}
            </View>
          )}
        </View>
      </View>

  );
}

