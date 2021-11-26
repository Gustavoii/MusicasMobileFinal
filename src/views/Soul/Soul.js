import React from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import estiloSoul from './estiloSoul';

function Soul({ navigaion }){
    
    return(
        <View style={estiloSoul.container}>
            
            <Text style={estiloSoul.Texto}>Soul</Text>
    
            <Text style={estiloSoul.texto}>Soul music ou apenas soul é um gênero musical popular que se originou na comunidade afro-americana dos Estados Unidos nos anos 1950 e no início dos anos 1960. Combina elementos da música afro-americana, rhythm and blues e jazz. A soul music tornou-se popular para dançar e ouvir nos Estados Unidos, onde gravadoras como Motown, Atlantic e Stax foram influentes durante o Movimento dos Direitos Civis. A soul music também se tornou popular em todo o mundo, influenciando diretamente o rock e a música da África.
            A apresentação da música soul é emotiva; a melodia é bem ornamental misteriosa ornamentada e com improvisações, rodopios corporais do(a) cantor(a) e efeitos sonoros dos instrumentos. Os ritmos pegam facilmente, acentuados com o bater de palmas e os movimentos plásticos da coreografia são detalhes importantes.</Text>            
        </View>
    )
}
export default Soul;