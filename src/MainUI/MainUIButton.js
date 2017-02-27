import React from 'react';
import {
	View,
  Button,
  StyleSheet,
  Text
} from 'react-native';

export default class MainUIButton extends React.Component {
  constructor(props){
    super(props);
    this.buttonHit= this.buttonHit.bind(this);
  }

  function buttonHit(){
    console.log("Hit")
  }
  render() { 	
    const viewStyles ={};
    viewStyles.left = this.props.leftOffset;
    viewStyles.top = this.props.topOffset;

    return (
    	<View style={[buttonStyles.buttonStyle, viewStyles]}>
        	<Button title={this.props.titleText} 
        		onPress={this.buttonHit}/>
      </View>
      
    );
  }
}

const buttonStyles = StyleSheet.create({
	buttonStyle:{
		position: 'absolute',
	}
})