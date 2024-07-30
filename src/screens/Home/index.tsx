import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export default function Home(){
  return(
    <View style={styles.container}>
        <Text style={styles.eventName}>Nome do evento</Text>
        <Text style={styles.eventDate}>Segunda, 29 de julho de 2024.</Text>
        
        <TextInput style={
          styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          />
    </View>
  )
}