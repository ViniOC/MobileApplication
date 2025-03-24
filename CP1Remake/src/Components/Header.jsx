import { Text, View, StyleSheet, Image } from "react-native";

export default function Header() {
    return(
        <View style={styles.container}>
            <Image style = {styles.image} source={require('../Image/header.png')}/>
            <Text>CP1</Text>
            <Text>Header</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#e01d5e",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        width: "100%",
        marginTop: 30,

    },
    image: {
        width: 40,
        height: 40,
    },
});