import {
  Animated,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import DynamicHeader from '../../components/header';
import {DATA} from '../delivery/data';

const Live = () => {
  let scrollOffsetY = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={styles.containerLive}>
      <DynamicHeader animHeaderValue={scrollOffsetY} />
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
          {useNativeDriver: false},
        )}>
        {DATA.map((book, index) => {
          return (
            <Text style={styles.scrollText} key={book.id}>
              {book.title}
            </Text>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Live;

const styles = StyleSheet.create({
  containerLive: {
    flex: 1,
    backgroundColor: 'red',
    margin: 0,
  },
  scrollText: {
    textAlign: 'center',
    padding: 20,
  },
});
