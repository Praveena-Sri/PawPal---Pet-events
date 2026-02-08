import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { router } from 'expo-router';

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/events')
      .then(res => res.json())
      .then(data => {
        setEvents(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <View style={styles.container}>
      {events.map(event => (
        <View key={event.id} style={styles.card}>
          <Text style={styles.title}>{event.name}</Text>
          <Text style={styles.price}>₹{event.price}</Text>

          {event.discount > 0 && (
            <Text style={styles.discount}>
              {event.discount * 100}% OFF
            </Text>
          )}

          <Button
            title="Book Now"
            onPress={() => router.push(`/booking?id=${event.id}`)}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  price: {
    fontSize: 16,
    marginVertical: 5
  },
  discount: {
    color: 'green',
    marginBottom: 10
  }
});
