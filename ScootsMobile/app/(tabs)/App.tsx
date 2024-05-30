import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
// import AboutPage from './AboutPage';
// import JoinRoom from './JoinRoom';
// import CreateRoom from './CreateRoom';
// import LoginScreen from './LoginScreen';
// import HomePage from './HomePage';
// import ProfilePage from './ProfilePage';
// import UserSets from './UserSets';
// import GameRunning from './GameRunning';
import { StyleSheet, View } from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (login, data) => {
    setLoggedIn(login);
    setUser(data);
  };

  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="HomePage">
    //     <Stack.Screen name="HomePage" options={{ headerShown: false }}>
    //       {(props) => <HomePage {...props} loggedIn={loggedIn} />}
    //     </Stack.Screen>
    //     <Stack.Screen name="AboutPage" component={AboutPage} />
    //     <Stack.Screen name="JoinRoom">
    //       {(props) => <JoinRoom {...props} loggedIn={loggedIn} />}
    //     </Stack.Screen>
    //     <Stack.Screen name="CreateRoom" component={CreateRoom} />
    //     <Stack.Screen name="LoginScreen">
    //       {(props) => <LoginScreen {...props} handleLogin={handleLogin} />}
    //     </Stack.Screen>
    //     <Stack.Screen name="ProfilePage" component={ProfilePage} />
    //     <Stack.Screen name="UserSets" component={UserSets} />
    //     <Stack.Screen name="GameRunning" component={GameRunning} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <h1>Test</h1>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
