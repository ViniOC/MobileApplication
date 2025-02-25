import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import ListarAlunos from './src/Components/ListarAlunos';

export default function App() {
  function clicado(){
    console.log("clicado");
  }

  const [numero, setNumero] = useState(3)
  const [nome, setNome]= useState("")

  return (
    <View>
    <Text>Aula mobile</Text>
    <Text>Aula 05</Text>
    <Text>{numero}</Text>
    <Button title='Mais' onPress={()=>setNumero(numero+1)}/>
    <Button title='Menos' onPress={()=>setNumero(numero-1)}/>
    <ListarAlunos/>

    <TextInput
    placeholder='Digite seu Nome'
    value={nome}
    onChangeText={(value)=> setNome(value)}
    />
    <Text>{nome}</Text>


    {/* <Button title='clique 2' onPress={function(){console.log("clicado 2");}}/>
    <Button title='clique 3' onPress={()=> console.log("Clicado 3")}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
