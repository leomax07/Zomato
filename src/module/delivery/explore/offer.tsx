import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const Offers = () => {
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
                source={require('../../../assets/lottie/offer.json')}
                progress={animationProgress.current}
                autoPlay
                loop
                style={styles.lotti}
            />
        </View>
    );
}

export default Offers;

const styles = StyleSheet.create({
    lottilayout:{
        width:"100%",
        alignItems:"center",
        paddingVertical:"10%",
    },
    lotti: {
        width: 63,
        height: 46,
    },
});
