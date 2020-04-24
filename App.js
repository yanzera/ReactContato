import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import LembreteItem from './components/LembreteItem'
import LembreteInput from './components/LembreteInput';
import Cabecalho from './components/Cabecalho';
import TelaPrincal from './medidas/TelaPrincipal'

export default function App() {

  const [lembretes, setLembretes] = useState([]);
  const [contadorLembretes, setContadorLembretes] = useState(10);
  const adicionarLembrete = (lembrete, telefone) => {
    
    setLembretes (lembretes => {
      console.log (lembretes);
      if(contadorLembretes % 2 == 1){
        setContadorLembretes(contadorLembretes+1); 
      }else{
        setContadorLembretes(contadorLembretes+2); 
      }
      return [{key: contadorLembretes.toString(), value: "ID: " + contadorLembretes + "\nNome: " + lembrete + "\nTelefone: " + telefone}, ...lembretes];
    });
    }

  const removerLembrete = (RemoveKey) => {
    setLembretes(lembretes =>{
      return lembretes.filter(lembrete => lembrete.key !== RemoveKey);
    })
  }


  return (

    <View>
      <Cabecalho titulo={'Agenda de Contatos'}/>
      <View padding={TelaPrincal.TelaPrincipalPadding}>
        <LembreteInput onAdicionarLembrete={adicionarLembrete}/>
        <FlatList
        data={lembretes}
        renderItem={
          lembrete => (
            <LembreteItem 
              lembrete={lembrete.item.value}
              chave={lembrete.item.key}
              onDelete={removerLembrete}
            />
          )          
        }
      />
      </View>
    </View>
      
  );
}