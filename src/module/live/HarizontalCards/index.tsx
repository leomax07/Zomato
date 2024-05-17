import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {modalData} from './data';
import SvgCancelIcon from '../../../assets/SvgCancelIcon';

const HorizontalCards = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonChange, setButtonChange] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [dataa, setDataa] = useState('Sort');
  const [sortData, setSortData] = useState(false);
  const [diffrentData, setDiffrentData] = useState(false);
  const [djData, setDjData] = useState(false);
  const [liveData, setLiveData] = useState(false);

  const handleSelect = (item: any) => {
    setSelectedId(prevId => (prevId === item.id ? null : item.id));
    setDataa(item.title);
  };

  const handleApply = () => {
    if (dataa !== 'Sort') {
      setModalVisible(false);
      setSortData(true);
    }
  };
  const handleOpenModel = () => {
    setSelectedId(null);
    // setDataa('Sort');
    setModalVisible(true);
    // setDiffrentData(true);
  };
  const handleCloseModal = () => {
    setSelectedId(null);
    // setDataa('Sort');
    setModalVisible(false);
    // setSortData(false)
  };
  return (
    <ScrollView horizontal={true} style={styles.hrContainer}>
      <View style={styles.hrSubContainer}>
        <TouchableOpacity
          onPress={handleOpenModel}
          style={[
            styles.cardHrOneView,
            {
              backgroundColor: sortData === true ? '#6c2222' : '#333333',
              borderColor: sortData === true ? '#b70000' : '#474747',
            },
          ]}>
          <Image
            style={{height: 10, width: 10}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/3678/3678587.png',
            }}
          />
          <Text style={styles.cardHrText}>{dataa}</Text>

          {sortData === true ? (
            <Image
              height={16}
              width={16}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/11741/11741047.png',
              }}
            />
          ) : (
            <Image
              style={{height: 10, width: 10}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/8213/8213476.png',
              }}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setDiffrentData(!diffrentData)}
          style={[
            styles.cardHrTwoView,
            {
              backgroundColor: diffrentData === true ? '#6c2222' : '#333333',
              borderColor: diffrentData === true ? '#b70000' : '#474747',
            },
          ]}>
          <Text style={styles.cardHrText}>Under 10 km</Text>
          {diffrentData === true && (
            <Image
              height={16}
              width={16}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/11741/11741047.png',
              }}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setDjData(!djData)}
          style={[
            styles.cardHrTwoView,
            {
              backgroundColor: djData === true ? '#6c2222' : '#333333',
              borderColor: djData === true ? '#b70000' : '#474747',
            },
          ]}>
          <Text style={styles.cardHrText}>DJ</Text>
          {djData === true && (
            <Image
              height={16}
              width={16}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/11741/11741047.png',
              }}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setLiveData(!liveData)}
          style={[
            styles.cardHrTwoView,
            {
              backgroundColor: liveData === true ? '#6c2222' : '#333333',
              borderColor: liveData === true ? '#b70000' : '#474747',
            },
          ]}>
          <Text style={styles.cardHrText}>Live Music</Text>
          {liveData === true && (
            <Image
              height={16}
              width={16}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/11741/11741047.png',
              }}
            />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          style={{backgroundColor: 'rgb(0 0 0 / 40%)'}}
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={styles.closeContainer}
                onPress={handleCloseModal}>
                <View style={styles.closeIconView}>
                  <SvgCancelIcon />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.modalView}>
              <View style={styles.sortTextView}>
                <Text style={styles.sortText}>Sort</Text>
              </View>
              <FlatList
                data={modalData}
                renderItem={({item, index}) => {
                  const isSelected = selectedId === item.id;
                  return (
                    <View style={styles.modalDataView}>
                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                        onPress={() => handleSelect(item)}>
                        <View style={styles.circleView}>
                          {isSelected && (
                            <View style={styles.smallCircleView}></View>
                          )}
                        </View>

                        <Text style={styles.modalTitle}>{item.title}</Text>
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
              <View style={styles.modalFooter}>
                <TouchableOpacity
                  onPress={() => {
                    setButtonChange(true);
                    setSelectedId(null);
                    setModalVisible(false);
                    setSortData(false);
                    setDataa('Sort');
                  }}
                  style={
                    // buttonChange === false ? styles.clearAll :
                    styles.clearAll
                  }>
                  <Text
                    style={
                      // buttonChange === false
                      //   ? styles.clearText2
                      styles.clearText2
                    }>
                    Clear All
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    handleApply();
                    // buttonChange === false ?setModalVisible(false):setModalVisible(true)
                  }}
                  style={
                    buttonChange === false && selectedId === null
                      ? styles.ApplySubmit2
                      : styles.ApplySubmit
                  }>
                  <Text
                    style={
                      buttonChange === false && selectedId === null
                        ? styles.applyText2
                        : styles.applyText
                    }>
                    Apply
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default HorizontalCards;

const styles = StyleSheet.create({
  hrContainer: {
    // flex: 1,
    marginHorizontal: 10,
  },
  hrSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardHrOneView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333333',
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 4,
    borderRadius: 8,
    borderColor: '#474747',
    shadowColor: '#fff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 0.6,
  },
  cardHrTwoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333333',
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 4,
    borderRadius: 8,
    borderColor: '#474747',
    shadowColor: '#fff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 0.6,
  },
  cardHrThreeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333333',
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 4,
    borderRadius: 8,
    borderColor: '#474747',
    shadowColor: '#fff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 0.6,
  },
  cardHrFourView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333333',
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 4,
    borderRadius: 8,
    borderColor: '#474747',
    shadowColor: '#fff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 0.6,
  },
  cardHrFiveView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333333',
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 4,
    borderRadius: 8,
    borderColor: '#474747',
    shadowColor: '#fff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 0.6,
  },
  cardHrSixView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1e2758',
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 4,
    borderRadius: 8,
    borderColor: '#fff',
    shadowColor: '#fff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  cardHrSevenView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1e2758',
    paddingHorizontal: 4,
    paddingVertical: 4,
    marginHorizontal: 4,
  },
  cardHrText: {
    color: '#fff',
    marginHorizontal: 4,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    width: Dimensions.get('screen').width,
  },
  modalView: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height / 2.2,
    backgroundColor: 'white',
    borderRadius: 20,
    // padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalDataView: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 10,
    alignItems: 'center',
  },
  sortTextView: {
    borderBottomWidth: 0.6,
    borderBottomColor: 'grey',
    paddingBottom: 10,
    marginBottom: 10,
  },
  sortText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '400',
    marginHorizontal: 16,
    marginTop: 10,
  },
  circleView: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'red',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'red'
  },
  smallCircleView: {
    height: 14,
    width: 14,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'red',
    backgroundColor: 'red',
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '900',
    marginHorizontal: 10,
  },
  modalFooter: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  clearAll: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width / 2.5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  ApplySubmit: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: Dimensions.get('screen').width / 2,
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 10,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  applyText: {
    color: '#fff',
  },
  applyText2: {
    color: '#000',
  },
  clearText: {
    color: '#fff',
  },
  clearText2: {
    color: '#000',
  },
  clearAll2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: Dimensions.get('screen').width / 2.5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  ApplySubmit2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width / 2,
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    // borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 10,
    backgroundColor: 'grey',
  },
  closeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    width: Dimensions.get('screen').width / 4,
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
});
