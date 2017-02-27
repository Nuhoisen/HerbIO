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

export default class InputBox extends Component {
  constructor(props){
	  super(props);
	  this.state = {text: ''};
  }
  
  render(){
    return (
		<TextInput 
		style={styles.myTextInput}
        onChangeText={(text) => this.setState({text}) }
        value={this.state.text}
		/>
    );
  }
}

const styles = StyleSheet.create({
	
myTextInput: {
	height: 40,
	borderColor: 'green',
	borderWidth: 1,
	backgroundColor: 'white'
	},

	
});

