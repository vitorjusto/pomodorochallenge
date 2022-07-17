import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Swal from 'sweetalert2';
import { Audio } from 'expo-av';

function gerarZeroAEsquerda(numero) 
{
  if (numero < 10)
    return '0' + numero;

  return numero;
}

let isPaused = false;
let isOnBreak = false;
let minutes = 0;
let currentSection = 1
let seconds = 0
let breakMinutes = 0
let sections = 0
let workMinutes = 0

export default function App({ route })
 {

  const [pauseIcon, setPauseIcon] = useState('pause')
  const [number, setNumber] = useState(`${gerarZeroAEsquerda(route.params.trabalhoNumber)} : ${gerarZeroAEsquerda(seconds)}`);
  const [styleCronometer, setStyle] = useState(isOnBreak ? '#F2C94C' : '#219653');
  const [styleText, setStyleText] = useState(isOnBreak ? styles.textoAmarelo : styles.textoVerde);
  const [text, setText] = useState('Trabalho');
  const [sectionText, setSectionText] = useState('Sessão: ' + currentSection);
  const [borda, setBorda] = useState('0');

  function pausar() {
    isPaused = !isPaused

    setPauseIcon(isPaused ? 'play' : 'pause')
  }

  function calculaBorda() {
    var totalDeSegundos = (isOnBreak ? breakMinutes : workMinutes) * 60;
    var segundosRestantes = (isOnBreak ? 0 : totalDeSegundos) - ((minutes * 60) + seconds)

    var resultado = (691 * segundosRestantes) / totalDeSegundos

    return resultado
  }

  const [sound, setSound] = React.useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
       require('../assets/sounds/alarm.wav')
    );
    setSound(sound);
      
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  function pular() {
    if (isOnBreak)
    {
      minutes = workMinutes;
      setText('Trabalho');
      currentSection += 1;
      setSectionText('Sessão: ' + currentSection);
    }
    else 
    {
      if (currentSection == sections) 
      {
        Swal.fire({
          icon: 'success',
          title: 'Parabens!!!',
          text: 'Seu pomodoro terminou. Agora você pode descansar!',
          background: '#3C4262',
          color: 'rgb(162, 165, 180)',
          confirmButtonColor: 'rgb(101, 107, 138)',

        })
        route.params.navigation.goBack()
      }
      minutes = breakMinutes;
      setText('Pausa');
    }

    isOnBreak = !isOnBreak;
    setStyle(isOnBreak ? '#F2C94C' : '#219653')
    setStyleText(isOnBreak ? styles.textoAmarelo : styles.textoVerde)
    seconds = 0;
    
    setBorda(calculaBorda())
    setNumber(`${gerarZeroAEsquerda(minutes)} : ${gerarZeroAEsquerda(seconds)}`)
  }

  useEffect(() => {
    isPaused = false//deixa aqui pq funciona
    isOnBreak = false//deixa aqui tambem pq talvez funciona
    setStyle(isOnBreak ? '#F2C94C' : '#219653')
    setStyleText(isOnBreak ? styles.textoAmarelo : styles.textoVerde)
    workMinutes = route.params.trabalhoNumber;
    minutes = workMinutes;
    currentSection = 1;
    seconds = 0;
    setNumber(`${gerarZeroAEsquerda(minutes)} : ${gerarZeroAEsquerda(seconds)}`)
    breakMinutes = route.params.breakNumber;
    sections = route.params.sectionNumber;
    setSectionText('Sessão: ' + currentSection);
    const interval = setInterval(() => {
      if (isPaused)
        return;

      if (seconds == 0) 
      {
        if (minutes == 0) 
        {
          playSound() 

          pular()
          seconds = 1;
        } else 
        {
          minutes -= 1;
          seconds = 60;
        }
      }

      seconds -= 1;
      setBorda(calculaBorda())
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
        <svg width="290" height="290">
          <defs>
            <filter id="filtro" x="-1" y="-1" width="300%" height="300%">
              <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
              <feColorMatrix result="matrixOut" in="offOut" type="matrix" values="1 0" />
              <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="5" />
              <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
            </filter>
          </defs>
          <path d="M 145, -145
                   m -110, 0
                   a 75,75 0 1,0 220,0
                   a 75,75 0 1,0 -220,0"
                stroke={styleCronometer} style={{ transform: "rotate(90deg)" }} strokeDashoffset={borda} strokeDasharray="691, 691" strokeWidth="10" strokeLinecap="round" fill='rgba(0,0,0,0)' filter="url(#filtro)" />
          
          <text style={{userSelect: 'none'}} fill="#ffffff" fontSize="45" fontFamily="Verdana" color="rgb(162, 165, 180)" x="65" y="165">{number}</text>

        </svg>
      </View>
      <View style={styles.alinhaBotoes}>
        <TouchableOpacity onPress={pausar}>
          <View style={styles.botao}>
            <View style={styles.bordaBotao}>
              <Ionicons name={pauseIcon} size={50} color={'white'} style={{ marginLeft: 3 }} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={pular}>
          <View style={styles.botao}>
            <View style={styles.bordaBotao}>
              <Ionicons name={'play-skip-forward'} size={50} color={'white'} style={{ marginLeft: 3 }} />
            </View>
          </View>
        </TouchableOpacity>
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
  containerTexto: {
    alignItems: 'center',
    height: 100,
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  cronometroContainer: {
    backgroundColor: '#3C4262',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 300,
    borderRadius: 300,
    boxShadow: "1px 1px 7px #3c4262ee"
  },

  textoAmarelo:
  {
    color: '#F2C94C',
    fontSize: "60px",
    fontFamily: "Verdana"
  },
  textoVerde:
  {
    color: '#219653',
    fontSize: "60px",
    fontFamily: "Verdana"
  },

  conometro:
  {
    color: 'rgb(162, 165, 180)',
    fontSize: "60px"
  },
  textoSessao:
  {
    color: 'rgb(162, 165, 180)',
    fontSize: "20px",
    fontFamily: "Verdana"
  },
  botao:
  {
    height: 100,
    width: 100,
    backgroundColor: '#3C4262',
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: "3px 3px 5px rgba(0,0,0, 0.5)"
  },
  bordaBotao:
  {
    width: 80,
    height: 80,
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: "1px 1px 7px rgba(255,255,255, 0.3)"
  },
  alinhaBotoes:
  {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '75%'
  },

});