import React, { Component } from "react";
import {
  Platform,
  Text,
  View,
  TextInput,
  Dimensions,
  StyleSheet
} from "react-native";

import SendButton from "../buttons/SendButton.js";
//This import is to have the same method response for buttom
//submission as well as pressing "enter" submission


/***************
DestinationField is used in App.js
It accepts a handler for state from App.js
and default text to show in the text field.
It updates and calls the handler function each time
an edit is made.
***************/

var width = Dimensions.get("window").width;

class DestinationField extends React.Component {

constructor(props) {
  super(props)

NewSendButton = new SendButton();

}

  submitEditing=()=> {
    NewSendButton.sendAlert(text = this.props.text);
  }

  render() {
    return (
      <TextInput
        style={styles.container}
        value={this.props.text}
        onChangeText={text => this.props.handler(text)}
        onSubmitEditing={this.submitEditing}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 40,
    width: width - 5,
    borderColor: "gray",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default DestinationField;
