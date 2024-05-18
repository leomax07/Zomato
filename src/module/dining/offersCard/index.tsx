import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OfferCards = () => {
    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <View>
                    <Text style={styles.innercontainertext}>Walk-in offers</Text>
                    <View style={styles.imagescontainer}>
                        <Image source={{ uri: "https://i.ibb.co/Hrh3Gz9/best-offer.png" }} style={styles.offerimages} />
                        <Text style={styles.offertext}>up To 40% OFF</Text>
                    </View>
                </View>
                <View>
                    <Image source={{ uri: "https://i.ibb.co/0rTWM7g/salad.png" }} style={styles.images} />
                 
                </View>
            </View>

            <View style={styles.innercontainer}>
                <View>
                    <Text style={styles.innercontainertext}>Walk-in offers</Text>
                    <View style={styles.imagescontainer}>
                        <Image source={{ uri: "https://i.ibb.co/Hrh3Gz9/best-offer.png" }} style={styles.offerimages} />
                        <Text style={styles.offertext}>up To 40% OFF</Text>
                    </View>
                </View>
                <View>
                    <Image source={{ uri: "https://i.ibb.co/0rTWM7g/salad.png" }} style={styles.images} />
                 
                </View>
            </View>



        </View>
    )
}

export default OfferCards

const styles = StyleSheet.create({
    container: {
        // backgroundColor:'yellow',
        flexDirection: 'row',
        gap: 10,
        padding: 6,
        justifyContent:'space-around'
        //  borderWidth:0.8,
    },
    offertext:{
        color:'#a7926d',
        fontSize:8,
        fontWeight:'400'
    },
    innercontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap:8,
       backgroundColor:'#f7f7f7',
        paddingHorizontal: 10,
        borderRadius: 10,
        paddingTop:8,
        paddingBottom:18,
        shadowColor: '#171717',
    shadowOffset: {width: 22, height: 4},
     shadowOpacity: 0.2,
     shadowRadius: 3,
//   elevation:33
        // width:50
    },
    innercontainertext:{
color:'#000',
fontSize:14,
fontWeight:'600'
    },
    images: {
        height: 36,
        width: 36
    },
    offerimages:{
        height: 15,
        width: 15
    },
    imagescontainer: {
        flexDirection: 'row',
        alignItems: 'center',
         backgroundColor: '#fff5db',
        padding: 2,
        borderWidth: 0.8,
        borderRadius:6,
        width:80,
        height:20,
        justifyContent:'space-around',
        borderColor:'#1e0b00',
        
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 45,
        paddingHorizontal: 25,
        width: '100%',
        marginVertical: 10,
      },
      shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
})