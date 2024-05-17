// import {
//   Alert,
//   Image,
//   Modal,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useState} from 'react';
// import SvgUserIcon from '../../../../assets/icons/SvgUserIcon';
// import SvgSearchIcon from '../../../../assets/icons/SvgSearchIcon';
// import SvgMicroIcon from '../../../../assets/icons/SvgMicroIcon';
// import {PermissionsAndroid} from 'react-native';
// import HarizontalCards from '../../HarizontalCards';

// const SearchScreen = () => {
//   const [modalVisible, setModalVisible] = useState(false);

//   const requestMicrophonePermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
//         {
//           title: 'Microphone Permission',
//           message:
//             'App needs access to your microphone to enable voice search.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log('Microphone permission granted');
//       } else {
//         console.log('Microphone permission denied');
//         setModalVisible(false);
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   return (
//     <View style={styles.searchContainer}>

//       {/* <SvgSearchIcon />
//       <TextInput
//         placeholder="Search Events"
//         placeholderTextColor={'#6b6b6b'}
//         style={styles.inputView}
//       /> */}
//       <View style={styles.borderHrLine}></View>
//       <TouchableOpacity onPress={() => setModalVisible(true)}>
//         <SvgMicroIcon />
//       </TouchableOpacity>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert('Modal has been closed.');
//           setModalVisible(!modalVisible);
//         }}>
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <View style={styles.unMute}>
//               <Image
//                 height={30}
//                 width={30}
//                 source={{
//                   uri: 'https://cdn-icons-png.flaticon.com/128/9035/9035397.png',
//                 }}
//               />
//             </View>
//             <View>
//               <Text style={styles.permisstion}>
//                 Mixrophone permission is not enabled
//               </Text>
//               <Text style={styles.permisstionAcess}>
//                 Please grant us permission to access voice search
//               </Text>
//               <View style={styles.borderBottomeStyle}>
//                 <TouchableOpacity
//                   onPress={requestMicrophonePermission}
//                   style={styles.givePermission}>
//                   <Image
//                     height={16}
//                     width={16}
//                     source={{
//                       uri: 'https://cdn-icons-png.flaticon.com/128/8878/8878922.png',
//                     }}
//                   />
//                   <Text style={styles.permisstionText}>
//                     Grant microphone permission
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default SearchScreen;

// const styles = StyleSheet.create({
//   searchContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#000',
//     paddingHorizontal: 10,
//     borderRadius: 8,
//   },
//   inputView: {
//     width: '70%',
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#fff',
//     // backgroundColor:'red'
//   },
//   borderHrLine: {
//     borderWidth: 0.5,
//     borderColor: 'grey',
//     height: 24,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     // padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   unMute: {
//     backgroundColor: '#fffad2',
//     height: 60,
//     width: 60,
//     paddingHorizontal: 20,
//     marginTop: 40,
//     marginBottom: 10,
//     borderRadius: 60,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   permisstion: {
//     color: '#000',
//     fontWeight: '600',
//     fontSize: 16,
//     textAlign: 'center',
//     marginVertical: 5,
//     marginHorizontal: 40,
//   },
//   permisstionAcess: {
//     color: 'grey',
//     fontWeight: '300',
//     fontSize: 14,
//     textAlign: 'center',
//     marginVertical: 5,

//     marginHorizontal: 60,
//   },
//   borderBottomeStyle: {
//     borderTopWidth: 1,
//     borderTopColor: 'grey',
//     marginTop: 20,
//     paddingVertical: 10,
//   },
//   givePermission: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   permisstionText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: 'red',
//     marginHorizontal: 5,
//   },
// });
import React, {useState} from 'react';
import {
  Alert,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  PermissionsAndroid,
} from 'react-native';
import SvgUserIcon from '../../../../assets/icons/SvgUserIcon';
import SvgSearchIcon from '../../../../assets/icons/SvgSearchIcon';
import SvgMicroIcon from '../../../../assets/icons/SvgMicroIcon';
import HarizontalCards from '../../HarizontalCards';

const SearchScreen = ({isFocused, setIsFocused}: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  // const [isFocused, setIsFocused] = useState(false);

  const requestMicrophonePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Microphone Permission',
          message:
            'App needs access to your microphone to enable voice search.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Microphone permission granted');
      } else {
        console.log('Microphone permission denied');
        setModalVisible(false);
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const handleGoBAck = () => {
    setIsFocused(false);
  };
  return (
    <View style={styles.searchContainer}>
      {isFocused ? (
        <TouchableOpacity onPress={handleGoBAck}>
          <Image
            height={20}
            width={20}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/3240/3240644.png',
            }}
          />
        </TouchableOpacity>
      ) : (
        <SvgSearchIcon />
      )}
      <TextInput
        placeholder="Search Events"
        placeholderTextColor={'#6b6b6b'}
        style={styles.inputView}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <View style={styles.borderHrLine}></View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <SvgMicroIcon />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.unMute}>
              <Image
                height={30}
                width={30}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/9035/9035397.png',
                }}
              />
            </View>
            <View>
              <Text style={styles.permisstion}>
                Mixrophone permission is not enabled
              </Text>
              <Text style={styles.permisstionAcess}>
                Please grant us permission to access voice search
              </Text>
              <View style={styles.borderBottomeStyle}>
                <TouchableOpacity
                  onPress={requestMicrophonePermission}
                  style={styles.givePermission}>
                  <Image
                    height={16}
                    width={16}
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/128/8878/8878922.png',
                    }}
                  />
                  <Text style={styles.permisstionText}>
                    Grant microphone permission
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  inputView: {
    width: '70%',
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    // backgroundColor:'red'
  },
  borderHrLine: {
    borderWidth: 0.5,
    borderColor: 'grey',
    height: 24,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  unMute: {
    backgroundColor: '#fffad2',
    height: 60,
    width: 60,
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 10,
    borderRadius: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  permisstion: {
    color: '#000',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 5,
    marginHorizontal: 40,
  },
  permisstionAcess: {
    color: 'grey',
    fontWeight: '300',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 5,

    marginHorizontal: 60,
  },
  borderBottomeStyle: {
    borderTopWidth: 1,
    borderTopColor: 'grey',
    marginTop: 20,
    paddingVertical: 10,
  },
  givePermission: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  permisstionText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'red',
    marginHorizontal: 5,
  },
});
