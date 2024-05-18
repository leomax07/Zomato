import { Animated, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

interface DynamicHeaderProps {
    animHeaderValue: Animated.Value;
}

const Header_Max_Height = 160;
const Header_Min_Height = 70;

const HeaderImage: React.FC<DynamicHeaderProps> = ({ animHeaderValue }) => {

    const [timeOfDayImage, setTimeOfDayImage] = useState<string>('');

    const animateHeaderHeight = animHeaderValue.interpolate({
        inputRange: [0, Header_Max_Height - Header_Min_Height],
        outputRange: [160, 0],
        extrapolate: 'clamp'
    });

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

    return (
        <Animated.View style={[styles.headerImage, { height: animateHeaderHeight }]}>
            <ImageBackground source={{ uri: timeOfDayImage }}
                style={styles.image} >
                <Text style={styles.imagetitle}>GET FLAT ₹125 OFF</Text>
                <Text style={styles.imagetitlesub}>On delicious goodness!</Text>
                <TouchableOpacity style={styles.button}><Text style={styles.buttontext}>ORDER NOW</Text></TouchableOpacity>
            </ImageBackground>
        </Animated.View>
    )
}

export default HeaderImage

const styles = StyleSheet.create({
    headerImage: {
        height: "100%",
        width: "90%",
        overflow: "hidden",
        borderRadius: 15,
        marginTop: 10
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagetitle: {
        color: "#fff",
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 24,
        fontFamily: 'PoetsenOne-Regular',
    },
    imagetitlesub: {
        color: "#fff",
        fontWeight: '100',
        fontStyle: 'normal',
        fontSize: 12,
        fontFamily: 'PoetsenOne-Regular',
    },
    button: {
        marginVertical: "5%",
        backgroundColor:"#fff",
        paddingVertical:4,
        paddingHorizontal:"2%",
        borderRadius:10
    },
    buttontext:{
        color:"#000",
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: 12,
        fontFamily: 'PoetsenOne-Regular',
    }
})