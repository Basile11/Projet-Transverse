import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View, Image } from 'react-native';

import Icon_menu from '../../components/Menu_bar.js';

import Home from '../Home/Home';
import Scan from '../Scan/Scan.js';
import Option from '../Option/Option';

const Notif = () => {
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
  

  return (
    <View>
      <View style={[styles.container]}> 
        <View style={styles.menu}><Icon_menu text='Option' onPress={Homepress}/></View>
        <Text style={styles.title}>{'Mes Alertes'}</Text>
        
        <View style={styles.notif}>
          <Text style={styles.title}>{'Mes Alertes'}</Text>
        </View>

      </View>
    </View>

  );
}
export default Notif;

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

  title: {

  },

  notif :{

  }

});