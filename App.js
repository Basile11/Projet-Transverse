import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screen/Home/Home';
import Option from './src/screen/Option/Option';
import Notif from './src/screen/Notif/Notif';
import Scan from './src/screen/Scan/Scan';
import Stock from './src/screen/Stock/Stock'
import Historique from './src/screen/Historique/Historique'
import Stats from './src/screen/Statistiques/Stats';
import Commande from './src/screen/Commande/Commande';
import Biere from './src/screen/Stock/Biere/Biere';
import Cave from './src/screen/Stock/Cave/Cave';
import Soft from './src/screen/Stock/Soft/Soft';
import Spiritueux from "./src/screen/Stock/Spiritueux/Spiritueux";
import Profil from './src/screen/Profil/Profil';
import Vin from './src/screen/Stock/Cave/Vin/Vin';
import Biere from './src/screen/Stock/Biere/Biere';
import Spiritueux from './src/screen/Stock/Spiritueux/Spiritueux';
import Soft from './src/screen/Stock/Soft/Soft';
import Vin2 from './src/screen/Stock/Cave/TypeVin/Vin/Vin2';

export default function App() {
  const Stack = createNativeStackNavigator();
  


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        animation: 'none' 
        }}>
      
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Option" component={Option} />
        <Stack.Screen name="Profil" component={Profil} />
        <Stack.Screen name="Notif" component={Notif} />
        <Stack.Screen name="Historique" component={Historique} />
        <Stack.Screen name="Stats" component={Stats} />
        <Stack.Screen name="Commande" component={Commande} />
        <Stack.Screen name="Scan" component={Scan} />

        <Stack.Screen name="Stock" component={Stock}/>
        <Stack.Screen name="Biere" component={Biere}/>
        <Stack.Screen name="Cave" component={Cave}/>
        <Stack.Screen name="Vin" component={Vin}/>
        <Stack.Screen name="Vin2" component={Vin2}/>
        <Stack.Screen name="Biere" component={Biere}/>
        <Stack.Screen name="Spiritueux" component={Spiritueux}/>
        <Stack.Screen name="Soft" component={Soft}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};