import { Button, StyleSheet, Text, View, useState, Image, Dimensions, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Searchbar from '../../components/Header/Searchbar.js';

import React from 'react';
import { useNavigation } from '@react-navigation/core';

import HeaderRest from '../../components/Header/HeaderRest.js';
import Footer from '../../components/Footer/Footer.js';

const STATS = [
  {id:1, nom:'Meilleures ventes'},
  {id:2, nom:'Rentabilité des produits'},
  {id:3, nom:'Pertes'},
  {id:4, nom:'Evolutions'},
  {id:5, nom:'Stocks faibles'},
  {id:6, nom:'Prévisions'}
]

const Stats = () => {
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
      top: height*0.22,
      bottom: height*0.095,
      flex: 1,
      // width: width * 0.85,
      width: width,
  
      // left: width*0.075,
      borderBottomLeftRadius: 90, 
      borderTopLeftRadius: 90,
      // backgroundColor: '#FFFFFF',
    },
    item: {
        position: 'relative',
        // position: 'absolute',
        flexDirection: 'row',
        flex: 1,
        width: width * 0.85,
        // height: height * 0.08,
        height: height * 0.092,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        // marginBottom: height * 0.01,
        marginTop: height * 0.01,
        alignContent: 'center',
        // paddingLeft:'6%',
        alignItems: 'center',
        justifyContent: 'center',
        left: width*0.075,
        top: height*0.03,
        // backgroundColor: 'red',
    },
    title: {
        position: 'absolute',
        fontSize: height*0.025,
        fontWeight: 'bold',
        // width: width*0.5,
        textAlign: 'center',
        // backgroundColor: 'red',
        // top : height*0.015,
    },
  
  });

  const renderItem = ({ item }) => (
    //A modifier pour le style du dernier item
    
    <TouchableOpacity 
      style={[styles.item, 
              item.id==1 ? {borderTopLeftRadius:40} : {borderTopLeftRadius:20},
              item.id==6 ? {borderBottomLeftRadius:40} : {borderBottomLeftRadius:20},
            ]}>
    <Text style={styles.title}>{item.nom}</Text>
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
          <HeaderRest name='Statistique'/>
        </View> */}

      <HeaderRest name='Statistiques' color='black'/>
      <Footer color='black'/>

      <FlatList
          data={STATS}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.flatList}
        />

      </View>
    </View>

  );
}
export default Stats;

