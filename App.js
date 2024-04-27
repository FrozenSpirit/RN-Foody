import 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import DrawerNavigator from './src/router/drawer_nav/DrawerNavigator';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <DrawerNavigator />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
