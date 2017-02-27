import React from 'react';
import {
  ART,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

const {
  Surface,
  Group,
  Rectangle,
  Shape,
} = ART;


import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import * as d3Array from 'd3-array';
const d3 ={
	shape,
	scale,
	d3Array,
}



const margin = 60;
export default class D3Processing extends React.Component{

	constructor(props){
		super(props);
		var {height, width} =  Dimensions.get('window');
		
		this.state ={
			yMultiplier: height/this.props.data.length,
			xMultiplier: width/this.props.data.length,
			height: height,
			width: width,
		};
	}

	render(){
	var that = this;
	var {height, width} =  Dimensions.get('window');
	console.log(height);
	const xStart = 25;
	const yStart = 600;
	const xMargin = 50;
	const yMargin = 300;
var MAX = 0;
	var xScale = d3.scale.scaleLinear()
		.domain([d3.d3Array.min(this.props.data, function(d){
			return d.name}),  d3.d3Array.max(this.props.data, function(d){
				return d.name})])
		.range([xMargin, width-xMargin]);
	
	var yScale = d3.scale.scaleLinear()
		.domain([0, MAX= d3.d3Array.max(this.props.data, function(d){
				return d.number})])
		.range([0, height-yMargin]);

	var lines = d3.shape.line()
			.x(function(d){return xScale(d.name);})
			.y(function(d){return -yScale(d.number);});

	var data = lines(this.props.data);


	var yTicks= yScale.ticks(5);

	  	return(
  			<View>
	  			<Surface width={width}  height={yMargin}>
			  		<Group x={xStart} y={350}>
						<Shape d={data} strokeWidth={3} stroke="#000"/> 
	      			</Group>
				</Surface>

				<View key={'xAxes'}>
					{
						this.props.data.map((current, index)=>{
							const tickStyles = {};
							tickStyles.width = 50;
							tickStyles.left = xScale(current.name);

						return (
								<Text key={"this"+index.toString()} style={[axesStyles.tickLabelX, tickStyles]}>
									{current.name}
								</Text>
								);
					})}
				</View>
				<View key={'yAxes'}>
				{
					yTicks.map((current, index)=>{
						const tickStyles = {};
						tickStyles.top = -yScale(current);
						tickStyles.left = 0;
						return(
							<Text key={"thisOne"+index.toString()} style={[axesStyles.xLabelY, tickStyles]}>
								{current}
							</Text>
							);
					})
				}
				</View>
			</View>
	  	)
  	}
}

const axesStyles = StyleSheet.create({
	

	graphOutline: {
		backgroundColor: 'green',
		maxHeight: 1000,
	},

	tickLabelX: {
		position: 'absolute',
		bottom: 0,
		fontSize: 12,
		textAlign: 'center',
	},
	tickLabelY: {
		position: 'absolute',
		left: 0,
	}
});