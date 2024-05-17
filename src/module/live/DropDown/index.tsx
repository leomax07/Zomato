// import {
//   Alert,
//   Animated,
//   Dimensions,
//   FlatList,
//   Image,
//   ImageBackground,
//   Modal,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';
// import SearchScreen from './SeachScreen';
// import {Data} from '../data';
// import SvgCancelIcon from '../../../assets/SvgCancelIcon';
// // import {Header} from '@react-navigation/stack';
// import SvgDropDownIcon from '../../../assets/icons/SvgDropDown';
// import SvgUserIcon from '../../../assets/icons/SvgUserIcon';
// import CardsData from './CardsData';

// const Header_Max_Height = 100;
// const Header_Min_Height = 100;

// interface DynamicHeaderProps {
//   Data: any;
//   selectedData: any;
//   setSelectedData: any;
//   iconData: any;
//   setIconData: any;
//   // dataShow: any;
//   // setDataShow: any;
//   animHeaderValue: Animated.Value;
// }
// const Header: React.FC<{
//   iconData: any;
//   selectedData: any;
//   setModalVisible: any;
//   // dataShow: any;
// }> = ({iconData, selectedData, setModalVisible}) => {
//   return (
//     <View style={styles.headerView}>
//       <TouchableOpacity
//         style={styles.dropDownTextView}
//         onPress={() => setModalVisible(true)}>
//         <Image source={{uri: iconData}} height={20} width={20} />
//         <Text style={styles.dropDownText}>{selectedData}</Text>
//         <SvgDropDownIcon />
//       </TouchableOpacity>
//       <View style={styles.userView}>
//         <SvgUserIcon />
//       </View>
//     </View>
//   );
// };

// const DropDownScreen: React.FC<DynamicHeaderProps> = ({
//   Data,
//   selectedData,
//   setSelectedData,
//   iconData,
//   setIconData,
//   // dataShow,
//   // setDataShow,
//   animHeaderValue,
// }) => {
//   const [modalVisible, setModalVisible] = useState(false);

//   const handleSelectData = (title: any, icon: any) => {
//     setSelectedData(title);
//     setIconData(icon);
//     setModalVisible(false);
//   };
//   const [timeOfDayImage, setTimeOfDayImage] = useState<string>('');

//   useEffect(() => {
//     const currentDate = new Date();
//     const currentHour = currentDate.getHours();
//     let backgroundImage = '';

//     if (currentHour >= 6 && currentHour < 12) {
//       backgroundImage =
//         'https://i.ibb.co/vJdCgvF/delicious-indian-dosa-composition.jpg';
//     } else if (currentHour >= 12 && currentHour < 18) {
//       backgroundImage = 'https://i.ibb.co/Lg4bRwv/delicious-food-table.jpg';
//     } else if (currentHour >= 18 && currentHour < 24) {
//       backgroundImage =
//         'https://i.ibb.co/FJXLg6B/view-delicious-burger-with-french-fries.jpg';
//     } else {
//       backgroundImage =
//         'https://i.ibb.co/8xHMxYq/photorealistic-lohri-festival-celebration-with-traditional-food.jpg';
//     }
//     setTimeOfDayImage(backgroundImage);
//   }, []);

//   // const backgroundImageOpacity = animHeaderValue.interpolate({
//   //   inputRange: [0, Header_Max_Height - Header_Min_Height],
//   //   outputRange: [1, 0],
//   //   extrapolate: 'clamp',
//   // });

//   return (
//     <Animated.View
//       style={{
//         ...StyleSheet.absoluteFillObject,
//         // opacity: backgroundImageOpacity,
//       }}>
//       <View style={styles.dropContainer}>
//         <Header
//           iconData={iconData}
//           selectedData={selectedData}
//           setModalVisible={setModalVisible}
//           // dataShow={dataShow}
//         />
//         <View style={styles.modalContainer}>
//           <Modal
//             animationType="slide"
//             transparent={true}
//             visible={modalVisible}
//             onRequestClose={() => {
//               Alert.alert('Modal has been closed.');
//               setModalVisible(!modalVisible);
//             }}>
//             <View style={styles.centeredView}>
//               <TouchableOpacity
//                 onPress={() => setModalVisible(false)}
//                 style={styles.closeContainer}>
//                 <View style={styles.closeIconView}>
//                   <SvgCancelIcon />
//                 </View>
//               </TouchableOpacity>
//               <View style={styles.modalView}>
//                 <Text style={styles.selectCity}>Select a City</Text>
//                 <FlatList
//                   data={Data}
//                   renderItem={({item}) => {
//                     return (
//                       <TouchableOpacity
//                         onPress={() => handleSelectData(item.title, item.icon)}
//                         style={
//                           // item.title !== ''?
//                           styles.DropDownData
//                           // : styles.DropDownDataTwo
//                         }>
//                         <View style={styles.dropdownSubData}>
//                           <Text style={styles.itemStyleText}>{item.title}</Text>
//                           {/* <View>{item.icon}</View> */}
//                           <Image
//                             source={{uri: item.icon}}
//                             height={40}
//                             width={40}
//                             style={{
//                               borderRadius: 10,
//                               flexDirection: 'row',
//                               justifyContent: 'flex-end',
//                               alignItems: 'flex-end',
//                               marginTop: 14,
//                             }}
//                           />
//                         </View>
//                       </TouchableOpacity>
//                     );
//                   }}
//                 />
//               </View>
//             </View>
//           </Modal>
//         </View>
//       </View>
//     </Animated.View>
//   );
// };

