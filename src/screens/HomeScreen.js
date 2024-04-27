import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function HomeScreen() {
  return (
    <View style={{flex: 1}}>
      <Text>HomeScreen</Text>
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
        <Text>Click</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({});
