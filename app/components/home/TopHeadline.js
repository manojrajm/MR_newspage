import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Color from "../../Shared.js/Color";

function TopHeadline() {
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
    <View style={{ marginTop: 15, marginLeft: 15 }}>
      <FlatList
        horizontal
        data={newsList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("readnews", { news: item })}
            style={{
              marginRight: 25,
              width: Dimensions.get("screen").width * 0.85,
            }}
          >
            <Image
              source={{ uri: item.urlToImage }}
              style={{
                height: Dimensions.get("screen").width * 0.74,
                borderRadius: 10,
              }}
            />
            <Text style={{ marginTop: 5, color: Color.primary, fontWeight: "600" }}>
              {item?.source?.name}
            </Text>
            
             <Text numberOfLines={3}style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.url}
      />
    </View>
  );
}

export default TopHeadline;
