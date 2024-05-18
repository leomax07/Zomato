import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LineText from '../../../components/lineText';
import { FoodCategory as mockFoodCategory } from './mockdata';

interface RenderItemProps {
    item: {
        Url: string;
        name: string;
    };
}

const FoodCategory = () => {
    const firstRowItems = mockFoodCategory.slice(0, 8);
    const secondRowItems = mockFoodCategory.slice(8, 16);

    const renderItem: React.FC<RenderItemProps> = ({ item }) => {
        return (
            <View style={styles.cardItem}>
                <Image source={{ uri: item.Url }} style={styles.image} />
                <Text style={styles.name}>{item.name}</Text>
            </View>
        );
    };

    return (
        <View style={styles.foodcategory}>
            <LineText text={"WHAT'S ON YOUR MIND"} linewidth='15%' />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <FlatList
                    data={[firstRowItems, secondRowItems]}
                    renderItem={({ item }) => (
                        <View style={styles.cardRow}>
                            {item.map((data, index) => (
                                <View key={index}>
                                    {renderItem({ item: data })}
                                </View>
                            ))}
                        </View>
                    )}
                    keyExtractor={(_item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.flatlistContainer}
                />
            </ScrollView>
        </View>
    );
};

export default FoodCategory;

const styles = StyleSheet.create({
    foodcategory: {
        marginTop: 15,
    },
    flatlistContainer: {
        marginTop: 10,
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        overflow: "scroll"
    },
    cardItem: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        width: '100%',
    },
    name: {
        fontSize: 10,
        fontWeight: '600',
        color: "#000",
        textAlign: "center",
    },
    image: {
        width: 70,
        height: 70,
        resizeMode: 'cover',
        marginTop: 5,
    },
});
