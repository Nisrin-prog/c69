import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import TransactionScreen from "../screens/Transaction";
import SearchScreen from "../screens/Search";
import * as Font from "expo-font"
import {Rajdhani_600SemiBold} from "@expo-google-fonts/rajdhani"

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  constructor(){
    super()
    this.state = {
      fontLoaded:false
    }
  }
  async loadFonts(){
    await Font.loadAsync({
      Rajdhani:Rajdhani_600SemiBold
    })
    this.setState({fontLoaded:true})
  }
  componentDidMount(){
    this.loadFonts()
  }
  render() {
    return (
      <NavigationContainer>
         <Tab.Navigator
      initialRouteName="Transaction"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Transaction"
        component={TransactionScreen}
       
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
       
      />
      
    </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
