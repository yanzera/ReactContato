import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import MedidasLembreteInput from '../medidas/MedidasLembreteInput'
import SombrasLembreteInput from '../sombras/SombrasLembreteInput'

const LembreteInput = (props) =>{
    const [nome, setNome] = useState ('');

    const [telefone, setTelefone] = useState ('');

    const capturarNome = (nome) => {
        setNome(nome);    
    }

    const capturarTelefone = (telefone) => {
      setTelefone(telefone);    
  }

  return (
    <View
        flexDirection={MedidasLembreteInput.LembreteInputFlexDirectionView}
        justifyContent={MedidasLembreteInput.LembreteInputJustifyContentView}
        alignItems={MedidasLembreteInput.LembreteInputAlignItemsView}
        marginBottom={MedidasLembreteInput.LembreteInputMarginBottomView}
    >
    <TextInput 
      placeholder="Nome..."
      padding={MedidasLembreteInput.LembreteInputPadding}
      marginBottom={MedidasLembreteInput.UsuairoInputMarginBttm}
      borderBottomColor={SombrasLembreteInput.LembreteInputColor}
      onChangeText={capturarNome}
      value={nome}
    />
    <TextInput 
      placeholder="Telefone..."
      
      padding={MedidasLembreteInput.LembreteInputPadding}
      marginBottom={MedidasLembreteInput.UsuairoInputMarginBttm}
      borderBottomColor={SombrasLembreteInput.LembreteInputColor}
      onChangeText={capturarTelefone}
      value={telefone}
    />
    <Button 
      title="+"
      onPress={() => {props.onAdicionarLembrete(nome, telefone)}}
    />
    </View>
    );
}


export default LembreteInput;