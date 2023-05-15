import { StyleSheet, Text, View, useState } from 'react-native';
import Searchbar from '../../components/Header/Searchbar.js';

import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { useEffect } from 'react';


import HeaderRest from '../../components/Header/HeaderRest.js';
import Footer from '../../components/Footer/Footer.js';

import { firebase, app } from '../../../config.js'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';




const Commande = () => {
  const navigation = useNavigation();
  const [data, setData] = React.useState(null);
  useEffect(() => {
    
    // CHEMIN D'ACCES
    const collectionRef = firebase.firestore().collection('/Bars/Le Train bleu/Commande');
  
    collectionRef
      .get()
      .then((querySnapshot) => {
        const documentNames = querySnapshot.docs.map((doc) => doc.id);
        console.log('Noms des documents dans la sous-collection Stock:', documentNames);
        setData(documentNames);
      })
      .catch((error) => {
        console.log('Erreur lors de la récupération des noms des documents:', error);
      });
  }, []);


  return (
    <View>
      <View style={[styles.container]}> 
        
        {/* <Searchbar/> */}
        <View>
        <View>
        {data && (
        <View>
            {data.map((category, index) => (
              <Text key={index}>{category}</Text>
            ))}
          </View>
          )}
          </View>
        </View>
        
        <View style={styles.footer}>
          <Footer color='#F5F5F5'/>
          
        </View>
        

        <View style={styles.header}>
          <HeaderRest name='Commande'/>
          
        </View>

      </View>
      
    </View>

  );
  
}
export default Commande;



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
    marginTop: 10,
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