import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import StickyHeader from './stickyheader'
import ExploreCard from './exploreCards'
import RNShake from 'react-native-shake';
import OfferCards from './offersCard';
import HeaderLine from './headerLine';
import SpecialPicks from './specialPicks';
import GridCard from './gridcards';
import MustTries from './mustTries';
import Feature from './feature';

const Dining = () => {
  const [shakeText, setShakeText] = useState("Shake it make its");
  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      // Navigate to other screen when shake event occurs
      // navigation.navigate('Other');
      setShakeText("yes, its working")
    });

    return () => {
      subscription.remove();
    };
  }, []);


  return (
    <ScrollView style={styles.overall}>

      {/* Shake */}

      {/* <View style={styles.shake}>
        <Text>{shakeText}</Text>
      </View> */}
      {/* sticky header */}
      <View style={styles.header}>
        <StickyHeader />
      </View>

      <HeaderLine text="EXPLORE" linewidth="30%" />
      <View style={styles.offerheader}>
        <OfferCards />
      </View>
      {/* cards */}

      <HeaderLine text="LIMELIGHT" linewidth="30%" />
      <View style={styles.offercard}>
        <ExploreCard />
      </View>


      {/* swepper cards */}
      <HeaderLine text="SPECIAL PICKS" linewidth="30%" />
      <View style={styles.stickyheader}>
        <SpecialPicks />
      </View>
      {/* scroll cards */}
      <HeaderLine text="WHAT ARE YOU LOOKING FOR" linewidth="10%" />
      <View>
        <GridCard />
      </View>

      <HeaderLine text="MUST-TRIES IN CHENNAI" linewidth="10%" />
      <View>
        <MustTries />
      </View>

      <View style={styles.feature}>
        <Text style={styles.featuretext}>POPULAR RESTAURANTS AROUND YOU</Text>
        <Text style={styles.featureinnertext}>FEATURED</Text>
        <Feature/>
      </View>
    </ScrollView>
  )
}

export default Dining;

const styles = StyleSheet.create({
  overall: {
    backgroundColor: '#fff',
    flex: 1,
    // marginBottom: 40

  },
  shake: {
    // backgroundColor: '#fea25b',
    height: 300,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#ffb350'
  },
  textline: {
    fontSize: 12,

  },
  header: {
    backgroundColor: '#fff',
    height: 50,
    // flex:1
    marginTop: 10,
    marginLeft: 10,

  },
  offerheader: {

  },
  stickyheader: {
    // backgroundColor: 'yellow',
    height: 200
    // flex:1
  },
  line: {
    borderWidth: 0.8,
    width: '30%',
    borderColor: 'lightgray',
    marginBottom: 50,
    backgroundColor: 'blue'
  },
  offercard: {
    // backgroundColor: 'red'
  },
  feature:{
    flexDirection:'column',
    alignItems:'center',
    marginVertical:20,
    
    // justifyContent:'center'
  },
  featuretext:{
    // color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal:40,
    width:'90%',
   
  },
  featureinnertext:{
    fontSize: 14,
    fontWeight: '500',
    color:'gray',
    marginVertical:16
  }
})
