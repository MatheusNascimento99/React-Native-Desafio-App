import React, { useState } from "react";
import { View, Text, Image, Pressable, TextInput } from "react-native";
import logo from "../../../assets/local.png";
import { styles } from "./HomeStyle";

export function Home() {
  const [formView, setFormView] = useState(false);
  const [nome, setNome] = useState('');
  const [tel, setTel] = useState('');
  const [local, setLocal] = useState('');
  const [obs, setObs] = useState('');
  

function sendData(){
  console.log('Função para enviar os dados:',nome, tel, local, obs)
}





  return (
    <View style={styles.contentFullHome}>

      {formView ? (
        <View style={styles.containerTwo}>
          <View style={styles.divLogForm}>
            <Image style={styles.logoForm} source={logo} />
          </View>
          <View style={styles.divInput}>
            <Text>Nome:</Text>
            <TextInput onChangeText={(newText) => setNome(newText) } inputMode="text" style={styles.input1} />
          </View>
          <View style={styles.divInput}>
            <Text>Telefone:</Text>
            <TextInput onChangeText={(newText) => setTel(newText) } inputMode="numeric" style={styles.input1} />
          </View>
          <View style={styles.divInput}>
            <Text>Localização atual:</Text>
            <TextInput onChangeText={(newText) => setLocal(newText) } inputMode="text" style={styles.input2} />
          </View>
          <View style={styles.divInput}>
            <Text>Descrição do Ocorrido:</Text>
            <TextInput onChangeText={(newText) => setObs(newText) } inputMode="text" style={styles.input2} />
          </View>
          <View>
          <Pressable onPress={sendData}> 
            <Text  
            style={styles.pressText}
            >
              ENVIAR
            </Text>
          </Pressable>
          </View>
        </View>
      ) : (
        <View style={styles.containerOne}>
          <Image style={styles.logo} source={logo} />
          <Pressable onPress={() => setFormView(true)}>
            <Text style={styles.pressText}>
              Botão de Pânico
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}
