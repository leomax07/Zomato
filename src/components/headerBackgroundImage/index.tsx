import { Animated, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode, useEffect, useState } from 'react'

const Header_Max_Height = 300;
const Header_Min_Height = 70;

interface DynamicHeaderProps {
    animHeaderValue: Animated.Value;
    children: ReactNode;
}

const HeaderBackgroundImage: React.FC<DynamicHeaderProps> = ({ animHeaderValue, children }) => {

    const [timeOfDayImage, setTimeOfDayImage] = useState<string>('');


    useEffect(() => {
        const currentDate = new Date();
        const currentHour = currentDate.getHours();
        let backgroundImage = '';

        if (currentHour >= 6 && currentHour < 12) {
            backgroundImage = "https://i.ibb.co/vJdCgvF/delicious-indian-dosa-composition.jpg";
        } else if (currentHour >= 12 && currentHour < 18) {
            backgroundImage = "https://i.ibb.co/Lg4bRwv/delicious-food-table.jpg";
        } else if (currentHour >= 18 && currentHour < 24) {
            backgroundImage = "https://i.ibb.co/FJXLg6B/view-delicious-burger-with-french-fries.jpg";
        } else {
            backgroundImage = "https://i.ibb.co/8xHMxYq/photorealistic-lohri-festival-celebration-with-traditional-food.jpg";
        }
        setTimeOfDayImage(backgroundImage);
    }, []);

    const backgroundImageOpacity = animHeaderValue.interpolate({
        inputRange: [0, Header_Max_Height - Header_Min_Height],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    });

    return (
        <Animated.View style={{ ...StyleSheet.absoluteFillObject, opacity: backgroundImageOpacity }}>
            <ImageBackground
                source={{ uri: timeOfDayImage }}
                style={styles.backgroundImage}
            >
                {children}
            </ImageBackground>
        </Animated.View>
    )
}

export default HeaderBackgroundImage

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        // justifyContent: 'center',
        alignItems: 'center',
    },

})