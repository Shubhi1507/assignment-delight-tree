import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
      }}>
      <TouchableOpacity
        style={{
          height: 44,
          width: 44,
          borderRadius: 22,
          borderWidth: 0.7,
          borderColor: '#FAF9F6',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/back.png')}
          style={{
            tintColor: 'white',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 44,
          width: 44,
          borderRadius: 22,
          borderWidth: 0.7,
          borderColor: '#FAF9F6',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/info.png')}
          style={{
            tintColor: 'white',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
