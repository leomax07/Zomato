import { Animated, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import DynamicHeader from '../../components/header'
import { DATA } from './data';

const Delivery = () => {

    let scrollOffsetY = useRef(new Animated.Value(0)).current;

    return (
        <SafeAreaView style={styles.container}>
            <DynamicHeader animHeaderValue={scrollOffsetY} />
            <ScrollView 
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY}}}],
          {useNativeDriver: false}
        )}
      >         
            {DATA.map((book, index) => {
              return (                
                  <Text style={styles.scrollText} key={book.id}>{book.title}</Text>                
              )
            })}         
      </ScrollView>
        </SafeAreaView>
    )
}

export default Delivery

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0
    },
    scrollText: {            
        fontSize: 19,
        textAlign: 'center',
        padding: 20,
        color: '#000'
      }
})