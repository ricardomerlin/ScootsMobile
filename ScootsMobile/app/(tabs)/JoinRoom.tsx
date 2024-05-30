import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function JoinRoom({ loggedIn }) {
  const [roomID, setRoomID] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button title="← Back Home" onPress={() => navigation.navigate('HomePage')} />
      <Text>Join Room</Text>
      <Text>Enter the ID of the room you are trying to join, or {loggedIn ? 'create a new room.' : 'log in to create a new room.'}</Text>
      <TextInput
        style={styles.input}
        value={roomID}
        onChangeText={setRoomID}
      />
      <Button title="Join Room" onPress={() => { /* Add join room logic here */ }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default JoinRoom;
