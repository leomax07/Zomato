import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LineText from '../../../components/lineText'
import CardLayout from '../../../components/card'
import Food from './food'
import Fruits from './fruits'
import Offers from './offer'
import Timer from './timer'

const Explore = () => {
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    let interval: NodeJS.Timeout | null = null;

    const placeholders = ["Up to 60% OFF", "Flat Discount", "& More"];


    useEffect(() => {
        interval = setInterval(() => {
            setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
        }, 2000);
        return () => {
            if (interval) clearInterval(interval);
        };
    }, []);

    return (
        <View>
            <LineText text={"EXPLORE"} linewidth='30%' />
            <ScrollView horizontal={true} contentContainerStyle={styles.card} showsHorizontalScrollIndicator={false}>
                <View style={styles.cardbody}>
                    <CardLayout borderRadius={8}>
                        <Offers />
                        <Text style={styles.text}>Offers</Text>
                        <Text style={styles.offertext}>{ placeholders[(placeholderIndex + 1) % placeholders.length]}</Text>
                    </CardLayout>
                </View>
                <View style={styles.cardbody}>
                    <CardLayout borderRadius={8}>
                        <Timer />
                        <Text style={styles.text}>Express</Text>
                        <Text style={styles.subtext}>Delivery</Text>
                    </CardLayout>
                </View>
                <View style={styles.cardbody}>
                    <CardLayout borderRadius={8}>
                        <Food />
                        <Text style={styles.text}>Gournet</Text>
                        <Text style={styles.subtext}>Selection</Text>
                    </CardLayout>
                </View>
                <View style={styles.cardbody}>
                    <CardLayout borderRadius={8}>
                        <Fruits />
                        <Text style={styles.text}>Healthy</Text>
                        <Text style={styles.subtext}>Curated dishes</Text>
                    </CardLayout>
                </View>
            </ScrollView>
        </View>
    )
}

export default Explore

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        flexDirection: "row",
        paddingHorizontal: 30,
        marginTop: 15,
    },
    cardbody: {
        width: 80,
        marginRight: 30, 
    },
    text: {
        fontSize: 12,
        fontWeight: '700',
        fontStyle: 'normal',
        color: "#000",
        textAlign: "center"
    },
    offertext: {
        fontSize: 8,
        fontWeight: '600',
        fontStyle: 'normal',
        color: "#fea853",
        textAlign: "center",
    },
    subtext: {
        fontSize: 8,
        fontWeight: '600',
        fontStyle: 'normal',
        color: "#36454f",
        textAlign: "center"
    }
})