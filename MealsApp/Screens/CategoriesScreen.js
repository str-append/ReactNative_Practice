import React from 'react';
import {FlatList} from 'react-native';
import {CATEGORIES} from '../data/dummyData';
import CategoryGridTile from '../Components/CategoryGridTile';

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {categoryId: itemData.item.id}, //passing CategoryId to CategoriesMeals.js
          }); 
        }}
        color={itemData.item.color}
      />
    );
  };
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}></FlatList>
  );
};
CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
};

export default CategoriesScreen;

// <TouchableOpacity
//   onPress={() => {
//     props.navigation.navigate({
//       routeName: 'CategoryMeals',
//       params: {categoryId: itemData.item.id},
//     });
//   }}
//   style={styles.grid}>
//   <View>
//     <Text>{itemData.item.title}</Text>
//   </View>
// </TouchableOpacity>
