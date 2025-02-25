import { Text, View, StyleSheet } from "react-native";
import Quadrado from "./src/Components/Quadrado";

export default function Flex(){
    return(
        <View style = {estilo.container}>

            <View style = {{
                flex:1,
                width:"100%",
                backgroundColor:"#000",
                flexDirection:"column",
                justifyContent:"space-around",
                alignItems:"flex-end"
            }}>

            <Quadrado cor = "#ff801a"/>
            <Quadrado cor = "#36c9a7"/>
            <Quadrado cor = "#dd22c1"/>
            <Quadrado cor = "#8312ed"/>
            <Quadrado cor = "#36c9a7"/>


            </View>
        </View>
        

    )
}

const estilo = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "grey",
        alignItems: "center",
        justifyContent: "center"
    }
})