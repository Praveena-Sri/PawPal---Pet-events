import { View, Text, Button, StyleSheet } from 'react-native';

export default function Subscription() {
  const subscribeUser = async () => {
    await fetch('http://localhost:3000/subscribe', { method: 'POST' });
    alert("Subscription activated!");
  };

  return (
    <View style={styles.center}>
      <Text style={styles.title}>Unlock all bookings</Text>
      <Button title="Buy Subscription" onPress={subscribeUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginBottom: 20
  }
});
