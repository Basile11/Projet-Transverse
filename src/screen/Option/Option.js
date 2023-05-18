import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity } from 'react-native';

import Footer from '../../components/Footer/Footer.js';
import Signin from '../../components/Firebase/signin.js';

const PARAM = [
  { id: '1', title: 'Général'},
  { id: '2', title: 'Utilisateurs'},
  { id: '3', title: 'Sécurité'},
  { id: '4', title: 'Aide'},
  { id: '5', title: 'A propos'},
  { id: '6', title: 'Déconnexion'},
];

export default function Option() {
  const navigation = useNavigation();

  const { width, height } = Dimensions.get('window');

  const styles = StyleSheet.create({
    container: {
      height: height,
      backgroundColor : 'black',
    //   alignItems: 'center',
    },
    page: {
        position: 'absolute',
        top: 0,
    },
    
    title: {
        position: 'absolute',
        top: height*0.13,
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        left: width*0.075,
    },
    flatList: {
      position: 'absolute',
      top: height*0.3,
      bottom: height*0.095,
      flex: 1,
      width: width,
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 5},
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    item: {
      position: 'relative',
      flexDirection: 'row',
      width: width * 0.85,
      height: height * 0.09,
      height: height * 0.075,
      left: width*0.075,
      // backgroundColor: '#F5F5F5',
      backgroundColor: 'black',
      alignItems: 'center',
      // borderTopWidth: 1,
      borderBottomWidth: 2,
      borderColor: 'white',
    },
    name: {
      position: 'absolute',
      fontSize: 21,
      left : width*0.05,
      fontWeight: 'bold',
      color: 'white',
    },
  
  });
  
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.name}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container]}> 
        <Signin/>
        <View style={styles.page}>
            <Text style={styles.title}>Paramètres </Text>
        </View>
        
        <FlatList
          data={PARAM}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.flatList}
        />
    </View>
    
  );
}