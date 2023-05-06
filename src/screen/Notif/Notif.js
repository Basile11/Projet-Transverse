import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, FlatList } from 'react-native';

import Footer from '../../components/Footer/Footer.js';

const NOTIF = [
  { id: '1', title: 'Changement de stock', user: 'Basile', date: '06/05/2023', read: false},
  { id: '2', title: 'Ajout de stock', user: 'Bastien', date: '06/02/2023', read: false},
  { id: '3', title: 'Ajout à liste de course', user: 'Maxime', date: '06/05/2023', read: true},
  { id: '4', title: 'Changement de stock', user: 'Basile', date: '06/05/2023', read: false},
  { id: '5', title: 'Changement de stock', user: 'Basile', date: '06/05/2023', read: true},
  { id: '6', title: 'Changement de stock', user: 'Basile', date: '06/05/2023', read: false},
  { id: '7', title: 'Changement de stock', user: 'Basile', date: '06/05/2023', read: true},
  { id: '8', title: 'Changement de stock', user: 'Basile', date: '06/05/2023', read: false},
  { id: '9', title: 'Changement de stock', user: 'Basile', date: '06/05/2023', read: false},
];

export default function Notif() {
  const navigation = useNavigation();

  const { width, height } = Dimensions.get('window');

  const styles = StyleSheet.create({
    container: {
      backgroundColor : 'black',
    //   alignItems: 'center',
    },
    page: {
        position: 'absolute',
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
      top: height*0.22,
      bottom: height*0.095,
      flex: 1,
      width: width,
      // borderBottomLeftRadius: 90, 
      // borderTopLeftRadius: 90,
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 5},
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },

    item: {
      position: 'relative',
      flexDirection: 'row',
      // flex: 1,
      width: width * 0.85,
      height: height * 0.09,
      backgroundColor: '#F5F5F5',
      borderRadius: 20,
      marginTop: height * 0.015,
      // alignContent: 'center',
      // paddingLeft:'6%',
      alignItems: 'center',
      // justifyContent: 'center',
      left: width*0.075,
      // top: height*0.01,
    },
    name: {
      position: 'absolute',
      fontSize: 21,
      left : width*0.05,
      fontWeight: 'bold',
      top : height*0.015,
    },
    user: {
      position: 'absolute',
      fontSize: 15,
      left : width*0.05,
      top : height*0.063,
    },
    date: {
      position: 'absolute',
      left : width*0.05,
      top : height*0.042,
      fontSize: 15,
    },
    read: {
      position: 'absolute',
      right: width*0.07,
      // top: height*0.03,
      alignSelf: 'center',
      backgroundColor: '#F03A3A',
      width: 20,
      height: 20,
      borderRadius: 100,
    },
  
  });
  
  const renderItem = ({ item }) => (
    (item.read == false) ? (
      <TouchableOpacity style={styles.item}>
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.user}>{item.user}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <View style={styles.read}></View>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity style={styles.item}>
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.user}>{item.user}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </TouchableOpacity>
    )
  );

  return (
    <View style={[styles.container]}> 
        
        <View style={styles.footer}>
            <Footer color='black'/>
        </View> 
        <View style={styles.page}>
            <Text style={styles.title}>Quoi de neuf ?</Text>
        </View>

        <FlatList
          data={NOTIF}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.flatList}
        />
    </View>
    
  );
}