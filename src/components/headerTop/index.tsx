import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

interface DynamicHeaderProps {
    animHeaderValue: Animated.Value;
}

const Header_Max_Height = 60;
const Header_Min_Height = 60;

const HeaderTop: React.FC<DynamicHeaderProps> = ({ animHeaderValue }) => {

    const navigation = useNavigation();

    const animateHeaderHeight = animHeaderValue.interpolate({
        inputRange: [0, Header_Max_Height - Header_Min_Height],
        outputRange: [60, 0],
        extrapolate: 'clamp'
    });

    const handleClick = () => {
        navigation.navigate('ProfileScreen');
    }

    return (
        <Animated.View style={[styles.headertop, { height: animateHeaderHeight }]}>
            <View style={styles.location}>
                <Image source={{ uri: "https://i.ibb.co/M5znsb5/location.png" }}
                    style={styles.image} />
            </View>
            <View style={styles.text}>
                <View style={styles.textsection}>
                    <Text style={styles.area}>Raja Annamalai Puram</Text>
                    <Text style={styles.distric}>Chennai</Text>
                </View>
                <View style={styles.dropdwonicon}>
                    <Image source={{ uri: "https://i.ibb.co/r7h2VCg/down-arrow.png" }}
                        style={styles.dropdwimage} />
                </View>
            </View>
            <View style={styles.icons}>
                <View style={styles.languageicons}>
                    <Image source={{ uri: "https://i.ibb.co/q7D7nD3/language.png" }}
                        style={styles.languageimage} /></View>

                <TouchableOpacity onPress={handleClick} style={{width:"35%"}}>
                    <View style={styles.burgericons}>
                        <Image source={{ uri: "https://i.ibb.co/NZ8jMhW/menu-bar.png" }}
                            style={styles.burgerimage} />
                    </View>
                </TouchableOpacity>
            </View>
        </Animated.View>
    )
}

export default HeaderTop

const styles = StyleSheet.create({
    headertop: {
        height: "20%",
        // backgroundColor: "#fff",
        width: "100%",
        flexDirection: "row"
    },
    location: {
        width: "15%",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        width: "55%",
        height: "100%",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    textsection: {},
    area: {
        color: "#000",
        fontWeight: '800',
        fontStyle: 'normal',
        fontSize: 18
    },
    distric: {
        color: "#4b5563",
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 12
    },
    image: {
        width: '40%',
        height: '40%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdwonicon: {
        width: "10%",
        justifyContent: "center",
        alignItems: "center",
    },
    dropdwimage: {
        width: '60%',
        height: '30%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: "50%"
    },
    icons: {
        width: "30%",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row"
    },
    languageicons: {
        width: "30%",
        height: "50%",
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#F4F4F4",
        borderRadius: 6,
        shadowColor: '#11111A',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 16
    },
    languageimage: {
        width: '50%',
        height: '55%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    burgericons: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    burgerimage: {
        width: '65%',
        height: '50%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    }
})