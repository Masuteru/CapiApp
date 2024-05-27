/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import HomeScreen from './src/screens/home';
import CreateTournament from './src/screens/tournament';

import ManageTeam from './src/screens/manageTeam';
import ManageTournament from './src/screens/manageTournament';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="ManageTournament" component={ManageTournament} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateTournament" component={CreateTournament} />
        <Stack.Screen name="ManageTeam" component={ManageTeam} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
