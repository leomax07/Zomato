import React, { useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
} from 'react-native';

const images = new Array(6).fill(
  'https://images.unsplash.com/photo-1556740749-887f6717d7e4',
);

const App = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const { width: windowWidth } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>


        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ])}
          scrollEventThrottle={1}>
          {images.map((image, imageIndex) => {
            return (
              <View style={{ width: windowWidth, height: 200 }} key={imageIndex}>
                <ImageBackground source={{ uri: image }} style={styles.card}>
                  <View style={styles.textContainer}>
                    <Text style={styles.infoText}>
                      Up to 50% OFF
                    </Text>
                  </View>

                  <View style={styles.topcardContainer}>
                    <View style={styles.cardContainer}>
                      <Text style={styles.cardContainertext}>Ministry Of Drinks - MOD</Text>
                    </View>
                    <View style={styles.blackcardContainer}>
                      <Text style={styles.blackcardContainertext}>Sip bite & indulge</Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, { width }]}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',

    // backgroundColor:'red'
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 4,
    borderRadius: 5,
    position: 'absolute',
    top: 6,
    left: 6
  },
  topcardContainer: {
    position: 'absolute',
    bottom: 6,
    left: 6
  },
  cardContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    borderTopEndRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
paddingVertical:6

  },
  cardContainertext: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000'
  },
  blackcardContainer: {
    backgroundColor: '#000',
    paddingVertical: 4,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    paddingLeft:14,
    width:135
  },
  blackcardContainertext: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff'
  },
  infoText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    // backgroundColor:'red'
    // alignItems: 'center',
    // justifyContent: 'flex-start',
  },
});

export default App;