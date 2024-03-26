import React from 'react';
import PagerView from 'react-native-pager-view';
import Splash from './Splash';
import DetailScreen from './DetailScreen';

export default function WelcomeScreen({navigation}) {
  return (
    <PagerView style={{flex: 1}} initialPage={0} orientation={'vertical'}>
      <Splash />
      <DetailScreen />
    </PagerView>
  );
}
