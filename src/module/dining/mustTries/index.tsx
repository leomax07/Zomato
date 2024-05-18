import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MustTries = () => {
    return (
        <ScrollView horizontal={true} style={styles.container}>
             <ImageBackground source={{ uri: "https://i.ibb.co/7jWhkQ0/1419.jpg" }} style={styles.leftcard}>
                    <Text style={styles.leftcardtext}>Live Cricket Screening</Text>
                </ImageBackground>
                <ImageBackground source={{ uri: "https://i.ibb.co/7jWhkQ0/1419.jpg" }} style={styles.leftcard}>
                    <Text style={styles.leftcardtext}>Live Cricket Screening</Text>
                </ImageBackground>
                <ImageBackground source={{ uri: "https://i.ibb.co/7jWhkQ0/1419.jpg" }} style={styles.leftcard}>
                    <Text style={styles.leftcardtext}>Live Cricket Screening</Text>
                </ImageBackground>
                <ImageBackground source={{ uri: "https://i.ibb.co/7jWhkQ0/1419.jpg" }} style={styles.leftcard}>
                    <Text style={styles.leftcardtext}>Live Cricket Screening</Text>
                </ImageBackground>
        </ScrollView>
    )
}

export default MustTries

const styles = StyleSheet.create({
    container:{

    },
    cardcontainer:{

    },
    leftcard: {
        width: 160,
        height: 180,
       
        // backgroundColor: 'red',
        marginTop: 10,
        overflow: 'hidden',
        position: 'relative',
        borderTopLeftRadius:70,
        borderTopRightRadius:70,
        borderBottomLeftRadius:6,
        borderBottomRightRadius:6,
        marginBottom:10,
        marginLeft:14
    },
    leftcardtext: {
        fontSize: 14,
        fontWeight: '500',
        zIndex: 2,
        color: '#fff',
        position: 'absolute',
        bottom: 0,
        width: 160,
        padding: 14,
        textAlign: 'center',

    },
})