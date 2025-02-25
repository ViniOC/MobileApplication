import { FlatList, View, Text } from "react-native";
import Alunos from "./Alunos";


export default function ListarAlunos(){
 return(
    <View>
        <FlatList
        data = {Alunos}
        renderItem={({item})=>{
            return(
                <Text>Nome: {item.nomeAluno} N de faltas: {item.nFaltas} </Text>
            )
        }}
        />
    </View>
 )
}