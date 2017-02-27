/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';
//external libararies
import Menu, {MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';

//my libraries
import LoginPage from './src/LoginPage/LoginPage.js';
import MainUI from './src/MainUI/MainUI.js';
import D3Processing from './src/D3Processing/D3Processing.js';
import OptionMenu from './src/MainUI/OptionMenu.js';
import SettingsPage from './src/SettingsPage/SettingsPage.js';

const routes = [
    {title: 'First Scene', index: 0},
    {title: 'Second Scene', index: 1},
  ];



export default class HerbApp extends Component{
  
  constructor(props){
      super(props);
      this.closeMenu = this.closeMenu.bind(this);
      this.nextPage = this.nextPage.bind(this);
      this.state = {
        chosenRoute : 0        
      };
     }


  closeMenu(){
    console.log("Sample");
  }

  

  nextPage(route, navigator){
    var that = this;
    var nextPageName = "";
    if(route.index === 0){
        nextPageName = "Settings";
    }
    else{
      nextPageName = "Home"
    }

    return(
      <View style={{ padding: 10, flexDirection: 'row', backgroundColor: 'pink' }}>
          <View style={{ flex: 1 }}>
            <Text>HerbIO</Text>
          </View>
          <Menu onSelect={() => {
            if (route.index === 0) {
              navigator.push(routes[1]);
            } else {
              navigator.pop();
            }
            if(this.state.chosenRoute===1){
            that.setState({chosenRoute: 0});
            }
            else{
              that.setState({chosenRoute: 1});
            }  
           }}>
            <MenuTrigger>
              <Text style={{ fontSize: 20 }}>&#8942;</Text>
            </MenuTrigger>
            <MenuOptions>
              <MenuOption value={nextPageName}>
                <Text>Settings</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
       </View>
      );
  }

  render() {
    
    let CurrentPage = null;
    if(this.state.chosenRoute===0){
      CurrentPage = <MainUI />;
    }
    else{
      CurrentPage = <SettingsPage />;
    }
    return (
        <MenuContext style={{ flex: 1 }}>
          <Navigator
            initialRoute={routes[0]}
            initialRouteStack={routes}
            renderScene={this.nextPage}/>
          {CurrentPage}
        </MenuContext>
    );
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#634462',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HerbApp', () => HerbApp);
