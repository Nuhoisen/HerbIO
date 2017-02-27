import React from 'react';

import {
	View,
	Text,
} from 'react-native';

import Menu, {MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';

export default class OptionMenu extends React.Component{
	render(){
		return(
		 	<View style={{ padding: 10, flexDirection: 'row', backgroundColor: 'pink' }}>
			    <View style={{ flex: 1 }}>
			    	<Text>HerbIO</Text>
		    	</View>
			    <Menu onSelect={(value) => alert(`User selected the number ${value}`)}>
			      <MenuTrigger>
			        <Text style={{ fontSize: 20 }}>&#8942;</Text>
			      </MenuTrigger>
			      <MenuOptions>
			        <MenuOption value={"HerbIO"}>
			          <Text>Settings</Text>
			        </MenuOption>
			      </MenuOptions>
			    </Menu>
			    
			    
			    
		  	</View>
			);
	}
}
