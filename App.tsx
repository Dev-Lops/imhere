import { StyleSheet, Text, View } from "react-native";

export default function App(){
  return(
    <View style={styles.container}>
        <Text style={styles.title}>Nome do evento</Text>
        <Text style={styles.date}>Segunda, 29 de julho de 2024.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  date: {
    color: '#6b6b6b',
    fontSize: 16,
  },
})
