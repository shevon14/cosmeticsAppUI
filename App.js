import React from "react";
import { View } from "react-native";
import Router from './src/router/router';

export default function App() {
  return(
    <View style={{
      flex: 1,
    }}>
      <Router />
    </View>
    
  )
}