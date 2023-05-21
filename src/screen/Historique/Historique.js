import { Button, StyleSheet, Text, View, useState, Image, Dimensions, FlatList, TouchableOpacity, TextInput } from 'react-native';
import ButtonHome from '../../components/ButtonHome/ButtonHome.js';
import Searchbar from '../../components/Header/Searchbar.js';

import React from 'react';
import { useNavigation } from '@react-navigation/core';

import HeaderRest from '../../components/Header/HeaderRest.js';
import Footer from '../../components/Footer/Footer.js';

const HISTO = [
  {id: 1, name: 'Produit ajouté', user: 'Responsable', date:'12.05.2023'},
  {id: 2, name: 'Commande passée', user: 'Commercial', date:'10.09.2023'},
  {id: 3, name: 'Produit ajouté', user: 'Serveur', date:'15.08.2023'},
  {id: 4, name: 'Produit ajouté', user: 'Responsable', date:'12.05.2023'},
  {id: 5, name: 'Commande passée', user: 'Commercial', date:'10.09.2023'},
  {id: 6, name: 'Produit supprimé', user:'Serveur', date:'15.08.2023'}
]



const Historique = () => {
  const navigation = useNavigation();
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
  
    button: {
      marginTop: 250,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
  
    flatList: {
      position: 'absolute',
      top: height*0.28,
      bottom: height*0.095,
      flex: 1,
      // width: width * 0.85,
      width: width,
  
      // left: width*0.075,
      borderBottomLeftRadius: 90, 
      // borderTopLeftRadius: 90,
      // backgroundColor: '#FFFFFF',
    },
    item: {
        position: 'relative',
        // position: 'absolute',
        flexDirection: 'row',
        flex: 1,
        width: width * 0.85,
        height: height * 0.08,
        height: height * 0.07,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        // marginBottom: height * 0.01,
        marginTop: height * 0.01,
        alignContent: 'center',
        paddingLeft:'6%',
        alignItems: 'center',
        justifyContent: 'center',
        left: width*0.075,
        top: height*0.01,
        // backgroundColor: 'red',
    },
    title: {
        position: 'absolute',
        fontSize: height*0.021,
        left : width*0.05,
        top : height*0.01,
        fontWeight: 'bold',
        width: width*0.5,
        // backgroundColor: 'red',
        // top : height*0.015,
    },
    user: {
      position: 'absolute',
      fontSize: height*0.018,
      left : width*0.05,
      top : height*0.037,
      // fontWeight: 'bold',
      width: width*0.5,
      // backgroundColor: 'red',
      // top : height*0.015,
  },
  
    date: {
      position: 'absolute',
      right: width*0.05,
      fontSize: height*0.018,
      // top : height*0.01,
    },
    viewbutton: {
      position: 'absolute',
      top: height*0.24,
      // width: width*0.8,
      // backgroundColor: '#89CD88',
      flexDirection: 'row',
      left: width*0.07,
      right: width*0.07,
      justifyContent: 'center',
    },
    button: {
      // position: 'absolute',
      borderRadius: 30,
      // width: width*0.3,
      height: height*0.03,
      width: width*0.6,
      // backgroundColor: 'black',
      // backgroundColor: 'white',
      backgroundColor: '#F5F5F5',
      margin: width*0.01,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#89CD88',
    },
    textbut: {
      fontSize: height*0.02,
      fontWeight: 'bold',
      color: 'black',
      textDecorationLine: 'underline',
      // color: 'black',
    },
  
  });

  const renderItem = ({ item }) => (
    //A modifier pour le style du dernier item
    
    <TouchableOpacity style={styles.item}>
     
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.user}>{item.user}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </TouchableOpacity>
  );


  return (
    <View>
      <View style={[styles.container]}> 
        
        {/* <Searchbar/> */}
        

        
        {/* <View style={styles.footer}>
          <Footer color='#F5F5F5'/>
        </View>

        <View style={styles.header}>
          <HeaderRest name='Historique'/>
        </View> */}

      <HeaderRest name='Historique' color='black'/>
      <Footer color='black'/>

      <View style={styles.viewbutton}>        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textbut}>Effacer l'historique</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={HISTO}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.flatList}
      />

      </View>
    </View>

  );
}
export default Historique;

