import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import Cartao from './Cartao';

const LembreteItem = (props) => {

    const confirmaDelete = () => {

        Alert.alert(
            'Excluir!',
            'Tem deseja que quer excluir o usuario ' + props.nome,
            [
                {
                    text: 'OK',
                    style: 'default',
                    onPress: deletaUsuario
                },
                {
                    text: 'CANCEL',
                    style: 'default',
                    
                }
            ]
        );
    }

    const deletaUsuario = () => {
        console.log("props.chave " + props.chave)
        props.onDelete.bind(this, props.chave)()
    }

    const editarTelaUsuario = () => {
        props.onSelecionaEditarTelaUsuario();
    }

    const[nome, setNome] = useState();
    const[telefone,setTelefone] = useState();

    return (
        <Cartao>
            <TouchableOpacity 
            onLongPress={
                    confirmaDelete
            }
            onPress={() => {
                    // props.onSelecionaUsuarioId(props.chave);
                    // props.onSelecionaUsuarioNome(props.nome);
                    // props.onSelecionaUsuarioTelefone(props.telefone);
                    // editarTelaUsuario();
                    //console.log("Propriedades dentro do onpress" + props.chave + props.nome + props.telefone)
                    console.log("Propriedades dentro do onpress" + props)
                    props.onSelect();
                } 
            }
            >
                <View style={styles.itemNaLista}>
                    {/* <Text>ID: {props.id}</Text> */}
                    <Text>Nome: {props.nome}</Text>
                    <Text>Telefone: {props.telefone}</Text>
                </View>
            </TouchableOpacity>        
        </Cartao>
    );
}

const styles = StyleSheet.create({
    itemNaLista: {
        borderRadius: 8,
        marginBottom: 8,
        marginTop: 5,
        color: 'green',
    }
});

export default LembreteItem;