import React, {
  Component,
} from 'react';
import {
  ART,
  View, 
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

const {
  Group,
  Shape,
  Surface,
  Text,
} = ART;
import D3Processing from '../D3Processing/D3Processing.js';
//import MainUIButton from './MainUIButton.js';
var data= [
      {"number":  10, "name": 0},
      {"number": 40, "name": 1},
      {"number": 10, "name": 2},
      {"number": 40, "name": 3},
      {"number": 10, "name": 4},
      {"number":  40, "name": 5},
      {"number":  10, "name": 6},
      {"number":  40, "name": 7},
      {"number":  10, "name": 8},
      {"number":  40, "name": 9},
      {"number":  10, "name": 10},
      {"number":  40, "name": 11}
  ]

export default class MainUI extends Component {
  constructor(props){
    super(props);
}

 

  render() { 	
    return (
        <View style={styles.container}>
          <D3Processing pieHeight={400} pieWidth={300} data={data} height={200} width={500} />
        </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})


