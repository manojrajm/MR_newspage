import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import Color from '../../Shared.js/Color';
import { useNavigation } from "@react-navigation/native";


function Headlinelist() {
  const navigation = useNavigation();

  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    getTopicHeadline();
  }, []);

  const getTopicHeadline = async () => {
    try {
      const apiKey = "3cdb509afdb2460391031d768d55bdb5";
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch headlines");
      }

      const result = await response.json();
      setNewsList(result.articles);
    } catch (error) {
      console.error("Error fetching headlines:", error.message);
    }
  };

  return (
    <View style={{ margin: 10, marginTop: 20 }}>
      <FlatList
        data={newsList}
        renderItem={({ item }) => (
          <React.Fragment>
            <TouchableOpacity  onPress={() => navigation.navigate("readnews", { news: item })}style={{ marginTop: 16, display: 'flex', flexDirection: 'row' }}>
              <Image source={{ uri: item.urlToImage }} style={{ width: 150, height: 150, borderRadius: 10 }} />
              <View style={{ marginLeft: 10, marginRight: 140 }}>
                <Text numberOfLines={4} style={{ fontSize: 16, fontWeight: '800' }}>{item.title}</Text>
                <Text style={{ color: Color.primary, marginTop: 5, fontWeight: '700' }}>{item?.source?.name}</Text>
              </View>
            </TouchableOpacity>
            <View style={{ height:2, backgroundColor: Color.lightGray,marginTop:10,marginLeft:10 }}></View>
          </React.Fragment>
        )}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
}

export default Headlinelist;
