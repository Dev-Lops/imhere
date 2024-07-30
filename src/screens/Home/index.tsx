import {  Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home(){
  const participants = ['Anderson', 'Esther', 'Luise', 'Luzia', 'Marcelo', 'Matheus', 'Ednelza', 'Vier', 'Mar', 'Testando']
  
  function handleParticipantAdd() {
    if(participants.includes("Anderson")){
      return Alert.alert('Participante já existente', 'Já existe um participante na lista com esse nome!' )
    }
  }
  function handleParticipantRemove(name: string) {
    Alert.alert('Remover participante', `Deseja remover ${name} da lista?`, [
      {text: 'Cancelar', style: 'cancel'},
      {text: 'Sim', onPress: () => Alert.alert('Deletado!')},
    ])
  }
  
  return(
    <View style={styles.container}>
        <Text style={styles.eventName}>Nome do evento</Text>
        <Text style={styles.eventDate}>Segunda, 29 de julho de 2024.</Text>
        
        <View style={styles.form}>
          <TextInput style={
              styles.input}
              placeholder="Nome do participante"
              placeholderTextColor="#6b6b6b"
              />
              
              <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>
                  +
                </Text>
              </TouchableOpacity>
        </View>
        <FlatList
          data={participants}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <Participant
              key={item}
              name={item}
              onRemove={() => handleParticipantRemove(item)}/>
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() =>(
            <Text style={styles.emptyListText}>Nenhum participante cadastrado.</Text>
          )}
        />
        
    </View>
  )
}