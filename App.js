import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Configuracao from './components/configuracao';
import Cronometro from './components/cronometro';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        
        headerStyle:{backgroundColor: '#3C4262', borderBottomWidth: "0px"},
        headerTitleStyle:{color: 'rgb(162, 165, 180)'},
        
        }}>
        <Stack.Screen name="Pomodoro" component={Configuracao} />
        <Stack.Screen name="Cronômetro"  component={Cronometro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

