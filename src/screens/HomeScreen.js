import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {store} from '../redux/store/store';
import {decrement, increment} from '../redux/actions/counterAction';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

export default function HomeScreen(props) {
  const Count = useSelector(store => store.counter.count);
  function increase() {
    store.dispatch(increment());
  }
  function decrease() {
    store.dispatch(decrement());
  }
  return (
    <View style={{flex: 1}}>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
        <Text>Click</Text>
      </TouchableOpacity>
      <Text>{Count}</Text>
      <TouchableOpacity onPress={() => increase()}>
        <Text>increment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => decrease()}>
        <Text>increment</Text>
      </TouchableOpacity>

      <AntDesignIcon name="codesquare" size={30} color="orange" />
    </View>
  );
}

const styles = StyleSheet.create({});
