import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, TouchableOpacity } from 'react-native';
import { useRoute, useEffect } from '@react-navigation/core';
import React from 'react';

import HeaderVin from '../../../../../components/Header/HeaderVin.js';
import Footer from '../../../../../components/Footer/Footer.js';

export default function Vin2({route}) {
  const {name, stock, year, description, limit, image, prix, mail} = route.params;
  const { width, height } = Dimensions.get('window');




  //style
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      justifyContent: 'center',
      //backgroundColor : 'red',
    },
    
    text: {
      position: 'absolute',
      top: 0,
      color: 'black',
      // left: 100,
      // right: 0,
    },
    // viewimage: {
    //   position: 'absolute',
    //   backgroundColor: 'red',
    //   top: 0
    // },
    // Image: {
    //   width: 100,
    //   height: 100,
    // },
    viewtext: {
      position: 'absolute',
      top: height*0.22,
      bottom: height*0.14,
      left: width*0.1,
      right: width*0.1,
      borderRadius: 30,
      alignItems: 'center',
      backgroundColor: 'white',
    },
    nbrstock: {
      position: 'absolute',
      top: height*0.025,
      right: height*0.025,
      fontSize: height*0.024,
      backgroundColor: '#89CD88',
      borderRadius: 500,
      width: height*0.05,
      height: height*0.05,
      textAlign: 'center',
    },
    prix: {
      position: 'absolute',
      top: height*0.03,
      left: height*0.05,
      fontWeight: 'bold',
      fontSize: height*0.035,
    },
    viewdescr: {
      position: 'absolute',
      top: height*0.1,
      left: width*0.07,
      right: width*0.07,
      height: height*0.3,
      backgroundColor: '#F5F5F5',
      borderRadius: 25,
    },

    description: {
      fontSize: height*0.02,
      borderRadius: 30,
      margin: width*0.03,
    },

    viewbutton: {
      position: 'absolute',
      top: height*0.42,
      // width: width*0.8,
      // backgroundColor: '#89CD88',
      flexDirection: 'row',
      left: width*0.07,
      right: width*0.07,

    },
    button: {
      // position: 'absolute',
      borderRadius: 300,
      // width: width*0.3,
      height: height*0.05,
      backgroundColor: 'black',
      margin: width*0.01,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textbut: {
      fontSize: height*0.02,
      color: 'white',
      // margin: width*0.02,
    },
    viewlimit: {
      position: 'absolute',
      top: height*0.5,
      left: width*0.07,
      right: width*0.07,
      flexDirection: 'row',
    },
    limit: {
      //Adapter la largeur en fonction de la taille de la limite
      fontSize: height*0.025,
      fontWeight: 'bold',
      backgroundColor: '#F5F5F5',
      borderRadius: 30,
      width: height*0.04,
      // textAlign: 'center',
    },




  });

  return (
  <View style={styles.container}>
      
      <HeaderVin name={name} color='black'/>
      <Footer color='black'/>
      
      {/* <View style={styles.viewimage}>
        <Image source={image} style={styles.Image}/>   
      </View> */}

      <View style={styles.viewtext}>
        <TextInput style={[styles.nbrstock, Number({stock})>Number({limit}) ? {backgroundColor: '#89CD88'} : {backgroundColor: '#D55858'}]} placeholderTextColor={'black'}>
          {stock}
        </TextInput>

        <Text style={styles.prix}>{prix} €</Text>

        <View style={styles.viewdescr}>
          <Text style={styles.description}>{description}{'\n\n'}{mail}</Text>
        </View>

        <View style={styles.viewbutton}>
          <TouchableOpacity style={[styles.button, {left:0, height:height*0.05, width:height*0.05}]}>
            <Text style={styles.textbut}>+ 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {height:height*0.05, width:height*0.05}]}>
            <Text style={styles.textbut}>- 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {right:0, height:height*0.05, width:height*0.15, marginLeft: height*0.035}]}> 
            <Text style={styles.textbut}>Commander</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewlimit}>
          <Text style={{fontSize:height*0.025}}> Limite de stock : </Text>
          <TextInput style={styles.limit}> {limit}</TextInput>
        </View>

        <TouchableOpacity style={[styles.button, {top:height*0.58, height:height*0.04, width:height*0.15}]}>
          <Text style={styles.textbut}>Modifier</Text>
        </TouchableOpacity>

      </View>


  </View>
  );
}





