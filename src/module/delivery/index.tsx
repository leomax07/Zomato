import { Animated, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import DynamicHeader from '../../components/header'
import Explore from './explore';
import FoodCategory from './foodcategory';
import ForYou from './foryou';

const Delivery = () => {
  let scrollOffsetY = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>

      <DynamicHeader animHeaderValue={scrollOffsetY} />
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}
      >
        <ForYou/>
        <Explore />
        <FoodCategory/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Delivery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    backgroundColor: "#fff",
  },
  scrollText: {
    fontSize: 19,
    textAlign: 'center',
    padding: 20,
    color: '#000'
  }
})
