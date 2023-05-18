import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity, TextInput,Button } from 'react-native';

import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/core';


import HeaderRest from '../../../components/Header/HeaderRest.js';
import Footer from '../../../components/Footer/Footer.js';


// import Vin from './TypeVin/Vin/Vin.js';
// import Vin2 from './TypeVin/Vin/Vin2.js';



import { firebase, app } from '../../../../config.js'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import Biere from '../Biere/Biere.js'




const Spiritueux = () => {
  const { width, height } = Dimensions.get('window');
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [documentName, setDocumentName] = useState('Vodka');
  // const [users, setUser] = useState([]);
  const todosRef = firebase.firestore().collection('Bars').doc('Le Train bleu').collection('Stock').doc('Alcool fort').collection(documentName);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await todosRef.get();
      const users = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setData(users);
    };
  
    fetchData();
  }, [documentName]);


  const Vodkalist = async() => {
    try {
      setDocumentName('Vodka');
    }
    catch (e) {
      console.log(e);
    }
  };
  
  const Whiskylist = async() => { 
    try {
      setDocumentName('Whisky');
    }
    catch (e) {
      console.log(e);
    }
  };

  const updateStock = async (itemId, newStock) => {
    try {
      // Récupérer une référence au document dans la base de données
      const stockRef = todosRef.doc(itemId);
  
      // Mettre à jour le champ "Stock" avec la nouvelle valeur
      await stockRef.update({ Stock: newStock });
  
      // Mettre à jour l'état local avec la nouvelle valeur
      const updatedData = data.map(item => {
        if (item.id === itemId) {
          return { ...item, Stock: newStock };
        }
        return item;
      });
      setData(updatedData);
      console.log('Stock updated!');
    } catch (error) {
      console.log(error);
    }
  };
  


// style
  const styles = StyleSheet.create({
    container: {
      backgroundColor : '#F5F5F5',
    },  
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
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
        left : width*0.2,
        fontWeight: 'bold',
        // top : height*0.015,
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

    viewbutton: {
      position: 'absolute',
      top: height*0.24,
      // width: width*0.8,
      // backgroundColor: '#89CD88',
      flexDirection: 'row',
      left: width*0.07,
      right: width*0.07,
    },
    button: {
      // position: 'absolute',
      borderRadius: 30,
      // width: width*0.3,
      height: height*0.05,
      width: width*0.4,
      backgroundColor: 'white',
      margin: width*0.01,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#89CD88',

    },
    textbut: {
      fontSize: height*0.02,
      fontWeight: 'bold',
    },

  });




  

  const renderItem = ({ item }) => (
    //A modifier pour le style du dernier item
    
    <TouchableOpacity onPress={() => {navigation.navigate('Vin2', {doc1: 'Alcool fort', coll:documentName, doc2: item.Nom}); }}
    // <TouchableOpacity onPress={() => {navigation.navigate('Vin2', {name: item.Nom, stock: item.Stock.toString(), limit: item.Limite.toString()}); }}
                      style={[styles.item, item.id==0 ? {borderTopLeftRadius:50, marginTop:height*0.012} : {borderTopLeftRadius:20}]}>
      <TextInput style={[styles.nbrstock, item.Stock>item.Limite ? {backgroundColor: '#89CD88'} : {backgroundColor: '#D55858'}]} 
                placeholder={item.Stock.toString()} 
                placeholderTextColor={'black'}/>
     
      <Text style={styles.title}>{item.Nom}</Text>
      {/* <Text style={styles.title}>{id}</Text> */}
      
      <TouchableOpacity style={styles.plus}>
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.moins}>
        <Text style={styles.moinsText}>-</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.plus}
        onPress={() => {
          const newStock = item.Stock + 1; // Augmenter le stock de 1
          updateStock(item.id, newStock);}}>
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.moins}
        onPress={() => {
          const newStock = item.Stock - 1; // Diminuer le stock de 1
          updateStock(item.id, newStock);}}>
        <Text style={styles.moinsText}>-</Text>
      </TouchableOpacity>

      <TextInput style={styles.nbr} placeholder={'_'} placeholderTextColor={'black'} />
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={[styles.container]}> 
        
        <View style={styles.footer}>
          <Footer color='#F5F5F5'/>
        </View>

        <View style={styles.header}>
          <HeaderRest name='Alcool fort'/>
        </View>

        {/* <FlatList
            data={users}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.flatList}
        /> */}

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.flatList}
        />

        <View style={styles.viewbutton}>
        <TouchableOpacity onPress={Vodkalist} style={[{right:0}, styles.button, documentName==='Vodka' ? {borderBottomWidth: 3, borderColor: 'black'} : {}]}>
            <Text style={styles.textbut}>Vodka</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Whiskylist} style={[{right:0}, styles.button, documentName==='Whisky' ? {borderBottomWidth: 3, borderColor: 'black'} : {}]}>
            <Text style={styles.textbut}>Whisky </Text>
          </TouchableOpacity>
        </View>

        
      </View>
    </View>

  );
}
export default Spiritueux;

