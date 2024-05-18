import React from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
import { Image, StyleSheet, Text, View } from 'react-native';
import MainNavigator from './mainNavigator';

const AppLayout = () => {
    const netInfo = useNetInfo();

    if (netInfo.isConnected === true || netInfo.isConnected === null) {
        return <MainNavigator />;

    }

    return (
        <View style={styles.offlinescreen}>
            <Text style={styles.offlinescreentitle}>Net Work Error</Text>
            <Image
                source={require("../assets/offlineScreen.jpg")}
                style={styles.image}
            />
        </View>
    );
};


export default AppLayout;

const styles = StyleSheet.create({
    offlinescreen: {
        backgroundColor: "#fff",
        justifyContent: "center",
        height: "100%"
    },
    offlinescreentitle:{
        color:"rgb(55,88,99)",
        textAlign:"center",
        marginBottom:"10%",
        fontSize:32,
        fontFamily: 'PoetsenOne-Regular', 
        fontWeight: '400',
        fontStyle: 'normal',
    },
    image: {
        height: "50%",
        width: "100%"
    }
})