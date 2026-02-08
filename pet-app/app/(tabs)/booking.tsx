import { View, Text, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';

export default function Booking() {
  const { id } = useLocalSearchParams();
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/subscription-status')
      .then(res => res.json())
      .then(data => setSubscribed(data.subscribed));
  }, []);

  const handleBooking = async () => {
    const res = await fetch('http://localhost:3000/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ eventId: Number(id) })
    });

    const data = await res.json();
    alert(`Final Price: ₹${data.finalPrice}`);
  };

  if (!subscribed) {
    return (
      <View style={styles.center}>
        <Text style={styles.warning}>Please subscribe to book events</Text>
      </View>
    );
  }

  return (
    <View style={styles.center}>
      <Text style={styles.title}>Confirm Booking</Text>
      <Button title="Proceed to Payment" onPress={handleBooking} />
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
  },
  warning: {
    fontSize: 16,
    color: 'red'
  }
});
