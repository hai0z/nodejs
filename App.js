import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {View } from 'react-native';
import BasisFlatlist from './components/basisFlatlist'


export default class App extends Component{
  render(){
    return(
      <BasisFlatlist />
    )
  }
}
