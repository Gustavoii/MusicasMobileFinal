import React from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import estiloGospel from './estiloGospel';

function Gospel({ navigaion }){
    
    return(
        <View style={estiloGospel.container}>
            
            <Text style={estiloGospel.Texto}>Gospel</Text>
    
            <Text style={estiloGospel.texto}>Música gospel é um tipo de música composto para expressar a crença, individual ou comunitária, predominantemente cristã. A música gospel é escrita e executada por muitos motivos com motivo religioso ou até cerimonial, ou como um produto de entretenimento para o mercado comercial.
            O que é Gospel: O estilo gospel se caracteriza por uma harmonia simples, pelo gênero folclórico e pela intensa influência do blues. Em inglês, a palavra gospel também é usada para fazer referência aos quatro primeiros livros do Novo Testamento da Bíblia (Mateus, Marcos, Lucas e João).</Text>        
        </View>
    )
}
export default Gospel;