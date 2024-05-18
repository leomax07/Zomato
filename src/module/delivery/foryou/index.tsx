import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import LineText from '../../../components/lineText'
import Recommended from './Recommended';
import Favourites from './favourites';

const ForYou = () => {
    const [activeTab, setActiveTab] = useState("recommended");

    const handleTabChange = (tab: React.SetStateAction<string>) => {
        setActiveTab(tab);
    };

    const HandleComponentRender = () => {
        if (activeTab === "recommended") {
            return (
                <Recommended />
            )
        }
        else {
            return (
                <Favourites />
            )
        }
    }

    const imageUrl = activeTab === 'favourites' ? "https://i.ibb.co/vhkhSjb/heart.png" : "https://i.ibb.co/p183x7N/heart-1.png"
    return (
        <View style={styles.foryou}>
            <LineText text={"FOR YOU"} linewidth='30%' />
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={[styles.recommended, activeTab === 'recommended' && styles.activeTab]}
                    onPress={() => handleTabChange('recommended')}>
                    <Text style={[styles.text, activeTab === 'recommended' && styles.activeText]}>Recommended</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.favourites, activeTab === 'favourites' && styles.favouritesactiveTab]}
                    onPress={() => handleTabChange('favourites')}>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={[styles.text, activeTab === 'favourites' && styles.favouriteactiveText]}>Favourites</Text>
                </TouchableOpacity>
            </View>
            <View>
                <HandleComponentRender />
            </View>
        </View>
    )
}

export default ForYou

const styles = StyleSheet.create({
    foryou: {
        flex: 1
    },
    btnContainer: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    recommended: {
        width: "30%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#F9F9F9",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    favourites: {
        width: "30%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#F9F9F9",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: "row",
        textAlign: "center",
        gap: 4
    },
    text: {
        color: "#808080",
        fontWeight: '500',
        fontSize: 10,
        textAlign: "center"
    },
    activeTab: {
        backgroundColor: '#fff6f7',
        borderWidth: 1,
        borderColor: "#F9595F",
        flexDirection: "row",
        textAlign: "center",
        gap: 4,
    },
    favouritesactiveTab: {
        backgroundColor: '#fff6f7',
        borderWidth: 1,
        borderColor: "#F9595F",
        flexDirection: "row",
        textAlign: "center",
        gap: 4
    },
    activeText: {
        color: '#000',
        textAlign: "center",
        height: "100%",
    },
    favouriteactiveText: {
        color: '#000',
        textAlign: "center",
        height: "100%",
    },
    image: {
        height: 14,
        width: 14
    }

})
