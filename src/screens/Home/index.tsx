import {  Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export default function Home(){
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')
  
  function handleParticipantAdd() {
    if(participants.includes(participantName)){
      return Alert.alert('Participante já existente', 'Já existe um participante na lista com esse nome!' )
    }
    setParticipants(prevState =>[...prevState, participantName])
    setParticipantName('')
  }
  function handleParticipantRemove(name: string) {
    
    
    Alert.alert('Remover participante', `Deseja remover ${name} da lista?`, [
      {text: 'Cancelar', style: 'cancel'},
      {text: 'Sim', onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))}
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
              onChangeText={setParticipantName}
              value={participantName}
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