import React, { useState, useCallback, useRef } from 'react';
import { StyleSheet, TextInput, View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { busStop } from 'config/api';
import Bookmark from '../../components/Bookmark';


const Index = ({ navigation }) => {
  const [searchVal, setSearchVal] = useState("");
  const [data, setData] = useState([]);
  const searchRef = useRef();

  const searchData = async (text) => {
    if(text){
    try {
      setSearchVal(text);
      const res = await fetch(`${busStop}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "keyword": text,
        }),
      });
      const resJson = await res.json();
      console.log(resJson);
      const newRes = resJson.data;
      console.log(newRes);
      setData(newRes);
    } catch (e) {
      console.log(e);
    }
  }
  else setData();
  };

  const renderItem = useCallback(({ item }) => <TouchableOpacity onPress={() => navigation.navigate('Result', { nodeid: item.nodeid, nodenm: item.nodenm })}/*ref.current.clearSearch()*/ >
    <View style={styles.row}>

      {/* 아이콘 */}
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name={"bus-stop"} size={40} color='#77dd77' />
      </View>

      {/* 텍스트 */}
      <Text style={styles.text}>{item.nodenm}</Text>

      {/* 즐겨찾기 버튼 */}
      <Bookmark data = {{item, key:"busStopBookmarkData"}}/>
    </View>
  </TouchableOpacity>, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style = {styles.inputScreen}>
        <TextInput
          style={styles.textInput}
          ref={searchRef}
          placeholder="정류장을 검색하세요."
          onChangeText={(text) => searchData(text)}
          touch={searchVal}
        />
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        initialNumToRender={10}
        removeClippedSubviews={true}
      />
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 10,
    height: 10,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
  },

  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
  },

  inputScreen: {
    paddingVertical: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#29b6f6",
  },

  textInput: {
    width: "95%",
    height: 40,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15, 
    fontSize: 16,
},

  iconContainer: {
    // backgroundColor: '#77dd77',
    padding: 7,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 15,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
});
