import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GridCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.gridcontainer}>

                {/* <View> */}
                <ImageBackground source={{ uri: "https://i.ibb.co/7jWhkQ0/1419.jpg" }} style={styles.leftcard}>
                    <Text style={styles.leftcardtext}>Live Cricket Screening</Text>
                </ImageBackground>
                {/* </View> */}

                <View style={styles.rightgridcontainer}>
                    <View>
                        <ImageBackground source={{ uri: "https://i.ibb.co/7jWhkQ0/1419.jpg" }} style={styles.rightcard}>
                            <Text style={styles.rightcardtext}>Live Cricket Screening</Text>
                        </ImageBackground>
                        <ImageBackground source={{ uri: "https://i.ibb.co/7jWhkQ0/1419.jpg" }} style={styles.rightcard}>
                            <Text style={styles.rightcardtext}>Live Cricket Screening</Text>
                        </ImageBackground>
                    </View>
                    <View>
                        <ImageBackground source={{ uri: "https://i.ibb.co/7jWhkQ0/1419.jpg" }} style={styles.rightcard}>
                            <Text style={styles.rightcardtext}>Live Cricket Screening</Text>
                        </ImageBackground>
                        <ImageBackground source={{ uri: "https://i.ibb.co/7jWhkQ0/1419.jpg" }} style={styles.rightcard}>
                            <Text style={styles.rightcardtext}>Live Cricket Screening</Text>
                        </ImageBackground>
                    </View>
                </View>
            </View>

            <View style={styles.gridcontainer}>

{/* <View> */}
<ImageBackground source={{ uri: "https://i.ibb.co/7jWhkQ0/1419.jpg" }} style={styles.leftcard}>
    <Text style={styles.leftcardtext}>Live Cricket Screening</Text>
</ImageBackground>
{/* </View> */}

<View style={styles.rightgridcontainer}>
    <View>
        <ImageBackground source={{ uri: "https://i.ibb.co/7jWhkQ0/1419.jpg" }} style={styles.rightcard}>
            <Text style={styles.rightcardtext}>Live Cricket Screening</Text>
        </ImageBackground>
        <ImageBackground source={{ uri: "https://i.ibb.co/7jWhkQ0/1419.jpg" }} style={styles.rightcard}>
            <Text style={styles.rightcardtext}>Live Cricket Screening</Text>
        </ImageBackground>
    </View>
    <View>
        <ImageBackground source={{ uri: "https://i.ibb.co/7jWhkQ0/1419.jpg" }} style={styles.rightcard}>
            <Text style={styles.rightcardtext}>Live Cricket Screening</Text>
        </ImageBackground>
        <ImageBackground source={{ uri: "https://i.ibb.co/7jWhkQ0/1419.jpg" }} style={styles.rightcard}>
            <Text style={styles.rightcardtext}>Live Cricket Screening</Text>
        </ImageBackground>
    </View>
</View>
</View>
           

        </View>
    )
}

export default GridCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fdeec0',
        margin: 10,
        padding: 10,
        width: '100%'
    },
    gridcontainer: {
        flexDirection: 'row',
        // justifyContent:'flex-start',
        // backgroundColor: 'red',
        gap: 10
        // width:'80%'
    },
    leftcard: {
        width: 140,
        height: 150,
        borderRadius: 20,
        // backgroundColor: 'red',
        marginTop: 10,
        overflow: 'hidden',
        position: 'relative'
    },
    leftcardtext: {
        fontSize: 14,
        fontWeight: '500',
        zIndex: 2,
        color: '#fff',
        position: 'absolute',
        bottom: 0,
        width: 130,
        paddingBottom: 14,
        textAlign: 'center'

    },
    rightcardtext: {
        fontSize: 13,
        fontWeight: '500',
        zIndex: 2,
        color: '#fff',
        position: 'absolute',
        bottom: 0,
        width: 100,
        paddingBottom: 4,
        textAlign: 'center'
    },
    rightcard: {
        width: 100,
        height: 70,
        borderRadius: 20,
        // backgroundColor: 'red',
        marginTop: 10,
        overflow: 'hidden',
        position: 'relative',
        zIndex: 2
    },
    rightgridcontainer: {
        flexDirection: 'row',
        gap:10
    }
})