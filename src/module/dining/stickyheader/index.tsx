import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SortbyData } from './mock'

interface datapaprops {
    id: number,
    title: string
}

const StickyHeader = () => {
    return (
        <ScrollView style={styles.container} horizontal>
            {SortbyData.map((data: datapaprops) =>
                <View style={styles.cardcontainer} key={data.id}>
                    {data.title === "Filters" &&
                        <Image
                            source={{
                                uri: 'https://i.ibb.co/3FQ4cmb/filtericon.png',
                            }}
                            style={styles.Logo}
                        />
                    }
{/* gold */}
{data.title === "Gold" &&
                    <Image
                        source={{
                            uri: 'https://i.ibb.co/55nwV5y/medal.png',
                        }}
                        style={styles.goldLogo}
                    />
}

                    <Text style={styles.title}>{data.title}</Text>
                    {data.title === "Filters" &&
                        <Image
                            source={{
                                uri: 'https://i.ibb.co/Jn5rycF/down-arrow.png'
                            }}
                            style={styles.Logo}
                        />
                    }
                </View>
            )}




        </ScrollView>
    )
}

export default StickyHeader

const styles = StyleSheet.create({
    container: {
        // backgroundColor:
        flexDirection: 'row',
        gap: 10,
    },
    cardcontainer: {
        flexDirection: 'row',
height:25,
        borderWidth: 0.8,
width:85,
        borderRadius: 6,
        paddingHorizontal: 4,
        paddingVertical: 2,
        marginRight:10,
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'red'
    },
    title: {
        color: '#000'
    },
    Logo: {
        width: 20,
        height: 20
    },
    goldLogo:{
        width: 20,
        height: 20,
    

    }
})