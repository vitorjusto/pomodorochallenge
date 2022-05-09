import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons, Entypo } from '@expo/vector-icons';

export default function App() {
    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>Pomodoro</Text>

            <View style={styles.escolherNumero}>
            <View style={styles.BotaoContainer}>
                <TouchableOpacity >  
                <View style={styles.botao}>
                <Entypo name={'arrow-up'} size={25} color={'#333853'}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.botao}>
                <Entypo name={'arrow-down'} size={25} color={'#333853'}/>
                       
                </View>
                </TouchableOpacity>
            </View>
            <View style={styles.centralizar}>
            <View style={styles.numeroContainer}>
            <Text style={styles.Numero}>25</Text>
            </View>
                <Text style={styles.texto}>Trabalho</Text>
            </View>
            </View>

            <View style={styles.escolherNumero}>
            <View style={styles.BotaoContainer}>
                <TouchableOpacity >  
                <View style={styles.botao}>
                <Entypo name={'arrow-up'} size={25} color={'#333853'}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.botao}>
                <Entypo name={'arrow-down'} size={25} color={'#333853'}/>
                       
                </View>
                </TouchableOpacity>
            </View>
            <View style={styles.centralizar}>
            <View style={styles.numeroContainer}>
            <input style={{backgroundColor: 'rgba(0,0,0,0)', border: '0px', width: 50, height: 50, fontSize: 45}} type={'Number'} min={1} max={99}></input>
            </View>
                <Text style={styles.texto}>Pausa</Text>
            </View>
            </View>

            <View style={styles.escolherNumero}>
            <View style={styles.BotaoContainer}>
                <TouchableOpacity >  
                <View style={styles.botao}>
                <Entypo name={'arrow-up'} size={25} color={'#333853'}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.botao}>
                <Entypo name={'arrow-down'} size={25} color={'#333853'}/>
                       
                </View>
                </TouchableOpacity>
            </View>
            <View style={styles.centralizar}>
            <View style={styles.numeroContainer}>
            <input style={{backgroundColor: 'rgba(0,0,0,0)', border: '0px', width: 50, height: 50, fontSize: 45}} type={'Number'} min={1} max={99}></input>
            </View>
                <Text style={styles.texto}>Sessões</Text>
            </View>
            </View>
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
        borderRadius: 10
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
  }
})