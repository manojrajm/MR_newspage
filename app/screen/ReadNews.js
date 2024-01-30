import React, { useEffect } from "react";
import { Image, Share, Text, TouchableOpacity, View } from "react-native";
import {useNavigation, useRoute } from "@react-navigation/native";
import Color from "../Shared.js/Color";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

function ReadNews() {
  const news = useRoute().params.news;
  const navigation = useNavigation();
  const shareNews=()=>{
    Share.share({
        message:news.title+"\n Readmore"+news.description
    })
  }

  useEffect(() => {
    console.log(news);
  }, [news]);

  return (
    <View style={{ margin: 20, backgroundColor: Color.white, flex: 1,height:'auto' }}>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>shareNews()}>
          <Entypo name="share-alternative" size={25} color="black" />
        </TouchableOpacity>
      </View>

      <Image
        source={{ uri: news.urlToImage }}
        style={{ width: "100%", height: 300, borderRadius: 10, marginTop: 20 }}
      />

      <Text
        numberOfLines={3}
        style={{ marginTop: 10, fontSize: 25, fontWeight: "bold" }}
      >
        {news.title}
      </Text>
      <Text
        style={{
          marginTop: 10,
          color: Color.primary,
          fontWeight: "600",
          fontSize: 16,
        }}
      >
        {news?.source?.name}
      </Text>

      <Text
        style={{
          marginTop: 10,
          color: Color.gray,
          fontSize: 15,
          lineHeight: 30,
        }}
      >
        {news.description}
      </Text>
    </View>
  );
}

export default ReadNews;
