import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";
import CategoryCard from "../components/CategoryCard";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const categoryResponse = await fetch(
        "http://10.126.10.237:3000/api/categories"
      );
      if (categoryResponse.ok) {
        const data = await categoryResponse.json();
        setCategories(data);
      } else {
        console.error("Error fetching categories");
      }
      const categoriesData = await categoryResponse.json();
      setCategories(categoriesData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <SafeAreaView>
      <SafeAreaView>
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            style={categoryList.item}
          />
        ))}
      </SafeAreaView>
    </SafeAreaView>
  );
};

const categoryList = StyleSheet.create({
  container: {
    flex: 1, // Fill the available space
    backgroundColor: "black", // Background color
    justifyContent: "center", // Center children vertically
    alignItems: "center", // Center children horizontally
    flexWrap: "wrap",
    flexDirection: "row",
    marginHorizontal: "auto",
    paddingVertical: "auto",
    width: 400,
  },
  item: {
    minWidth: 100,
    maxWidth: 100,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryPage;
