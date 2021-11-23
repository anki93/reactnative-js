import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '@components/Home';
import DemoScreen from '@components/Demo';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function Home2() {
  return <Text>Text</Text>
}

function FreeIChingDrawer() {
  return (
    <Drawer.Navigator screenOptions={{ drawerPosition: 'right' }} initialRouteName="Home">
      <Drawer.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
      <Drawer.Screen name="Reading" component={DemoScreen} />
      <Stack.Screen options={{ headerShown: true }} name="Home2" component={Home2} />
    </Drawer.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <FreeIChingDrawer />
      {/* <Stack.Navigator>
        <Stack.Screen
          name="FreeIChingDrawer"
          component={FreeIChingDrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen options={{ headerShown: true }} name="Home" component={HomeScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
