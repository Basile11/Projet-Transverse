import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View, Image } from 'react-native';

import Icon_menu from '../../components/Menu_bar.js';

import Home from '../Home/Home';
import Scan from '../Scan/Scan.js';
import Notif from '../Notif/Notif.js';

const Option = () => {
  const navigation = useNavigation();

  const Optionpress = () => {
    navigation.navigate(Option);
  }
  const Homepress = () => {
    navigation.navigate(Home);
  }
  const Scanpress = () => {
    navigation.navigate(Scan);
  }
  const Notificationpress = () => {
    navigation.navigate(Notif);
  }

  return (
    <View>
      <View style={[styles.container]}> 
        <View style={styles.menu}><Icon_menu text='Option' onPress={Homepress}/></View>
        {/* <View style={styles.logo} ><Image source={require('../../../img/product.png')}style={{ width: 150, height: 150}}/></View> */}
        
        <View style={styles.Option}>
          <Text style={styles.profil}>{'Mon Profil'}</Text>
          <Text style={styles.settings}>{'Paramètres'}</Text>
          <Text style={styles.logout}>{'Deconnexion'}</Text>
        </View>

      </View>
    </View>

  );
}
export default Option;

const styles = StyleSheet.create({
  container: {
    padding: 100,
    backgroundColor: '#2F3031',
  },

  menu: {
    position: 'absolute',
    top: 70,
    right: 0,
  },

  logo: {
    margin: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Option: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 40,
  },

  profil:{
    marginBottom: 25,
    fontWeight: 400,
    fontSize: 30,
    color: '#FFFFFF',
  },

  settings:{
    marginBottom: 225,
    // fontWeight: 400,
    fontSize: 30,
    color: '#FFFFFF',
  },

  logout:{
    // fontWeight: 400,
    fontSize: 30,
    color: '#FFFFFF',
  },

});