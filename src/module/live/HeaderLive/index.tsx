import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Dimensions,
  Alert,
} from 'react-native';
import DropDownScreen from '../DropDown';
import SearchScreen from '../DropDown/SeachScreen';
import HorizontalCards from '../HarizontalCards';

interface DynamicHeaderProps {
  animHeaderValue: Animated.Value;
  Data: any;
  setSelectedData: any;
  selectedData: any;
  iconData: any;
  setIconData: any;
  dataShow: any;
  setDataShow: any;
  headerShow: any;
  setHeaderShow: any;
  isFocused: any;
  setIsFocused: any;
}

const HeaderLive: React.FC<DynamicHeaderProps> = ({
  animHeaderValue,
  Data,
  selectedData,
  setSelectedData,
  iconData,
  setIconData,
  dataShow,
  setDataShow,
  headerShow,
  setHeaderShow,
  isFocused,
  setIsFocused,
}) => {
  const Header_Max_Height = dataShow === false ? 100 : 100;
  const Header_Min_Height = dataShow === false ? 100 :100;
  const animateHeaderBackgroundColor = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: ['transparent', 'transparent'],
    extrapolate: 'clamp',
  });

  const animateHeaderHeight = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  });

  const showSearchScreen = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  const hadleSubmit = () => {
    setDataShow(false);
  };
  return (
    <Animated.View
      // onPointerMove={hadleSubmit}
      onTouchStart={hadleSubmit}
      style={[
        styles.header,
        {
          height: animateHeaderHeight,
          backgroundColor: animateHeaderBackgroundColor,
          overflow: 'hidden',
        },
      ]}>
      <DropDownScreen
        animHeaderValue={animHeaderValue}
        Data={Data}
        setSelectedData={setSelectedData}
        selectedData={selectedData}
        iconData={iconData}
        setIconData={setIconData}
        // dataShow={dataShow}
        // setDataShow={setDataShow}
      />
      <View style={styles.dropContainer}>
        <View style={styles.inputContainer}>
          <SearchScreen isFocused={isFocused} setIsFocused={setIsFocused} />
        </View>
      </View>
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
    backgroundColor: 'red',
  },
  dropContainer: {
    width: Dimensions.get('screen').width,
    marginTop: 40,
  },
  inputContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
