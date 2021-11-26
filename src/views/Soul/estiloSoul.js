import { StyleSheet } from "react-native";

const estiloSoul = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#1C1C1C'
    },
    Texto:{
        fontSize: 25,
        color: '#F0F8FF',
        fontWeight: 'bold',
        textAlign: "center",
        padding: 10,
    },
    texto: {
        fontSize: 20,
        color: '#FFD700',
        fontWeight: 'bold',
        textAlign: "center",
        textAlign: "justify",
        padding: 10
    },
    botaoContainer: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 5,
        height: 40,
        borderWidth: 2,
        borderColor: '#e8f2e9',
        backgroundColor: '#14417b',
        justifyContent: 'center',
        alignItems: 'center,'
    },
    botaoTexto: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
});
export default estiloSoul;