import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
 
interface LineTextProps {
    text: string,
    linewidth: string | number;
}
 
const HeaderLine: React.FC<LineTextProps> = ({ text,linewidth }) => {
 
    const widthStyles = StyleSheet.create({
        line: {
            width: linewidth as any,
        },
    });
 
    return (
        <View style={styles.lineText}>
            <View style={[styles.line, widthStyles.line]}></View>
            <Text style={styles.text}>{text}</Text>
            <View style={[styles.line, widthStyles.line]}></View>
        </View>
    )
}
 
export default HeaderLine
 
const styles = StyleSheet.create({
    lineText:{
        height:50,
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        paddingHorizontal:"6%"
    },
    text: {
        color: "#E7EAED",
        fontWeight: '600',
        fontStyle: 'normal',
        fontSize: 12,
        letterSpacing:4,
        textAlign:"center"
    },
    line:{
        borderWidth:0.8,
        borderColor:"#F9F9F9",
    }
})