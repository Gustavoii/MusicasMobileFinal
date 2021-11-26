import { StyleSheet } from "react-native";

const estiloInicial = StyleSheet.create({
    container:{
        flex: 1,
        textAlign: 'center',
        backgroundColor: '#1C1C1C',
    },
    Texto: {
        fontSize: 25,
        textAlign: "center",
        color: '#F0F8FF',
        fontWeight: 'bold',
        padding: 10,
    },
    texto: {
        fontSize: 20,
        color: '#FFD700',
        fontWeight: 'bold',
        textAlign: "center",
        textAlign: 'justify',
        padding: 10
    },
    botaoContainer: {
        margin: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 5,
        height: 40,
        borderRadius: 5,
        height: 40,
        borderWidth: 2,
        borderColor: '# 1c',
        backgroundColor: '#14417b',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoTexto: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
});
export default estiloInicial;