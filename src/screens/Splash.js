import {View, Text, ImageBackground} from 'react-native';
import React from 'react';

export default function Splash() {
  return (
    <ImageBackground
      source={require('../assets/Welcome.png')}
      style={{flex: 1}}></ImageBackground>
  );
}
