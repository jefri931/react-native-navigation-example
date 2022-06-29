import * as React from 'react';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// --- Main screens ---
const SignUpScreen = () => {
  const nav = useNavigation();
  return (
    <Button title="Sign Up" onPress={() => nav.navigate("Main")} />
  )
}

const SignInScreen = () => {
  const nav = useNavigation();
  return (
    <Button title="Sign Up" onPress={() => nav.navigate("Sign Up")} />
  )
}

const HomeScreen = () => {
  const nav = useNavigation();
  return (
    <Button title="Do Something" onPress={() => nav.navigate("Sign Up")} />
  )
}

const FeedScreen = () => {
  const nav = useNavigation();
  return (
    <Button title="Do Something" onPress={() => nav.navigate("Sign Up")} />
  )
}

const CatalogScreen = () => {
  const nav = useNavigation();
  return (
    <Button title="Do Something" onPress={() => nav.navigate("Sign Up")} />
  )
}


const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Catalog" component={CatalogScreen} />
    </Tab.Navigator>
  )
}

// --- Onboarding screens ---
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sign In" component={SignInScreen} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  )
}

// --- App ---

const App = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
