import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import React, { useState }from 'react';
import { useNavigation } from '@react-navigation/core';


export default function ButtonHome({text, onPress, img, color}) {
  const [texte] = useState(text);
  const image = "../../../img/"+img;
  const { width, height } = Dimensions.get('window');

  const navigation = useNavigation();
  const Cave = () => {
    navigation.navigate(Cave);
  }
  const Biere = () => {
    navigation.navigate(Biere);
  }
  const Alcool_fort = () => {
    navigation.navigate('Spiritueux');
  }
  const Soft = () => {
    navigation.navigate(Soft);
  }

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      width: '100%',
    },
    
    button: {
      flexDirection: 'row',
      flex: 1,
      width: '85%',
      height: height * 0.13,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      marginBottom: height * 0.028,
      alignContent: 'center',
      paddingLeft:'6%',
      alignItems: 'center',
      // left : '6%',
    },
  
    cadre: {
      flex: 1,
      position: 'absolute',
      width: height * 0.085,
      height: height * 0.085,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      left: -5,
      left: height * -0.005,
      bottom: height * -0.025,
    },
  
    image: {
      width: height * 0.05,
      height: height * 0.05,
    },

    text: {
      fontSize: height * 0.028,
      Lineheight: 26,
      marginLeft: height * 0.1,
    },
  
    fleche: {
      position: 'absolute',
      width: '5%',
      height:'22%',
      right : '6%',
    }
  });
  
  
  return (
      <View style={styles.container}>
        {/* <TouchableOpacity onPress={onPress} style={styles.button}>
            <View>
            <View style={{backgroundColor: color, ...styles.cadre}}>
                <Image source={image} style={{ width: '50%', height: '50%'}}/>
            </View>
              <Text style={styles.text}>{text}</Text>
          </View>
          <Image source={require('../../../img/fleche.png')} style={styles.fleche}/>
        </TouchableOpacity> */}
        
        
        {texte === 'Stock' ? (
          <TouchableOpacity onPress={onPress} style={{borderTopLeftRadius: height*0.06, ...styles.button}}>
            <View>
              <View style={{backgroundColor: 'rgba(151, 181, 235, 0.5)',borderTopLeftRadius: height*0.06, opacity: 0.8, ...styles.cadre}}>
                <Image source={require('../../../img/product.png')}
                style={{ width: '50%', height: '50%'}}
                />
              </View>
              <Text style={styles.text}>{text}</Text>
              
            </View>
            <Image source={require('../../../img/fleche.png')} style={styles.fleche}/>
          </TouchableOpacity>
          
        ) : texte === 'Commande' ?(
          <TouchableOpacity onPress={onPress} style={styles.button}>
            <View>
              <View style={{backgroundColor: 'rgba(137, 205, 136, 0.7)', ...styles.cadre}}>
                <Image source={require('../../../img/list.png')}
                style={{ width: '50%', height: '50%', resizeMode: 'contain' }}

                />
              </View>
              <Text style={styles.text}>{text}</Text>
            </View>
            <Image source={require('../../../img/fleche.png')} style={styles.fleche}/>
          </TouchableOpacity> 

        ) : texte === 'Historique' ?(
          <TouchableOpacity onPress={onPress} style={styles.button}>
            <View>
              <View style={{backgroundColor: 'rgba(228, 191, 191, 0.5)', ...styles.cadre}}>
                <Image source={require('../../../img/time-management.png')}
                style={{ width: '50%', height: '50%'}}
                />
              </View>
              <Text style={styles.text}>{text}</Text>
            </View>
            <Image source={require('../../../img/fleche.png')} style={styles.fleche}/>
          </TouchableOpacity>

        ) : texte === 'Statistique' ?(
          <TouchableOpacity onPress={onPress} style={{borderBottomLeftRadius: height*0.05, ...styles.button}}>
            <View>
              <View style={{backgroundColor: 'rgba(209, 193, 235, 0.7)', borderBottomLeftRadius: height*0.035, ...styles.cadre}}>
                <Image source={require('../../../img/stats.png')}
                style={{ width: '50%', height: '50%'}}
                />
              </View>
              <Text style={styles.text}>{text}</Text>
            </View>
            <Image source={require('../../../img/fleche.png')} style={styles.fleche}/>
          </TouchableOpacity>



        ) : texte === 'Cave' ?(
            <TouchableOpacity onPress={Cave} style={styles.button}>
              <View>
                <View style={{backgroundColor: '#B83052', ...styles.cadre}}>
                  <Image source={require('../../../img/Vin.png')}
                  style={{ width: '60%', height: '60%'}}
                  />
                </View>
                <Text style={styles.text}>{text}</Text>
              </View>
              <Image source={require('../../../img/fleche.png')} style={styles.fleche}/>
            </TouchableOpacity>
  
        ) : texte === 'Bière' ?(
          <TouchableOpacity onPress={Biere} style={styles.button}>
            <View>
              <View style={{backgroundColor: '#FFEFD7', ...styles.cadre}}>
                <Image source={require('../../../img/biere.png')}
                style={{ width: '50%', height: '50%', left: '4%'}}
                />
              </View>
              <Text style={styles.text}>{text}</Text>
            </View>
            <Image source={require('../../../img/fleche.png')} style={styles.fleche}/>
          </TouchableOpacity>
        
        ) : texte === 'Soft' ?(
          <TouchableOpacity onPress={Soft} style={{borderBottomLeftRadius: height*0.05, ...styles.button}}>
            <View>
            <View style={{backgroundColor: '#97B5EB', borderBottomLeftRadius: height*0.035, ...styles.cadre}}>
                <Image source={require('../../../img/jus.png')}
                style={{ width: '50%', height: '50%', right: '3%'}}
                />
              </View>
              <Text style={styles.text}>{text}</Text>
            </View>
            <Image source={require('../../../img/fleche.png')} style={styles.fleche}/>
          </TouchableOpacity>

        ) : texte === 'Alcool fort' ?(
          <TouchableOpacity onPress={Alcool_fort} style={{borderTopLeftRadius: height*0.06, ...styles.button}}>
            <View>
              <View style={{backgroundColor: '#8B8479',borderTopLeftRadius: height*0.06, opacity: 0.8, ...styles.cadre}}>
                <Image source={require('../../../img/verre.png')}
                style={{ width: '50%', height: '50%'}}
                />
              </View>
              <Text style={styles.text}>{text}</Text>
            </View>
            <Image source={require('../../../img/fleche.png')} style={styles.fleche}/>
          </TouchableOpacity>
          ) : (
          <Text>Section introuvable</Text>
        )}
      </View>
  );
};

