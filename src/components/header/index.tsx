import * as React from 'react';
import { StyleSheet, Animated } from 'react-native';
import HeaderTop from '../headerTop';
import HeaderImage from '../headerImage';
import HeaderSearch from '../headerSearch';
// import HeaderBackgroundImage from '../headerBackgroundImage';

const Header_Max_Height = 320;
const Header_Min_Height = 70;

interface DynamicHeaderProps {
  animHeaderValue: Animated.Value;
}

const DynamicHeader: React.FC<DynamicHeaderProps> = ({animHeaderValue}) => {
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
                    overflow: 'hidden'
                }

            ]}
        >
            <HeaderTop animHeaderValue={animHeaderValue} />
            <HeaderSearch animHeaderValue={animHeaderValue} />
            <HeaderImage animHeaderValue={animHeaderValue} />
            {/* <HeaderBackgroundImage animHeaderValue={animHeaderValue}>
            <HeaderTop animHeaderValue={animHeaderValue}/>
            <HeaderSearch animHeaderValue={animHeaderValue}/>
            </HeaderBackgroundImage> */}
        </Animated.View>
    );
}

export default DynamicHeader;

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        left: 0,
        right: 0,
    },
});
