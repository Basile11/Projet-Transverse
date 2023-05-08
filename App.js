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

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
        }}>
      
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Option" component={Option} />
        <Stack.Screen name="Notif" component={Notif} />
        <Stack.Screen name="Historique" component={Historique} />
        <Stack.Screen name="Stats" component={Stats} />
        <Stack.Screen name="Commande" component={Commande} />
        <Stack.Screen name="Scan" component={Scan} />

        <Stack.Screen name="Stock" component={Stock} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};