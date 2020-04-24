// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';




// const LembreteItem = (props) => {
//     return (
//         <TouchableOpacity onLongPress={props.onDelete.bind(this, props.chave)}>
//             <View style={styles.itemNaLista}>
//                 <Text>{props.lembrete}</Text>
//             </View>
//         </TouchableOpacity>       
//     );
// }

// const styles = StyleSheet.create({
//     itemNaLista: {
//         padding: 12,
//         backgroundColor: '#CCC',
//         borderColor: "black",
//         borderWidth: 1,
//         marginBottom: 8,
//         borderRadius: 8
//     }
// });

// export default LembreteItem;


import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import Cartao from './Cartao';
import Cores from '../cores/cores'
import SombrasLembrete from '../sombras/SombrasLembreteItem'
import MedidasLembrete from '../medidas/MedidasLembreteItem'

const LembreteItem = (props) => {
    
    const handleClick = () => {
        Alert.alert('Clique longo para excluir o contato')
    }

    return (
        <Cartao>
            <TouchableOpacity 
            onLongPress={props.onDelete.bind(this, props.chave)}
            onPress={handleClick}
            >
                <View 
                    style={styles.itemNaLista}  
                    backgroundColor={Cores.accent}
                    marginBottom={MedidasLembrete.marginBottom}
                >
                    <Text>{props.lembrete}</Text>
                </View>
            </TouchableOpacity>        
        </Cartao>
    );
}

const styles = StyleSheet.create({
    itemNaLista: {
        borderRadius: 8
    }
});

export default LembreteItem;