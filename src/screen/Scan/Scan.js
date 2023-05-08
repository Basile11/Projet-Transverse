import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View } from 'react-native';

// import Icon_menu from '../../components/Menu_bar.js';
// import Back from '../../components/back.js';

import Home from '../Home/Home';
import Option from '../Option/Option';
import Notif from '../Notif/Notif.js';


const Scan = () => {
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

        <View style={styles.back}>
          <Back/>
          <Text style={styles.name}>{'Le train bleu'}</Text>
        </View>
        
        

        <View style={styles.menu}>
          <View style={{ flexDirection: 'row' }}>
            <Icon_menu text='Option'onPress={Optionpress}/>
            <Icon_menu text='Home' onPress={Homepress}/>
            <Icon_menu text='Scan' onPress={Scanpress}/>
            <Icon_menu text='bell' onPress={Notificationpress}/>
          </View>
        </View>

      </View>
    </View>

  );
}
export default Scan;

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
    fontWeight: 500,
    fontSize: 40,
    Lineheight: 53,
    color: '#FFFFFF',

  },

  button: {
    marginTop: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },

  menu: {
    width: 391,
    height: 100,
    marginTop: 25,
    backgroundColor: '#2F3031',
    border: 1,
    borderBottomColor: 'black',
    borderRadius: 40,
    alignItems: 'center',
    paddingTop: 30,
  },
});