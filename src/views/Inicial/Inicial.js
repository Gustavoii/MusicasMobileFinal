import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloInicial from './estiloInicial';

function Inicial({ navigation }){

    const abrirColecao = () => {
        navigation.navigate('Colecao')
    }
    const abrirItem = () => {
        navigation.navigate('Item')
    }
    return (
        <View style={estiloInicial.container}>

                <Text style={estiloInicial.Texto}>Olá </Text>
                <Text style={estiloInicial.texto}>A ideia é mostrar um pouco de conhecimento de musical, como generos e suas vertentes e caracteristicas. 
               <br></br> Podemos começar com o que é a música? </Text>
               <Text style={estiloInicial.texto}>Definir a música não é tarefa fácil porque apesar de ser intuitivamente conhecida por qualquer pessoa, é difícil encontrar um conceito que abarque todos os significados dessa prática. 
               Mais do que qualquer outra manifestação humana, a música contém e manipula o som e o organiza no tempo. Talvez por essa razão ela esteja sempre fugindo a qualquer definição, pois ao buscá-la, a música já se modificou, já evoluiu. E esse jogo do tempo é simultaneamente físico e emocional. 
               Como "arte do efêmero", a música não pode ser completamente conhecida e por isso é tão difícil enquadrá-la em um conceito simples.</Text>

               
        </View>
    )
}
export default Inicial;