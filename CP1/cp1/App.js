import { useState } from 'react';
import { StyleSheet, TextInput, View, Image, Button } from 'react-native';


export default function App() {

  const [numero, setNumero] = useState("")
  const [porcentagem, setPorcentagem] = useState("")
  const [result, setResult] =useState (null)

  
  const mudaNumero = (text)=> {
    const limpaTexto = text.replace(/[^0-9]/g,'');
    setNumero(limpaTexto)
  }
  const mudaNumero1 = (text)=> {
    const limpaTexto = text.replace(/[^0-9]/g,'');
    setPorcentagem(limpaTexto)
  }
  const porcent = porcentagem/100;
  const resultado = numero * porcent

  return (
  
    
    <View style={styles.container}>
      <Image 
        style = {styles.imagem}
       source = {require('./assets/fiaplogo.png')}
      />
      
      <TextInput style={styles.input}  
      placeholder='Insira o nome do produto'
      
      />
      <TextInput style = {styles.input}
      keyboardType='numeric'
      placeholder='Insira o valor original do produto'
      onChangeText={mudaNumero}
      value={numero}

      />
      <TextInput style={styles.input}
      keyboardType='numeric'
      placeholder='% de aumento do produto'
      onChangeText={mudaNumero1}
      value={porcentagem}
      />
      <Button
      title='calcular' onPress={resultado}
      />
      onPress={result!== nul && (<Text>Resultado: {result}</Text>)}
      
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
  imagem: {
    padding:10,
    backgroundColor: "#D1195D",

  },

  input: {
   
    backgroundColor: "#11D2E3",
    width: 300,
   justifyContent:"space-between",
    borderWidth:1,
    borderColor: "black",
    padding: 10

  },
});
