import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CategoryText from "../components/home/CategoryText";
import Color from "../Shared.js/Color";
import { Ionicons } from "@expo/vector-icons";
import TopHeadline from "../components/home/TopHeadline";
import Headlinelist from "../components/home/Headlinelist";
import GlobalAPI from "../Services/GlobalAPI";

function Home() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    // getTopicHeadline();
    getNewsCategory('latest');
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

  const getNewsCategory = async (category) => {
    try {
      const categoryData = await GlobalAPI.getByCategory(category); // Use correct function name
      setNewsList(categoryData.articles);
    } catch (error) {
      console.error("Error fetching category:", error.message);
    }
  };

  return (
    <ScrollView style={{ backgroundColor: Color.white }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginRight: 10,
        }}
      >
        <Text style={styles.appName}>MR News Page</Text>
        <Ionicons name="notifications-outline" size={25} color="black" />
      </View>

      <CategoryText  selectCategory={(category) => getNewsCategory(category)}/>
      <TopHeadline />
      <Headlinelist />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appName: {
    fontSize: 25,
    fontWeight: "bold",
    color: Color.primary,
    padding: 10,
  },
});

export default Home;
