import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloPerfil from './estiloPerfil';

function Perfil() {

    return (
        <View style={estiloPerfil.Container}>

            <Text style={estiloPerfil.texto}>Perfil</Text>
            <Text style={estiloPerfil.texto}>Olá. Sejá bem vindo! </Text>

            
        </View>
    )
}
export default Perfil;