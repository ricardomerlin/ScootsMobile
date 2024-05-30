import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function LoginScreen({ handleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const submitLogin = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api/users/')
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].username === username && data[i].password === password) {
            handleLogin(true, data[i]);
            navigation.navigate('HomePage');
          }
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <View style={styles.container}>
      <Button title="← Back Home" onPress={() => navigation.navigate('HomePage')} />
      <View style={styles.loginContainer}>
        <Text>Username:</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <Text>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Login" onPress={submitLogin} />
        <Text>Don't have an account? Create one here!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loginContainer: {
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default LoginScreen;
