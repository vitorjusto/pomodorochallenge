import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator, DrawerItemList, } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Configuracao from './components/configuracao';
import Cronometro from './components/cronometro';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer
    
    >
      <Stack.Navigator 
      screenOptions={{
        
        headerStyle:{backgroundColor: '#3C4262', borderBottomWidth: "0px"},/* headerStyle altera a faixa de cima do conteudo*/
        headerTitleStyle:{color: 'rgb(162, 165, 180)'},/* headerTitleStyle altera o texto da faixa de cima do conteudo*/
        
        }}>
        <Stack.Screen name="Home" component={Configuracao} />
        <Stack.Screen name="Cronometro" component={Cronometro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

