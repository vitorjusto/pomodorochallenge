import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';



function addNumber(number) {
    if (number == 99)
        return 99
    number += 1
    return number
}

function subNumber(number) {
    if (number == 1)
        return 1

    number -= 1
    return number
}

export default function App(props){


    const [estiloInput, setEstiloInput] = useState(props.getQuantidade < 10? styles.Numero:styles.NumeroDoisDigito);
    function formataNumero(texto)
    {
        var valor = 1
        if (texto == "")
        {
            props.setQuantidade(valor)
        }else
        {

            valor = Number(texto.match(/[0-9]/g).join(""))
            if (valor > 100)
            {
                valor = 99
                props.setQuantidade(valor)
            }else if(valor <= 0)
            {
                valor = 1
                props.setQuantidade(valor)
            }
            else
                props.setQuantidade(valor)
        }
        setEstiloInput(valor < 10? styles.Numero:styles.NumeroDoisDigito)
    }

    return(
        <View style={styles.escolherNumero}>
                <View style={styles.BotaoContainer}>
                    <TouchableOpacity onPressIn={() => props.setQuantidade(addNumber(props.getQuantidade))}>
                        <View style={styles.botao}>
                            <Entypo name={'arrow-up'} size={25} color={'#333853'} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.setQuantidade(subNumber(props.getQuantidade))} >
                        <View style={styles.botao}>
                            <Entypo name={'arrow-down'} size={25} color={'#333853'} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.centralizar}>
                    <View style={styles.numeroContainer}>
                        <TextInput style={estiloInput} keyboardType={'number-pad'} onChangeText={formataNumero} value={props.getQuantidade}/>
                    </View>
                    <Text style={styles.texto}>{props.texto}</Text>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    numeroContainer: {
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
        backgroundColor: 'rgb(101, 107, 138)',
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
    Numero:
    {
        color: 'rgb(162, 165, 180)',
        fontSize: "50px",
        width: '55%',
        paddingLeft: '15px'
    },
    NumeroDoisDigito:
    {
        color: 'rgb(162, 165, 180)',
        fontSize: "50px",
        width: '55%',
    }
    
})