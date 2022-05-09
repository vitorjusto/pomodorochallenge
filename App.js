import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Configuracao from './components/configuracao';
import Cronometro from './components/cronometro'

export default function App() {
  return (
    <View style={styles.container}>
      <Configuracao></Configuracao>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
