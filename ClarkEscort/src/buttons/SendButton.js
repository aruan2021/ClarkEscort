import React, { Component } from "react";
import { Platform, Text, View, Button } from "react-native";

/***************
SendButton is used in App.js
It accepts a text prop from the text field, and then displays
an alert with the contents of that text.
***************/



 class SendButton extends React.Component {

sendAlert(text){
  alert('Your text is: ' + text);
} //Destination Field depends on this function

   onPressHandler = () => {
     this.sendAlert(this.props.text);

 };

  render() {
    return (
      <Button //Code change for first button 2 of 2
        onPress={this.onPressHandler}
        title="Send!"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    );
  }
}

export default SendButton;
