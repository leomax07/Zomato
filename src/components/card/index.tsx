import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

interface CardLayoutProps {
    children: ReactNode;
    borderRadius:number
}

const CardLayout: React.FC<CardLayoutProps> = ({ children, borderRadius = 9 }) => {
    return (
        <View style={[styles.container, { borderRadius }]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        shadowColor:"#F4F4F4",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 12,
        elevation: 3, 
        padding: '10%',
        borderColor:"#F4F4F4",
        borderWidth:1,
        borderRadius:10
      },
 
});

export default CardLayout;
