/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {View, StyleSheet} from 'react-native';
 import { useFonts, Nunito } from '@expo-google-fonts/nunito';

 import Navigation from './Start/Navigation';
 
 const App: () => React$Node = () => {
   return (
     <Navigation /> 
   );
 };
 
 const styles = StyleSheet.create({
   
 });
 
 export default App;