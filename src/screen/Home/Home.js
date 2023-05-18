import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View, StatusBar, Dimensions, Button } from 'react-native';

import Footer from '../../components/Footer/Footer.js';
import ButtonHome from '../../components/ButtonHome/ButtonHome.js';
import HeaderHome from '../../components/Header/HeaderHome.js';

import Stock from '../Stock/Stock'
import Commande from '../Commande/Commande'
import Historique from '../Historique/Historique'
import Statistique from '../Statistiques/Stats.js'



export default function Home() {
  const navigation = useNavigation();

  const { width, height } = Dimensions.get('window');

  const Stockpress = () => {
    navigation.navigate(Stock);
  }
  const Commandepress = () => {
    navigation.navigate(Commande);
  }
  const Historiquepress = () => {
    navigation.navigate(Historique);
  }
  const Statistiquepress = () => {
    navigation.navigate(Statistique);
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor : '#F5F5F5',
    },
  
  
    button: {
      position: 'absolute',
      top: height*0.26,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  
  });
  
  return (
    <View style={[styles.container]}> 
      <StatusBar barStyle="light-content" />
      <HeaderHome color='black' Name="Le Train Bleu"/>
      <Footer color='black'/>
      
      
      

      <View style={styles.button}>
        <ButtonHome text='Stock' onPress={Stockpress} img={require('../../../img/product.png')} color='rgba(151, 181, 235, 0.5)'/>
        <ButtonHome text='Commande' onPress={Commandepress} img={require('../../../img/list.png')} color='rgba(137, 205, 136, 0.7)'/>
        <ButtonHome text='Historique' onPress={Historiquepress} img={require('../../../img/time-management.png')} color='rgba(228, 191, 191, 0.5)'/>
        <ButtonHome text='Statistique' onPress={Statistiquepress} img={require('../../../img/stats.png')} color='rgba(209, 193, 235, 0.7)'/>
      </View>

    </View>
  );
}