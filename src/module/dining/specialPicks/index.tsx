import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

import Animationlottie from './animationlottie'
const SpecialPicks = () => {
    return (
        <ScrollView  horizontal={true} style={styles.overalltopcontainer}>
        <View style={styles.container}>
            <View style={styles.cardcontainer}>
                {/* <Image source="" style={styles.topimage}/> */}
                <Animationlottie />
                <View style={styles.innnercardcontainer}>
                    <View>
                        <Text style={styles.textcardcontainer}>Scream and win up to $1000 daily!</Text>
                        {/* <Image source={{ uri :"https://i.ibb.co/RbXwyPS/arrows.png"}} style={styles.arrowimage}/>  */}
                        <Image
                            source={{
                                uri: 'https://i.ibb.co/RbXwyPS/arrows.png',
                            }}
                            style={styles.arrowimage}
                        />
                    </View>
                    <View >
                        {/* <Image source="" style={styles.subimage}/> */}
                        <Image
                            source={{
                                uri: 'https://i.ibb.co/GJgPGn4/mic.png',
                            }}
                            style={styles.arrowimage}
                        />
                    </View>
                </View>
            </View>
        </View>

        <View style={styles.container}>
            <View style={styles.cardcontainer}>
                {/* <Image source="" style={styles.topimage}/> */}
                <Animationlottie />
                <View style={styles.innnercardcontainer}>
                    <View>
                        <Text style={styles.textcardcontainer}>Scream and win up to $1000 daily!</Text>
                        {/* <Image source={{ uri :"https://i.ibb.co/RbXwyPS/arrows.png"}} style={styles.arrowimage}/>  */}
                        <Image
                            source={{
                                uri: 'https://i.ibb.co/RbXwyPS/arrows.png',
                            }}
                            style={styles.arrowimage}
                        />
                    </View>
                    <View >
                        {/* <Image source="" style={styles.subimage}/> */}
                        <Image
                            source={{
                                uri: 'https://i.ibb.co/GJgPGn4/mic.png',
                            }}
                            style={styles.arrowimage}
                        />
                    </View>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

export default SpecialPicks

const styles = StyleSheet.create({
    overalltopcontainer:{
flexDirection:'row'
    },
    container: {
        width: 230,
marginLeft:14
    },
    cardcontainer: {
        backgroundColor: '#0b0e17',
        borderRadius: 10,
        padding: 8,
        flexDirection:'column',
        gap:14
    },
    innnercardcontainer: {
         flexDirection:'row',
         alignItems:'center',
    
    },
    textcardcontainer: {
        color: '#fff',
    width:180
    },
    arrowimage: {
        marginTop:10,
        height: 32,
        width: 32
    }
})