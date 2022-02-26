import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummyData';

const CategoriesMeals = props => {
  const renderMealItem = itemdata => {
    return (
      <View>
        <Text>{itemdata.item.title}</Text>
      </View>
    );
  };

  const catId = props.navigation.getParam('categoryId'); //CategoryId from CategoriesScreen
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0,
  );
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}></FlatList>
    </View>
  );
};

CategoriesMeals.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    jsutifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesMeals;
