import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';



function addNumber(number) {
    
    if (number === "")
    {
        return 2
    }

    number = `${number}`
    number = Number(number.match(/[0-9]/g).join(""))
    
    if (number == 99)
        return 99
    number += 1
    return number
}

function subNumber(number) {
    
    if (number === "")
    {
        return 1
    }

    number = `${number}`
    number = Number(number.match(/[0-9]/g).join(""))
    if (number == 1)
        return 1

    number -= 1
    return number
}



export default function App(props){

    const [estiloInput, setEstiloInput] = useState(props.getQuantidade < 10? styles.Numero:styles.NumeroDoisDigito);


    function validarTexto(texto)
    {
        if(props.getQuantidade == "")
            props.setQuantidade(1)
    }

    function formataNumero(texto)
    {
        var valor = 1
        if (texto == "")
        {
            props.setQuantidade("")
        }else
        {

            valor = Number(texto.match(/[0-9]/g).join(""))
            if (valor > 100)
            {
                valor = 99
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
                    <TouchableOpacity onPressIn={() => {props.setQuantidade(addNumber(props.getQuantidade));
                                                        setEstiloInput(props.getQuantidade < 9? styles.Numero:styles.NumeroDoisDigito)}}>
                        <View style={styles.botao}>
                            <Entypo name={'arrow-up'} size={25} color={'#333853'} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {props.setQuantidade(subNumber(props.getQuantidade));
                                                     setEstiloInput(props.getQuantidade < 11? styles.Numero:styles.NumeroDoisDigito)}} >
                        <View style={styles.botao}>
                            <Entypo name={'arrow-down'} size={25} color={'#333853'} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.centralizar}>
                    <View style={styles.numeroContainer}>
                        <TextInput style={estiloInput} keyboardType={'number-pad'} onBlur={validarTexto} onChangeText={formataNumero} value={props.getQuantidade}/>
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
        width: '65%',
        paddingLeft: '17px',
        borderColor: 'white',
        borderWidth: '2px',
        borderRadius: 10,
        boxShadow: "1px 1px 7px rgba(255,255,255, 0.3)"
    },
    NumeroDoisDigito:
    {
        color: 'rgb(162, 165, 180)',
        fontSize: "50px",
        width: '65%',
        paddingLeft: '2px',
        borderColor: 'white',
        borderWidth: '2px',
        borderRadius: 10,
        boxShadow: "1px 1px 7px rgba(255,255,255, 0.3)"
    }
    
})