import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🐾 PawPal</Text>
      <Text style={styles.subtitle}>Discover & book pet experiences</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.push('/events')}
      >
        <Text style={styles.buttonText}>Browse Events</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.buttonOutline} 
        onPress={() => router.push('/subscription')}
      >
        <Text style={styles.outlineText}>Get Subscription</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  buttonOutline: {
    borderWidth: 2,
    borderColor: '#4CAF50',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center'
  },
  outlineText: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: '600'
  }
});
