/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import InputBox from './components/InputBox.js';

export default class LoginPage extends Component {
  
  render(){
    return (
      <View style={styles.container}>

          <Text> Enter User Credentials: </Text>
		    <InputBox/>
          <Text> Enter Password: </Text>
        <InputBox/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {

    backgroundColor: '#634462',
    flex: 1
  }
})


