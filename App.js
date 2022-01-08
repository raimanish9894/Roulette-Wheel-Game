import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Roulette from 'react-native-casino-roulette'; 
import wheel from './Image/wheel.png';
import marker from './Image/marker.png';

//Roulette numbers
const numbers = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26]
const options  = numbers.map((o)=>({index:o}))  
const customOptions = numbers.map((o)=> (
  <Text index={o}>{o}</Text>
));
export default class App extends Component {
  constructor(props){
    super(props);
    this.onRotate = this.onRotate.bind(this);
    this.onRotateChange = this.onRotateChange.bind(this);
    this.onRotateCustom = this.onRotateCustom.bind(this);
    this.onRotateCustomChange = this.onRotateCustomChange.bind(this);
    this.state={
      option:"Option selected:",
      optionCustom:"Option selected:",
      rouletteState:'stop',
      rouletteCustomState:'stop'
    }
  }
  render() {
    const{option, rouletteState, optionCustom, rouletteCustomState} = this.state
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTxt}>Roulette Game</Text>
        </View>
        <Text style={styles.game}>Touch the Wheel to Start!!</Text>
        <Roulette 
                  enableUserRotate={rouletteState=='stop'} 
                  background={wheel}
                  onRotate={this.onRotate}
                  onRotateChange={this.onRotateChange}
                  marker={marker}
                  options={options}
                  markerWidth={20}
                  style={styles.rotar} >          
        </Roulette>

        
        <Text style={styles.txt}>
          {`Roulette state: ${rouletteState}`}
        </Text>

        {/* <Text>
          {`You Got: ${option}`}
        </Text> */}

        {/* <Text>
          {`Option selected: ${optionCustom}`}
        </Text>
        <Text>
          {`Roulette state: ${rouletteCustomState}`}
        </Text>
        <Roulette 
                  enableUserRotate={rouletteCustomState=='stop'} 
                  background={null}
                  onRotate={this.onRotateCustom}
                  onRotateChange={this.onRotateCustomChange}
                  marker={marker}
                  options={customOptions}
                  rotateEachElement={(index)=> ((index * 360 /options.length * -1 ) -90)}
                  markerWidth={20} >          
        </Roulette> */}
      </View>
    );
  }

  onRotateChange(state) {
    this.setState({
      rouletteState: state
    })
  }

  onRotate(option) {
    
    this.setState({
      option:option.index
    })
  }

  onRotateCustomChange(state) {
    this.setState({
      rouletteCustomState: state
    })
  }

  onRotateCustom(option) {
    
    this.setState({
      optionCustom:option.props.index
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  txt:{
    marginTop:10,
    fontSize:18,
    fontWeight:'700',

  },
  header:{
    bottom:140,
    backgroundColor:'red',
    width:440,
    height:90,
    
  },
  headerTxt:{
    position:'absolute',
    left:140,
    top:40,
    fontSize:24,
    fontWeight:'700',
    color:'white',

  },
  game:{
    fontSize:16,
    fontWeight:'400',
    lineHeight:24
  },
});