import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Container from './Component/Routes'
import Main from './Component/Main/Main';
// import 'semantic-ui-css'
export default class App extends React.Component {
  render() {
    return (
      <Container />
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
