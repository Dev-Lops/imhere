import {  ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home(){
  const participants = ['Anderson', 'Esther', 'Luise', 'Luzia', 'Marcelo', 'Matheus', 'Ednelza', 'Vier', 'Mar', '']
  
  function handleParticipantAdd() {
    console.log("Você clicou no botão de adicionar!")
  }
  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover o participante ${name}`)
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
        <ScrollView>
        {
          participants.map((participant, i) => (
            <Participant
              key={i}
              name={participant}
              onRemove={() => handleParticipantRemove(participant)}/>
            ))
        }
        </ScrollView>
        
    </View>
  )
}