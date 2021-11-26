import React from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import estiloRock from './estiloRock';

function Rock({ navigaion }){
    
    return(
        <View style={estiloRock.container}>
            
            <Text style={estiloRock.Texto}>Rock</Text>
    
            <Text style={estiloRock.texto}>Rock (ou roque) é um termo abrangente que define um gênero musical de música popular que se desenvolveu durante e após a década de 1950. Suas raízes se encontram no rock and roll e no rockabilly que emergiram e se definiram nos Estados Unidos no final dos anos quarenta e início dos cinquenta e que, por sua vez, evoluíram do blues, da música country e do rhythm and blues. Outras influências musicais sobre o rock ainda incluem o folk, o jazz e a música clássica. Todas estas influências foram combinadas em uma estrutura musical simples baseada no blues que era "rápida, dançável e pegajosa".
            As principais características do Rock são: presença de guitarra, baixo e bateria, músicas dançantes, ritmo contagiante e letras simples. O ritmo de música Rock and Roll pode ser entendido a partir da tradução literal de suas palavras para o português: balançar e rolar.</Text>
            
        </View>
    )
}
export default Rock;