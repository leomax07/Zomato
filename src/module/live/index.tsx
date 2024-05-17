import {
  Animated,
  Dimensions,
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import HeaderLive from './HeaderLive';
import {Data} from './data';
import CardsData from './DropDown/CardsData';
import LinearGradient from 'react-native-linear-gradient';

import HarizontalCards from './HarizontalCards';
import {card} from './card';
import SearchScreen from './DropDown/SeachScreen';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import RNShake from 'react-native-shake';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'BottomTab'
>;
type RenderConfigureDataProps = {
  navigation: HomeScreenNavigationProp;
};

const Live: React.FC<RenderConfigureDataProps> = ({navigation}: any) => {
  const [selectedData, setSelectedData] = useState('Chennai');
  const [iconData, setIconData] = useState();
  const [dataShow, setDataShow] = useState(false);
  const [headerShow, setHeaderShow] = useState(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const prevScrollOffsetY = useRef(0);
  const [isFocused, setIsFocused] = useState(false);

  const handlerScroll = (e: any) => {
    const currentOffsetY = e.nativeEvent.contentOffset.y;
    console.log(currentOffsetY, '416================>');

    if (currentOffsetY > prevScrollOffsetY.current) {
      setDataShow(true);
    } else {
      setDataShow(false);
    }
    prevScrollOffsetY.current = currentOffsetY;
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const [colors, setColors] = useState([
    '#2f7c24',
    '#3c233f',
    '#300f24',
    '#1c0915',
    '#000',
  ]);
  const handleNavigate = () => {
    // navigation.navigate("TodayScreen")
  };

  useEffect(() => {
    const generateRandomColors = () => {
      const randomColors: any = [];
      for (let i = 0; i < 5; i++) {
        const colorData = ['#2f7c24', '#3c233f', '#300f24', '#1c0915', '#000'];
        randomColors.push(colorData);
      }
      setColors(randomColors);
    };

    const interval = setInterval(generateRandomColors, 5000);

    return () => clearInterval(interval);
  }, []);

  ///shake device code
  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      navigation.navigate('DiningTab');
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0.8, y: 0.3}}
      colors={[
        isFocused == true ? '#000' : '#2f7c24',
        '#3c233f',
        '#300f24',
        '#1c0915',
        '#000',
      ]}
      style={styles.linearGradient}>
      <SafeAreaView style={styles.containerLive}>
        {dataShow === false ? (
          <HeaderLive
            Data={Data}
            animHeaderValue={scrollOffsetY}
            setSelectedData={setSelectedData}
            selectedData={selectedData}
            iconData={iconData}
            setIconData={setIconData}
            dataShow={dataShow}
            setDataShow={setDataShow}
            headerShow={headerShow}
            setHeaderShow={setHeaderShow}
            isFocused={isFocused}
            setIsFocused={setIsFocused}
          />
        ) : (
          <View style={{paddingBottom: 5}}>
            <View style={styles.dropContainer}>
              <View style={styles.inputContainer}>
                <SearchScreen
                  isFocused={isFocused}
                  setIsFocused={setIsFocused}
                />
              </View>
            </View>
            <View>
              <HarizontalCards />
            </View>
          </View>
        )}
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
            {
              useNativeDriver: false,
              listener: handlerScroll,
            },
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {refreshing ? <CardsData /> : <CardsData />}
          {dataShow === false && (
            <View>
              <HarizontalCards />
            </View>
          )}
          {/* ) : (
            <></>
          )} */}
          <View>
            {card.map((item, index) => {
              return (
                <View key={index} style={styles.dataView}>
                  <Image
                    style={styles.cardImageView}
                    source={{uri: item.uri}}
                    height={600}
                    width={320}
                  />
                  <View style={styles.titleViewContainer}>
                    <View style={styles.titleView}>
                      <View>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.titleDate}>{item.date}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.titleViewContainerTwo}>
                    <View style={styles.titleView}>
                      <View>
                        <TouchableOpacity
                          onPress={() => {
                            handleNavigate();
                          }}
                          style={styles.titleTicketView}>
                          <Text style={styles.titleTicket}>{item.ticket}</Text>
                        </TouchableOpacity>
                        <Text style={styles.titleEntery}>{item.entry}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Live;

const styles = StyleSheet.create({
  containerLive: {
    flex: 1,
  },
  scrollText: {
    textAlign: 'center',
    padding: 20,
    color: '#fff',
  },
  linearGradient: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
  cardTopView: {
    marginBottom: 100,
  },
  dataView: {
    marginHorizontal: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataViewImage: {
    backgroundColor: '#484340',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 30,
  },
  cardImageView: {
    margin: 10,
    borderRadius: 20,
    position: 'relative',
    backgroundColor: 'blue',
    padding: 10,
    borderWidth: 3,
    borderColor: '#333333',
  },
  titleViewContainer: {
    position: 'absolute',
    bottom: 20,
    zIndex: 1,
    left: 10,
  },
  titleViewContainerTwo: {
    position: 'absolute',
    bottom: 20,
    zIndex: 1,
    right: 10,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '900',
    width: Dimensions.get('screen').width / 2,
  },
  titleDate: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '300',
  },
  titleTicketView: {
    backgroundColor: '#f5554a',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTicket: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '900',
    textAlign: 'center',
  },
  titleEntery: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '300',
    textAlign: 'center',
    marginTop: 4,
  },
  dropContainer: {
    width: Dimensions.get('screen').width,
  },
  inputContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
