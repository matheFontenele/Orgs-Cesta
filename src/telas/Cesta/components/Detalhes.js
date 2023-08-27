import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import Texto from "../../../components/Texto";

export default function Detals({nome, imgLogo, farmName, descri, preco, botao}){
    return(
        <>
            <Texto style={estilos.nome}>{nome}</Texto>
            <View style={estilos.fazenda}>
                <Image style={estilos.imgFarm} source={imgLogo}/>
                <Texto style={estilos.farm}>{farmName}</Texto>
            </View>
            <Texto style={estilos.descricao}>{descri}</Texto>
            <Texto style={estilos.preco}>{preco}</Texto>
            
            <TouchableOpacity style={estilos.btn} onPress={() => {}}>
                <Texto style={estilos.textoBtn}>{botao}</Texto>
            </TouchableOpacity>
        </>
    )
}

const estilos = StyleSheet.create({
    
    fazenda: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        gap: 12
    },
    imgFarm: {
        height: 32,
        width: 32,
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    farm: {
        fontSize: 16,
        lineHeight: 16,
    },
    descricao: {
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    btn: {
        marginTop: 16,
        backgroundColor: "#2a9f85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBtn: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
})