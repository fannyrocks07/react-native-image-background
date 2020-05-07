/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const image = { uri: "https://reactjs.org/logo-og.png" };

import img from './assets/bg.png'


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      indicadores:{},
      activa: '',
    }

  componentDidMount = () => {
    let user;
    user = 'programacion3@tcvsat.com';
    fetch('http://www.tcvsat.com.mx/appservice/app_indicadores.php?user=' + user)
      .then((response) => response.json())
      .then((json) => {
        
          this.setState({
            indicadores: json,
            
          });
          console.log('indicadores '+ this.state.indicadores);
          console.log('activas  '+ this.state.indicadores.localizacion[0].TOTAL_UNIDADES);
        }
      })
      .catch((error) => console.log('error', error));
  };

render() {
  return (
    <View style={styles.container}>
      <Acordeon/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default App;
