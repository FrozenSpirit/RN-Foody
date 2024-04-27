import 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/router/stack_nav/StackNavigator';
import HomeScreen from './src/screens/HomeScreen';
import BottomNavigator from './src/router/bottom_nav/BottomNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        {/* <StackNavigator /> */}
        <BottomNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
