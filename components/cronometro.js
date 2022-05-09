import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

function gerarZeroAEsquerda(numero)
{
  if(numero < 10)
    return '0' + numero;
  
  return numero;
}

let isPaused = false;

export default function App() {

  let workMinutes = 1
  const [pauseIcon, setPauseIcon] = useState('pause')
  let minutes = workMinutes
  let seconds = 0 
  let currentSection = 1
  let breakMinutes = 2
  let sections = 2
  let isOnBreak = false;
  const [number, setNumber] = useState(`${gerarZeroAEsquerda(minutes)} : ${gerarZeroAEsquerda(seconds)}`);
  const [styleCronometer, setStyle] = useState(isOnBreak?styles.BordaAmarelo:styles.BordaVerde);
  const [styleText, setStyleText] = useState(isOnBreak?styles.textoAmarelo:styles.textoVerde);
  const [text, setText] = useState('Trabalho');
  const [sectionText, setSectionText] = useState('Sessão: ' + currentSection)

function pausar()
{
  isPaused = !isPaused
  setPauseIcon(isPaused?'play':'pause')
}


  useEffect(() => {
    const interval = setInterval(() => {
      if(isPaused)
        return;
      
      if(seconds == 0)
      {
        if(minutes == 0)
        {
          if(isOnBreak)
          {
            minutes = workMinutes;
            setText('Trabalho');
            currentSection += 1;
            setSectionText('Sessão: ' + currentSection);
          }
          else
          {
            if(currentSection == sections)
            {
              alert('acabou o trabalho')
              clearInterval(interval)
            }
            minutes = breakMinutes;
            setText('Pausa');
          }
          
          isOnBreak = !isOnBreak;
          seconds = 1
          setStyle(isOnBreak?styles.BordaAmarelo:styles.BordaVerde)
          setStyleText(isOnBreak?styles.textoAmarelo:styles.textoVerde)
        }else
        {
          minutes -= 1;
          seconds = 60;
        }
      }

      seconds -= 1;
      setNumber(`${gerarZeroAEsquerda(minutes)} : ${gerarZeroAEsquerda(seconds)}`)
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerTexto}>
        <Text style={styles.textoSessao}>{sectionText}</Text>
        <Text style={styleText}>{text}</Text>
      </View>

        <View style={styles.cronometroContainer}>
            <View style={styleCronometer}>
              <Text style={styles.conometro}>{number}</Text>
            </View>
        </View>
      
      <TouchableOpacity onPress={pausar}>
        <View style={styles.botao}>
          <View style={{width: 80, height: 80, borderColor: 'white', borderWidth: 3, borderRadius: 20,display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',}}>
            <Ionicons name={pauseIcon} size={50} color={'white'} style={{marginLeft: 3}}/>
          </View>
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
  containerTexto:{
    alignItems: 'center',
    height: 100,
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  cronometroContainer :{
    backgroundColor: '#3C4262',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 300,
    borderRadius: 300,
  },
  BordaVerde:
  {
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 270,
    height: 270,
    borderRadius: 270,
    borderColor: '#219653',
    borderWidth: 5
  },
  BordaAmarelo:
  {
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 270,
    height: 270,
    borderRadius: 270,
    borderColor: '#F2C94C',
    borderWidth: 5
  },

  textoAmarelo:
  {
    color: '#F2C94C',
    fontSize : "60px"
  },
  textoVerde:
  {
    color: '#219653',
    fontSize : "60px"
  },

  conometro:
  {
    color: 'rgb(162, 165, 180)',
    fontSize: "60px"
  },
  textoSessao:
  {
    color: 'rgb(162, 165, 180)',
    fontSize: "20px"
  },
  botao:
  {
    height: 100,
    width: 100,
    backgroundColor:'#3C4262',
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});