import React, {useState} from 'react';
import {View, Image, Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

const SwipeImage = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const opacity = new Animated.Value(1);

  const handleGestureEvent = event => {
    if (event.nativeEvent.state === State.END) {
      if (event.nativeEvent.translationX > 50) {
        // Swipe right, show previous image
        if (currentIndex > 0) {
          fadeOutAndChangeImage(currentIndex - 1);
        }
      } else if (event.nativeEvent.translationX < -50) {
        // Swipe left, show next image
        if (currentIndex < images.length - 1) {
          fadeOutAndChangeImage(currentIndex + 1);
        }
      }
    }
  };

  const fadeOutAndChangeImage = index => {
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
    <PanGestureHandler onGestureEvent={handleGestureEvent}>
      <Animated.View style={{flex: 1, opacity}}>
        <Image
          source={images[currentIndex].img}
          style={{flex: 1, resizeMode: 'contain'}}
        />
      </Animated.View>
    </PanGestureHandler>
  );
};

export default SwipeImage;
