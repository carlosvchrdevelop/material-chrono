import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Chrono from './components/Chrono';
import { dimension } from './components/Chrono.styles';
import { Feather } from '@expo/vector-icons'; 

const _storeData = async (key: string, val: string) => {
  try {
    await AsyncStorage.setItem(key, val);
  } catch (error){
    // Error saving data
  }
};

const _retrieveData = async (key: string) => {
  try {
    return AsyncStorage.getItem(key);
  } catch (error){
    // Error retrieving data
    return null;
  }
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const myStyles = styles(darkMode);

  const darkModeBtnIcon = darkMode
    ? <Feather name="moon" size={dimension/14} style={myStyles.darkModeBtnText} />
    : <Feather name="sun" size={dimension/14} style={myStyles.darkModeBtnText} />;

  useEffect(() => {
    _retrieveData('darkModeKey').then((value) => {
      if(value !== null){
        setDarkMode(JSON.parse(value));
      }
    });
  }, []);

  useEffect(() => {
    _storeData('darkModeKey', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <View style={myStyles.container}>
      <Chrono darkMode={darkMode}/>
      <TouchableHighlight
          onPress={() => setDarkMode((prev) => !prev)}
          style={myStyles.darkModeBtn}
          underlayColor={darkMode ? '#232323' : '#ededed'}
      >
          {darkModeBtnIcon}
      </TouchableHighlight>
      <StatusBar style={darkMode ? 'light' : 'dark'} />
    </View>
  );
};

const styles = (darkMode: boolean) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkMode ? '#121212' : '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkModeBtn: {
    position: 'absolute',
    top: Constants.statusBarHeight + 8,
    left: 8,
    backgroundColor: darkMode ? '#272727' : '#ffffff',
    elevation: 4,
    borderRadius: dimension
  },
  darkModeBtnText: {
    color: darkMode ? '#dedede' : '#424242',
    padding: dimension / 50
  }
});
