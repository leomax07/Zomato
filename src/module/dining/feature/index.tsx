import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Feature = () => {
    return (
        <View>
            <ImageBackground source={{ uri: "https://i.ibb.co/7jWhkQ0/1419.jpg" }} style={styles.leftcard}>


                <View style={styles.topcard}>
                    <Text style={styles.whitetextcard}>PRE-BOOK TABLE</Text>
                    <Text style={styles.whitetextcard}>Flat 50% OFF + 3 more</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.leftcardtext}>Ministry of Drinks - MOD</Text>
                    <View style={styles.lefttext}>
                        <Text>Nandhanam, Chennai</Text>
                        <Text>1.6 km</Text>
                    </View>
                    <View style={styles.lefttext}>
                        <Text>Finger Food  . Italian</Text>
                        <Text>1.6 km</Text>
                    </View>
                </View>

            </ImageBackground>

            <ImageBackground source={{ uri: "https://i.ibb.co/7jWhkQ0/1419.jpg" }} style={styles.leftcard}>


                <View style={styles.topcard}>
                    <Text style={styles.whitetextcard}>PRE-BOOK TABLE</Text>
                    <Text style={styles.whitetextcard}>Flat 50% OFF + 3 more</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.leftcardtext}>Ministry of Drinks - MOD</Text>
                    <View style={styles.lefttext}>
                        <Text>Nandhanam, Chennai</Text>
                        <Text>1.6 km</Text>
                    </View>
                    <View style={styles.lefttext}>
                        <Text>Finger Food  . Italian</Text>
                        <Text>1.6 km</Text>
                    </View>
                </View>

            </ImageBackground>

            <ImageBackground source={{ uri: "https://i.ibb.co/7jWhkQ0/1419.jpg" }} style={styles.leftcard}>


                <View style={styles.topcard}>
                    <Text style={styles.whitetextcard}>PRE-BOOK TABLE</Text>
                    <Text style={styles.whitetextcard}>Flat 50% OFF + 3 more</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.leftcardtext}>Ministry of Drinks - MOD</Text>
                    <View style={styles.lefttext}>
                        <Text>Nandhanam, Chennai</Text>
                        <Text>1.6 km</Text>
                    </View>
                    <View style={styles.lefttext}>
                        <Text>Finger Food  . Italian</Text>
                        <Text>1.6 km</Text>
                    </View>
                </View>

            </ImageBackground>

        </View>
    )
}

export default Feature

const styles = StyleSheet.create({
    leftcard: {
        width: 370,
        height: 250,
        borderRadius: 26,
        // backgroundColor: 'red',
        marginTop: 10,
        overflow: 'hidden',
        position: 'relative',

    },
    leftcardtext: {
        fontSize: 20,
        fontWeight: 'bold',

        color: '#000',
        // position: 'absolute',
        bottom: 0,
        width: "90%",
        // paddingBottom: 14,

        backgroundColor: '#fff',
        // margin: 10,
        borderBottomEndRadius: 10,
        marginBottom: 4

    },
    card: {
        backgroundColor: '#fff',
        padding: 10,
        // borderRadius:20,
        position: 'absolute',
        bottom: 0,
        width: '95%',
        margin: 10,
        borderBottomEndRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20
    },
    lefttext: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    whitetextcard: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '400',

    },
    topcard: {
        backgroundColor: 'transparent',
        padding: 10,
        // borderRadius:20,
        position: 'absolute',
        bottom: 88,
        width: '55%',
        margin: 10,
        gap: 4,
        borderTopRightRadius: 20
    }
})