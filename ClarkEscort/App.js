/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


/*******************************************************
Begin Imports
*******************************************************/
import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  AppRegistry,
  TextInput
} from "react-native";

import SendButton from "./src/buttons/SendButton.js";
import DestinationField from "./src/textfields/DestinationField.js";

/*******************************************************
End Imports
*******************************************************/

/*******************************************************
Begin variable definitions
*******************************************************/
var width = Dimensions.get('window').width;

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { text: "Your text here" };
  }

  /*******************************************************
  End variable definitions
  *******************************************************/

//Functions
  destinationFieldHandler(text) {
    this.setState({ text });
  }

//Main render method
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello World!</Text>

        <DestinationField
          text={this.state.text}
          handler={this.destinationFieldHandler.bind(this)}
        />

        <SendButton text={this.state.text} />
      </View>
    );
  }
}


//Stylesheet

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
    // marginLeft: -width/2,
  },
  welcome: {
    fontSize: 25,
    textAlign: 'left',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
