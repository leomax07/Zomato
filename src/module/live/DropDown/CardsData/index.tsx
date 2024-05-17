import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const CardsData = () => {
  return (
    <View style={styles.imageView}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://b.zmtcdn.com/data/o2_assets/84373403bd266411475a3367946c71541705050722.png',
        }}
      />
      <Text style={styles.bookTicketText}>
        Book ticket to the best events & experiences
      </Text>
      <View style={styles.borderLineWithTextView}>
        <LinearGradient
          colors={['#424242', '#000']}
          style={styles.borderLineWithText}></LinearGradient>
        <Text style={styles.tookingForText}>WHAT ARE YOU LOOKING FOR?</Text>
        <LinearGradient
          colors={['#424242', '#000']}
          style={styles.borderLineWithText}></LinearGradient>
      </View>
      <View style={styles.cardsView}>
        <LinearGradient
          colors={['#424242', '#000']}
          style={styles.linearGradient}>
          <TouchableOpacity style={styles.cardOneView}>
            <Image
              style={{height: 30, width: 30}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/13455/13455197.png',
              }}
            />
            <Text style={styles.cardText}>Near by</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={['#424242', '#000']}
          style={styles.linearGradientTwo}>
          <TouchableOpacity style={styles.cardTwoView}>
            <Image
              style={{height: 30, width: 30}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/2387/2387889.png',
              }}
            />
            <Text style={styles.cardText}>Late Night</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={['#424242', '#000']}
          style={styles.linearGradientThree}>
          <TouchableOpacity style={styles.cardThreeView}>
            <Image
              style={{height: 30, width: 30}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/2907/2907253.png',
              }}
            />
            <Text style={styles.cardText}>Music</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={['#424242', '#000']}
          style={styles.linearGradientFour}>
          <TouchableOpacity style={styles.cardFourView}>
            <Image
              style={{height: 30, width: 30}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/11531/11531403.png',
              }}
            />
            <Text style={styles.cardText}>Culture</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={styles.borderLineWithTextView}>
        <View style={styles.borderLineWithText}></View>
        <Text style={styles.tookingForText}>PLANNING FOR</Text>
        <View style={styles.borderLineWithText}></View>
      </View>
      <View style={styles.borderLineWithTextView}>
        <LinearGradient
          start={{x: 0, y: 0.2}}
          end={{x: 0.4, y: 2.5}}
          colors={['#5c2066', '#000', '#4caf50']}
          style={styles.linearGradientCalendar}>
          <TouchableOpacity style={styles.cardFourViewCalendar}>
            <Text style={styles.cardText}>Today</Text>
            <Image
              style={{height: 30, width: 30}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/5739/5739833.png',
              }}
            />
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          start={{x: 0, y: 0.2}}
          end={{x: 0.4, y: 2.5}}
          colors={['#5c2066', '#000', '#4caf50']}
          style={styles.linearGradientCalendar}>
          <TouchableOpacity style={styles.cardFourViewCalendar}>
            <Text style={styles.cardText}>This Week</Text>
            <Image
              style={{height: 40, width: 40}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/6575/6575648.png',
              }}
            />
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={styles.borderLineWithTextView}>
        <View style={styles.borderLineWithText}></View>
        <Text style={styles.tookingForText}>EXPLORE ALL EVENTS</Text>
        <View style={styles.borderLineWithText}></View>
      </View>
    </View>
  );
};

export default CardsData;

const styles = StyleSheet.create({
  imageView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical: 20,
    marginTop: 20,
    // marginBottom:10
  },
  tinyLogo: {
    width: 100,
    height: 50,
  },
  bookTicketText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '900',
    marginVertical: 12,
  },
  borderLineWithTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  borderLineWithText: {
    borderWidth: 0.5,
    borderColor: '#fff',
    width: Dimensions.get('screen').width / 3,
    marginHorizontal: 10,
  },
  tookingForText: {
    color: '#5d5d5d',
    fontSize: 14,
    fontWeight: '900',
    marginVertical: 12,
  },
  cardsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardOneView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTwoView: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal: 10,
  },
  cardThreeView: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal: 10,
  },
  cardFourView: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal: 10,
  },
  cardFourViewCalendar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '900',
    marginVertical: 10,
  },
  closeIconView: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 40,
    backgroundColor: '#39393a',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  dropDownText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
    padding: 5,
  },
  dropDownTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  linearGradient: {
    borderRadius: 10,
    padding: 5,
    width: Dimensions.get('screen').width / 4.8,
    // height: 70,
    // width: 70,
    marginHorizontal: 6,
    marginVertical: 6,
  },
  linearGradientTwo: {
    borderRadius: 10,
    padding: 5,
    width: Dimensions.get('screen').width / 4.8,
    marginHorizontal: 6,
    marginVertical: 6,
  },
  linearGradientThree: {
    borderRadius: 10,
    padding: 5,
    width: Dimensions.get('screen').width / 4.8,
    marginHorizontal: 6,
    marginVertical: 6,
  },
  linearGradientFour: {
    borderRadius: 10,
    padding: 5,
    width: Dimensions.get('screen').width / 4.8,
    marginHorizontal: 6,
    marginVertical: 6,
  },
  linearGradientCalendar: {
    borderRadius: 20,
    padding: 10,
    width: Dimensions.get('screen').width / 2.2,
    marginHorizontal: 6,
    marginVertical: 6,
    borderBottomWidth: 0.8,
    borderColor: 'green',
    borderCurve: 'circular',
  },
});
