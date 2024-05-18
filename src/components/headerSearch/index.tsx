import { Animated, Image, ImageBase, StyleSheet, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

interface DynamicHeaderProps {
    animHeaderValue: Animated.Value;
}

const Header_Max_Height = 70;
const Header_Min_Height = 70;

const HeaderSearch: React.FC<DynamicHeaderProps> = ({ animHeaderValue }) => {
    const [text, setText] = useState("");
    const [show, setshow] = useState(false)
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    let interval: NodeJS.Timeout | null = null; 


    const animateHeaderHeight = animHeaderValue.interpolate({
        inputRange: [0, Header_Max_Height - Header_Min_Height],
        outputRange: [70, 70],
        extrapolate: 'clamp'
    });

    const searchTextTranslateY = animHeaderValue.interpolate({
        inputRange: [Header_Max_Height - Header_Min_Height, Header_Max_Height],
        outputRange: [0, 20], 
        extrapolate: 'clamp'
    });

    const searchTextOpacity = animHeaderValue.interpolate({
        inputRange: [Header_Max_Height - Header_Min_Height, Header_Max_Height],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    });

    const searchTextBounce = animHeaderValue.interpolate({
        inputRange: [Header_Max_Height - Header_Min_Height, Header_Max_Height, Header_Min_Height + 20],
        outputRange: [0, -10, 0],
        extrapolate: 'clamp'
    });

    const placeholders = ["Search Chicken", "Search shake", "Search briyani"];

    useEffect(() => {
        if (text === "") {
            interval = setInterval(() => {
                setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
            }, 2000);
        }

        return () => {
            if (interval) clearInterval(interval); 
        };
    }, [text]);

    return (
        <Animated.View style={[styles.header, { height: animateHeaderHeight }]}>
            <View style={styles.searchContainer}>
                <Image source={{ uri: "https://i.ibb.co/YkRgR30/loupe.png" }}
                    style={styles.image} />
                <TextInput
                    style={styles.input}
                    value={text}
                    onChange={(event) => setText(event.nativeEvent.text)}
                    onFocus={() => {
                        setPlaceholderIndex(0);
                        if (interval) clearInterval(interval); 
                        setshow(true)
                    }}
                    onBlur={() => {
                        setshow(false); 
                    }}
                />
                <Animated.Text
                    style={[
                        styles.placeholder,
                        {
                            transform: [
                                { translateY: searchTextTranslateY },
                                { translateY: Animated.multiply(searchTextBounce, -1) },
                            ],
                            opacity: searchTextOpacity
                        }
                    ]}
                >
                    {!show && text==="" && placeholders[(placeholderIndex + 1) % placeholders.length]}
                </Animated.Text>
                <Image source={{ uri: "https://i.ibb.co/kHQQHH0/mic.png" }}
                    style={styles.micimage} />
                <Image source={{ uri: "https://i.ibb.co/W07FKpP/remove-2.png" }}
                    style={styles.lineimage} />
            </View>
        </Animated.View>
    )
}

export default HeaderSearch

const styles = StyleSheet.create({
    header: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: "5%",

    },
    searchContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        position: 'relative'
    },
    placeholder: {
        position: 'absolute',
        left: 50,
        top: '30%',
        color: '#666',
    },
    input: {
        width: "100%",
        height: "100%",
        borderWidth: 1,
        borderColor: "#F4F4F4",
        borderRadius: 16,
        paddingLeft: 50,
        paddingRight: 10,
        color: "#000",
        
    },
    searchIcon: {
        position: "absolute",
        left: 10,
    },
    image: {
        width: '6%',
        height: '38%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
        left: 15,
    },
    micimage: {
        width: '6%',
        height: '38%',
        right: 20,
        position: "absolute",
    },
    lineimage: {
        width: '4%',
        height: '50%',
        right: 50,
        position: "absolute",
    }
})