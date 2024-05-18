import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
 
const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);
 
const Lottie = () => {
    const animationProgress = useRef(new Animated.Value(0));
 
    useEffect(() => {
        Animated.timing(animationProgress.current, {
            toValue: 1,
            duration: 5000,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    }, []);
 
    return (
        <View style={styles.lottilayout}>
            <AnimatedLottieView
                source={require('../../../lootie/food.json')}
                progress={animationProgress.current}
                autoPlay
                loop
                style={styles.lotti}
            />
        </View>
    );
}
 
export default Lottie;
 
const styles = StyleSheet.create({
    lottilayout: {
        
    },
    lotti: {
        width: 63,
        height: 46,
    },
});
 