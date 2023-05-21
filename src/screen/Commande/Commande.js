import { Button, StyleSheet, Text, View, useState, Image, Dimensions, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Searchbar from '../../components/Header/Searchbar.js';

import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { useEffect } from 'react';


import HeaderRest from '../../components/Header/HeaderRest.js';
import Footer from '../../components/Footer/Footer.js';


const COMMANDE = [
  {id: 1, name: 'Chateau neuf du pape', nbr:'5'},
  {id: 2, name: 'Coca-Cola', nbr:'6'},
  {id: 3, name: 'Jus de pomme', nbr:'3'},
  {id: 4, name: 'Heineken', nbr:'3'},
  {id: 5, name: 'Champagne', nbr:'2'},
  {id: 6, name: 'Jameson', nbr:'8'},

]





const Commande = () => {
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
  
    test: {
      position: 'absolute',
      marginTop: 400,
      fontSize: 40,
      color: '#97B5EB',
      color: '#000000',
    },

    flatList: {
      position: 'absolute',
      top: height*0.3,
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
        fontSize: height*0.02,
        left : width*0.05,
        fontWeight: 'bold',
        width: width*0.5,
        // backgroundColor: 'red',
        // top : height*0.015,
    },

    nbr: {
      position: 'absolute',
      right: width*0.166,
      fontSize: height*0.025,
      // top : height*0.01,
    },
    plus: {
        position: 'absolute',
        right: width*0.07,
        backgroundColor: '#89CD88',
        borderRadius: 200,
        width: height*0.035,
        height: height*0.035,
        alignItems: 'center',
        // textAlignVertical: 'center',
        // justifyContent: 'center',
    },
    plusText: {
        fontSize: height*0.035,
        top: -height*0.004,
    },
    moins: {
        position: 'absolute',
        right: width*0.22,
        backgroundColor: '#D55858',
        borderRadius: 200,
        width: height*0.035,
        height: height*0.035,
        alignItems: 'center',
    },
    moinsText: {
        fontSize: height*0.035,
        top: -height*0.004,
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
      height: height*0.05,
      width: width*0.6,
      backgroundColor: 'black',
      // backgroundColor: 'white',
      margin: width*0.01,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#89CD88',
    },
    textbut: {
      fontSize: height*0.02,
      // fontWeight: 'bold',
      color: 'white',
      // color: 'black',
    },



  });

  const renderItem = ({ item }) => (
    //A modifier pour le style du dernier item
    
    <TouchableOpacity style={styles.item}>
     
      <Text style={styles.title}>{item.name}</Text>
      {/* <Text style={styles.title}>{id}</Text> */}
      
      <TouchableOpacity style={styles.plus}>
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.moins}>
        <Text style={styles.moinsText}>-</Text>
      </TouchableOpacity>
      <TextInput style={styles.nbr} placeholder={item.nbr} placeholderTextColor={'black'} />
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={[styles.container]}> 

        <HeaderRest name='Commande' color='black'/>
        <Footer color='black'/>

        {/* <Image style={styles.image} source={require('../../../img/commande.png')}/> */}

        <View style={styles.viewbutton}>        
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textbut}>Convertir en PDF</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={COMMANDE}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.flatList}
        />
      </View>
      
    </View>

  );
  
}
export default Commande;



