import * as React from 'react';
import {Text, View, StyleSheet, Animated, ImageBackground} from 'react-native';
import HeaderBackgroundImage from '../../../components/headerBackgroundImage';
// import HeaderBackgroundImage from '../headerBackgroundImage';

const Header_Max_Height = 300;
const Header_Min_Height = 70;

interface DynamicHeaderProps {
  animHeaderValue: Animated.Value;
}

const HeaderLive: React.FC<DynamicHeaderProps> = ({animHeaderValue}) => {
  const animateHeaderBackgroundColor = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: ['white', 'white'],
    extrapolate: 'clamp',
  });

  const animateHeaderHeight = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  });

  const borderBottomRadius = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [40, 0],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[
        styles.header,
        {
          height: animateHeaderHeight,
          backgroundColor: animateHeaderBackgroundColor,
          borderBottomLeftRadius: borderBottomRadius,
          borderBottomRightRadius: borderBottomRadius,
          overflow: 'hidden',
        },
      ]}>
      <HeaderBackgroundImage animHeaderValue={animHeaderValue} />
      <Text style={styles.headerText}>A List of Books</Text>
    </Animated.View>
  );
};

export default HeaderLive;

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
  },
  headerText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