// export default DropDownScreen;

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   dropContainer: {
//     flex: 1,
//     width: Dimensions.get('screen').width,
//   },
//   scrollContainer: {
//     flexGrow: 1,
//   },
//   inputContainer: {
//     marginVertical: 10,
//     marginHorizontal: 10,
//     // paddingVertical:5
//   },
//   modalContainer: {
//     backgroundColor: '#000',
//   },
//   centeredView: {
//     backgroundColor: '#000',
//     flex: 1,
//     justifyContent: 'flex-end',
//     height: Dimensions.get('screen').height / 2,
//     width: Dimensions.get('screen').width,
//   },
//   DropDownData: {
//     backgroundColor: '#2a2827',
//     marginVertical: 4,
//     paddingHorizontal: 8,
//     // paddingTop: 14,
//     borderRadius: 10,
//   },
//   DropDownDataTwo: {
//     backgroundColor: '#2a2827',
//     marginVertical: 4,
//     paddingHorizontal: 8,
//     // paddingTop: 14,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#fff',
//   },
//   itemStyleText: {
//     color: '#fff',
//     fontWeight: '500',
//     fontSize: 16,
//   },
//   dropdownSubData: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   selectCity: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   closeContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   closeIconView: {
//     height: 40,
//     width: 40,
//     borderWidth: 1,
//     borderRadius: 40,
//     backgroundColor: '#39393a',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 20,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.5,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   dropDownText: {
//     fontSize: 18,
//     fontWeight: '400',
//     color: '#fff',
//     marginRight: 4,
//     // padding: 5,
//   },
//   dropDownTextView: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   headerView: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginRight: 10,
//     marginTop: 10,
//     // flexDirection: 'row',
//     // justifyContent: 'space-between',
//     // alignItems: 'center',
//     // // paddingHorizontal: 10,
//     // // paddingVertical: 10,
//     // // backgroundColor: '#000',
//     // zIndex: 1,
//     // marginBottom: 10,
//   },
//   userView: {
//     borderWidth: 1,
//     borderRadius: 100,
//     height: 25,
//     width: 25,
//     borderColor: '#fff',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalView: {
//     height: Dimensions.get('screen').height / 1.5,
//     width: Dimensions.get('screen').width,
//     backgroundColor: '#131110',
//     // borderRadius: 20,
//     borderTopRightRadius: 10,
//     borderTopLeftRadius: 10,
//     padding: 16,
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
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   linearGradient: {
//     borderRadius: 10,
//     padding: 5,
//     height: 70,
//     width: 70,
//     marginHorizontal: 6,
//     marginVertical: 6,
//   },
//   linearGradientTwo: {
//     borderRadius: 10,
//     padding: 5,
//     height: 70,
//     width: 70,
//     marginHorizontal: 6,
//     marginVertical: 6,
//   },
//   linearGradientThree: {
//     borderRadius: 10,
//     padding: 5,
//     height: 70,
//     width: 70,
//     marginHorizontal: 6,
//     marginVertical: 6,
//   },
//   linearGradientFour: {
//     borderRadius: 10,
//     padding: 5,
//     height: 70,
//     width: 70,
//     marginHorizontal: 6,
//     marginVertical: 6,
//   },
// });
import {
  Alert,
  Animated,
  Dimensions,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SvgCancelIcon from '../../../assets/SvgCancelIcon';
import SvgDropDownIcon from '../../../assets/icons/SvgDropDown';
import SvgUserIcon from '../../../assets/icons/SvgUserIcon';

const Header_Max_Height = 100;
const Header_Min_Height = 100;

interface DynamicHeaderProps {
  Data: any;
  selectedData: any;
  setSelectedData: any;
  iconData: any;
  setIconData: any;
  animHeaderValue: Animated.Value;
}

const Header: React.FC<{
  iconData: any;
  selectedData: any;
  setModalVisible: any;
}> = ({iconData, selectedData, setModalVisible}) => {
  return (
    <View style={styles.headerView}>
      <TouchableOpacity
        style={styles.dropDownTextView}
        onPress={() => setModalVisible(true)}>
        <Image source={{uri: iconData}} height={20} width={20} />
        <Text style={styles.dropDownText}>{selectedData}</Text>
        <SvgDropDownIcon />
      </TouchableOpacity>
      <View style={styles.userView}>
        <SvgUserIcon />
      </View>
    </View>
  );
};

const DropDownScreen: React.FC<DynamicHeaderProps> = ({
  Data,
  selectedData,
  setSelectedData,
  iconData,
  setIconData,
  animHeaderValue,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const initialIndex = 0;

  useEffect(() => {
    setSelectedData(Data[initialIndex].title);
    setIconData(Data[initialIndex].icon);
  }, []);

  const handleSelectData = (title: any, icon: any) => {
    setSelectedData(title);
    setIconData(icon);
    setModalVisible(false);
  };

  const [timeOfDayImage, setTimeOfDayImage] = useState<string>('');

  useEffect(() => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    let backgroundImage = '';

    if (currentHour >= 6 && currentHour < 12) {
      backgroundImage =
        'https://i.ibb.co/vJdCgvF/delicious-indian-dosa-composition.jpg';
    } else if (currentHour >= 12 && currentHour < 18) {
      backgroundImage = 'https://i.ibb.co/Lg4bRwv/delicious-food-table.jpg';
    } else if (currentHour >= 18 && currentHour < 24) {
      backgroundImage =
        'https://i.ibb.co/FJXLg6B/view-delicious-burger-with-french-fries.jpg';
    } else {
      backgroundImage =
        'https://i.ibb.co/8xHMxYq/photorealistic-lohri-festival-celebration-with-traditional-food.jpg';
    }
    setTimeOfDayImage(backgroundImage);
  }, []);

  return (
    <Animated.View style={StyleSheet.absoluteFillObject}>
      <View style={styles.dropContainer}>
        <Header
          iconData={iconData}
          selectedData={selectedData}
          setModalVisible={setModalVisible}
        />
        <View style={styles.modalContainer}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeContainer}>
                <View style={styles.closeIconView}>
                  <SvgCancelIcon />
                </View>
              </TouchableOpacity>
              <View style={styles.modalView}>
                <Text style={styles.selectCity}>Select a City</Text>
                <FlatList
                  data={Data}
                  renderItem={({item}) => {
                    return (
                      <TouchableOpacity
                        onPress={() => handleSelectData(item.title, item.icon)}
                        style={styles.DropDownData}>
                        <View style={styles.dropdownSubData}>
                          <Text style={styles.itemStyleText}>{item.title}</Text>
                          <Image
                            source={{uri: item.icon}}
                            height={40}
                            width={40}
                            style={styles.itemIcon}
                          />
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </Animated.View>
  );
};

export default DropDownScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropContainer: {
    flex: 1,
    width: Dimensions.get('screen').width,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  inputContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  modalContainer: {
    backgroundColor: '#000',
  },
  centeredView: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'flex-end',
    height: Dimensions.get('screen').height / 2,
    width: Dimensions.get('screen').width,
  },
  DropDownData: {
    backgroundColor: '#2a2827',
    marginVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  DropDownDataTwo: {
    backgroundColor: '#2a2827',
    marginVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  itemStyleText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
  dropdownSubData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectCity: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '400',
  },
  closeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIconView: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 40,
    backgroundColor: '#39393a',
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
    marginRight: 4,
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
    marginRight: 10,
    marginTop: 10,
  },
  userView: {
    borderWidth: 1,
    borderRadius: 100,
    height: 25,
    width: 25,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    height: Dimensions.get('screen').height / 1.5,
    width: Dimensions.get('screen').width,
    backgroundColor: '#131110',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 16,
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
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  linearGradient: {
    borderRadius: 10,
    padding: 5,
    height: 70,
    width: 70,
    marginHorizontal: 6,
    marginVertical: 6,
  },
  linearGradientTwo: {
    borderRadius: 10,
    padding: 5,
    height: 70,
    width: 70,
    marginHorizontal: 6,
    marginVertical: 6,
  },
  linearGradientThree: {
    borderRadius: 10,
    padding: 5,
    height: 70,
    width: 70,
    marginHorizontal: 6,
    marginVertical: 6,
  },
  linearGradientFour: {
    borderRadius: 10,
    padding: 5,
    height: 70,
    width: 70,
    marginHorizontal: 6,
    marginVertical: 6,
  },
  itemIcon: {
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 14,
  },
});
