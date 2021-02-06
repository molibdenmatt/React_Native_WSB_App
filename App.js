import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'; 
import StopwatchContainer from "./stopwatch.container";
import MyClock from "./watch.container";

import {
  Alert, 
  Dimensions, 
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  Button,
} from 'react-native';
export default function App() {
  console.log("Mateusz Swieton is the Author!");
  console.log(useDimensions());
  const { landscape } = useDeviceOrientation();
  const handlePress  = () => console.log("Text Pressed");

  return (
    <SafeAreaView style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: landscape ? 'black' : "white",}}>
      <View style={{
        backgroundColor: landscape ? 'black' : "white",
        // width: landscape ? "100%" : "30%",
        // height: landscape ? "100%" : "30%",
      }}>
      
      </View>
      <MyClock />
      <StopwatchContainer />
      <Text onPress={handlePress} style={{
        paddingTop: 30,
        color: landscape ? 'white' : "black",
        }}>WSB React Native APP 62655</Text>
      <Image source ={require('./assets/favicon.png')}></Image> 
      <TouchableOpacity onPress={() => console.log("Image Tapped")}>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    justifyContent: 'center',
  },

});
