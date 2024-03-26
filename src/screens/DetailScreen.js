import {
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useState} from 'react';
import TextHandler from '../components/TextHandler';
import Header from '../components/Header';
import {imageIndex} from '../util/util';
import {colors} from '../util/color';
import {styles} from './details.styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import SwipeImage from './SwipeableImage';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

export default function DetailScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const opacity = new Animated.Value(1);
  const swipeValue = 10;

  const handleGestureEvent = event => {
    console.log(event.nativeEvent.state, event.nativeEvent.translationX);
  };

  const onHandlerStateChange = event => {
    if (event.nativeEvent.state === State.END) {
      if (event.nativeEvent.translationX > swipeValue) {
        // Swipe right, show previous image
        if (currentIndex > 0) {
          fadeOutAndChangeImage(currentIndex - 1);
        }
      } else if (event.nativeEvent.translationX < -swipeValue) {
        // Swipe left, show next image
        if (currentIndex < imageIndex.length - 1) {
          fadeOutAndChangeImage(currentIndex + 1);
        }
      }
    }
  };

  const fadeOutAndChangeImage = index => {
    console.log('in', index);
    Animated.timing(opacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setCurrentIndex(index);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <ScrollView
      scrollEnabled
      contentContainerStyle={{
        backgroundColor: colors.bg,
        flex: 1,
      }}>
      <View style={{flex: 1}}>
        <Header />
        <View style={{flex: 1}} key={'top'}>
          <View style={{flex: 1.5, alignItems: 'center'}}>
            {currentIndex != null && (
              <PanGestureHandler
                onGestureEvent={handleGestureEvent}
                onHandlerStateChange={onHandlerStateChange}>
                <Animated.View style={{flex: 1, opacity}}>
                  <Image
                    source={imageIndex[currentIndex].img}
                    style={styles.topImg}
                    resizeMode="contain"
                  />
                </Animated.View>
              </PanGestureHandler>
            )}
          </View>
          {/* b */}
          <View style={styles.containerB}>
            <FlatList
              indicatorStyle="white"
              style={{}}
              contentContainerStyle={{gap: 20}}
              horizontal
              scrollEnabled
              data={imageIndex}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity onPress={() => fadeOutAndChangeImage(index)}>
                    <Image
                      source={item.img}
                      style={[
                        styles.subImgs,
                        {
                          borderWidth: currentIndex == index ? 1 : 0,
                          borderColor: currentIndex == index && 'white',
                        },
                      ]}
                    />
                  </TouchableOpacity>
                );
              }}
            />
            <View style={styles.jcac}>
              <FlatList
                indicatorStyle="white"
                style={{marginVertical: 0}}
                contentContainerStyle={styles.flatList}
                horizontal
                scrollEnabled
                data={imageIndex}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => fadeOutAndChangeImage(index)}
                      style={[
                        styles.flatListImgs,
                        {
                          backgroundColor:
                            currentIndex == index ? 'white' : 'transparent',
                        },
                      ]}></TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
          {/* c */}
          <View style={[styles.flex1, styles.ph16]}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 0.65}}>
                <TextHandler style={styles.title}>
                  Mercedes SL 63 AMG
                </TextHandler>
              </View>
              <View style={{flex: 0.35}}>
                <View style={styles.price}>
                  <TextHandler style={{color: 'white'}}>
                    2500 AED/day
                  </TextHandler>
                </View>
              </View>
            </View>

            <TextHandler style={styles.content}>
              The Mercedes SL 63 AMG is a sports car created using advanced
              technologies that have made it incredibly fast and powerful.
            </TextHandler>
          </View>
          <View style={styles.separator} />
        </View>
        <View style={styles.bottomContainer} key={'bottom'}>
          <View>
            <TextHandler style={styles.subTitle}>Specifications</TextHandler>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 20,
              }}>
              <View style={styles.bottomImage}>
                <Image
                  source={require('../assets/horsepower.png')}
                  resizeMode="contain"
                />
              </View>
              <View>
                <TextHandler type={'Light'} style={styles.bottomSubTitle}>
                  Horsepower
                </TextHandler>
                <TextHandler type={'Bold'} style={styles.bottomTextBold}>
                  585
                </TextHandler>
              </View>
            </View>
            <View style={styles.imageContainer}>
              <View style={styles.bottomImage}>
                <Image
                  source={require('../assets/shaft.png')}
                  resizeMode="contain"
                />
              </View>

              <View>
                <TextHandler type={'Light'} style={styles.bottomSubTitle}>
                  Transmission
                </TextHandler>
                <TextHandler type={'Bold'} style={styles.bottomTextBold}>
                  Automatic
                </TextHandler>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <TextHandler style={styles.buttonTitle}>Book Now</TextHandler>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
