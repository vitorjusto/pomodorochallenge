import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons, Entypo } from '@expo/vector-icons';


function addNumber(number)
{
    if(number == 99)
        return 99
    number += 1
    return number
}

function subNumber(number)
{
    if(number == 1)
        return 1
    
    number -= 1
    return number
} 



export default function App({ navigation }) {

    const [trabalhoNumber, setTrabalhoNumber] = useState(25);
    const [breakNumber, setbreakNumber] = useState(5);
    const [sectionNumber, setSectionNumber] = useState(3);
    const [addNumberText, setAddNumberText] = useState('trabalho');



    
    return(
        <View style={styles.container}>

            <View style={styles.escolherNumero}>
            <View style={styles.BotaoContainer}>
                <TouchableOpacity onPressIn={() => setTrabalhoNumber(addNumber(trabalhoNumber))}>  
                <View style={styles.botao}>
                <Entypo name={'arrow-up'} size={25} color={'#333853'}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => setTrabalhoNumber(subNumber(trabalhoNumber))} >
                <View style={styles.botao}>
                <Entypo name={'arrow-down'} size={25} color={'#333853'}/>
                       
                </View>
                </TouchableOpacity>
            </View>
            <View style={styles.centralizar}>
            <View style={styles.numeroContainer}>
            <Text style={styles.Numero}>{trabalhoNumber}</Text>
            </View>
                <Text style={styles.texto}>Trabalho</Text>
            </View>
            </View>

            <View style={styles.escolherNumero}>
            <View style={styles.BotaoContainer}>
                <TouchableOpacity onPress={() => setbreakNumber(addNumber(breakNumber))}>  
                <View style={styles.botao}>
                <Entypo name={'arrow-up'} size={25} color={'#333853'}/>
                </View>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => setbreakNumber(subNumber(breakNumber))}>
                <View style={styles.botao}>
                <Entypo name={'arrow-down'} size={25} color={'#333853'}/>
                       
                </View>
                </TouchableOpacity>
            </View>
            <View style={styles.centralizar}>
            <View style={styles.numeroContainer}>
            <Text style={styles.Numero}>{breakNumber}</Text>
            </View>
                <Text style={styles.texto}>Pausa</Text>
            </View>
            </View>

            <View style={styles.escolherNumero}>
            <View style={styles.BotaoContainer}>
                <TouchableOpacity onPress={() => setSectionNumber(addNumber(sectionNumber))}>  
                <View style={styles.botao}>
                <Entypo name={'arrow-up'} size={25} color={'#333853'}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSectionNumber(subNumber(sectionNumber))}>
                <View style={styles.botao}>
                <Entypo name={'arrow-down'} size={25} color={'#333853'}/>
                       
                </View>
                </TouchableOpacity>
            </View>
            <View style={styles.centralizar}>
            <View style={styles.numeroContainer}>
            <Text style={styles.Numero}>{sectionNumber}</Text>
            </View>
                <Text style={styles.texto}>Sessões</Text>
            </View>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Cronômetro', {trabalhoNumber: trabalhoNumber, breakNumber: breakNumber, sectionNumber: sectionNumber, navigation, navigation})}>  
                <View style={styles.botaoContinue}>
                    <Text style={styles.textobotao}>Continuar</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333853',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: "100%",
    },
    numeroContainer :{
        backgroundColor: '#3C4262',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 10,
        boxShadow: "3px 3px 5px rgba(0,0,0, 0.5)"
      },
      botao:
  {
    height: 40,
    width: 40,
    backgroundColor:'rgb(101, 107, 138)',
    borderRadius: 45,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  escolherNumero:
  {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      height: 150,
      width: "80%",
      justifyContent: 'center'
  },
  BotaoContainer:
  {
      marginRight: 20,
      height: 100,
      display: 'flex',
      justifyContent: 'space-evenly'
  },
  centralizar:
  {
      display: 'flex',
      alignItems: 'center'
  },
  texto:
  {
    color: 'rgb(162, 165, 180)',
    fontSize: "20px"
  },
  titulo:
  {
    color: 'rgb(162, 165, 180)',
    fontSize: "40px"
  },
  Numero:
  {
    color: 'rgb(162, 165, 180)',
    fontSize: "50px"
  },
  botaoContinue:
  {
      display: 'flex',
    backgroundColor: '#3C4262',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    borderRadius: 10,
    height: 60,
    boxShadow: "3px 3px 5px rgba(0,0,0, 0.5)"
  },
  textobotao:
  {
    fontSize: "30px",
    color: 'rgb(162, 165, 180)',
  }
})