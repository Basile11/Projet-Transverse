import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity, TextInput,Button, useState } from 'react-native';

import React, {useEffect} from 'react';
import { useNavigation } from '@react-navigation/core';


import HeaderRest from '../../../components/Header/HeaderRest.js';
import Footer from '../../../components/Footer/Footer.js';


// import Vin from './TypeVin/Vin/Vin.js';
// import Vin2 from './TypeVin/Vin/Vin2.js';



import { firebase, app } from '../../../../config.js'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import Biere from '../Biere/Biere.js'




const DATA = [
    { id: '1', title: 'Vin 1', stock: '10', year: '2019', descr:'Très bon vin blablabla', limit: '10', image: require('../../../../img/vin1.png') },
    { id: '2', title: 'Vin 2', stock: '13', year: '2010', descr:'Très bon vin blablabla', limit: '10', image: require('../../../../img/vin1.png') },
    { id: '3', title: 'Vin 3', stock: '5', year: '2015', descr:'Très bon vin blablabla', limit: '10', image: require('../../../../img/vin1.png') },
    { id: '4', title: 'Vin 4', stock: '10', year: '2012', descr:'Très bon vin blablabla', limit: '10', image: require('../../../../img/vin1.png') },
    { id: '5', title: 'Vin 5', stock: '23', year: '2011', descr:'Très bon vin blablabla', limit: '10', image: require('../../../../img/vin1.png') },
    { id: '6', title: 'Vin 6', stock: '23', year: '2011', descr:'Très bon vin blablabla', limit: '6', image: require('../../../../img/vin1.png') },
    { id: '7', title: 'Vin 7', stock: '8', year: '2011', descr:'Très bon vin blablabla', limit: '10', image: require('../../../../img/vin1.png') },
    { id: '8', title: 'Vin 8', stock: '43', year: '2011', descr:'Très bon vin blablabla', limit: '10', image: require('../../../../img/vin1.png') },
    { id: '9', title: 'Vin 9', stock: '7', year: '2011', descr:'Très bon vin blablabla', limit: '10', image: require('../../../../img/vin1.png') },
    { id: '10', title: 'Vin 10', stock: '23', year: '2011', descr:'Très bon vin blablabla', limit: '10', image: require('../../../../img/vin1.png') },
    { id: '11', title: 'Vin 11', stock: '3', year: '2011', descr:'Très bon vin blablabla', limit: '10', image: require('../../../../img/vin1.png') },
  ];

const Cave = () => {
  const { width, height } = Dimensions.get('window');
  const navigation = useNavigation();
  // const VinPress = () => {
  //   navigation.navigate(Vin, {name: item.title, stock: item.stock,yYear: item.year, description: item.descr, limit: item.limit, image: item.image});
  // }
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const collectionRef = firebase
      .firestore()
      .collection('Bars')
      .doc('Le Train bleu')
      .collection('Stock')
      .doc('Cave')
      .collection('sous-collection');
  
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




// style
  const styles = StyleSheet.create({
    container: {
      backgroundColor : '#F5F5F5',
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
    },
    item: {
        position: 'relative',
        flexDirection: 'row',
        flex: 1,
        width: width * 0.85,
        height: height * 0.08,
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
    },
    title: {
        position: 'absolute',
        fontSize: height*0.023,
        left : width*0.2,
        fontWeight: 'bold',
        top : height*0.015,
    },
    year: {
        position: 'absolute',
        fontSize: height*0.018,
        left : width*0.2,
        top : height*0.045,
    },
    nbrstock: {
        position: 'absolute',
        left: width*0.055,
        fontSize: height*0.022,
        backgroundColor: '#89CD88',
        borderRadius: 500,
        width: height*0.04,
        height: height*0.04,
        textAlign: 'center',
    },
    nbr: {
        position: 'absolute',
        right: width*0.166,
        fontSize: height*0.03,
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

  });




  

  const renderItem = ({ item }) => (
    //A modifier pour le style du dernier item
    <TouchableOpacity onPress={() => {navigation.navigate('Vin2', {name: item.title, stock: item.stock, year: item.year, description: item.descr, limit: item.limit, image: item.image}); }}
                      style={[styles.item, item.id==1 ? {borderTopLeftRadius:50, marginTop:height*0.012} : {borderTopLeftRadius:20}]}>
      <TextInput style={[styles.nbrstock, Number(item.stock)>Number(item.limit) ? {backgroundColor: '#89CD88'} : {backgroundColor: '#D55858'}]} 
                placeholder={item.stock} 
                placeholderTextColor={'black'}/>
     
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.year}>{item.year}</Text>
      
      <TouchableOpacity style={styles.plus}>
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.moins}>
        <Text style={styles.moinsText}>-</Text>
      </TouchableOpacity>
      <TextInput style={styles.nbr} placeholder={'_'} placeholderTextColor={'black'} />
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={[styles.container]}> 
        
      <HeaderRest name='Cave' color='black'/>
      <Footer color='black'/>


        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.flatList}
        />

        

        
      </View>
    </View>

  );
}
export default Cave;

