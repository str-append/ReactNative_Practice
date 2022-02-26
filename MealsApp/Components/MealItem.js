import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const MealItem = props => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={styles.mealRow}>
            <Text>{itemdata.item.title}</Text>
          </View>
        </View >
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({});

export default MealItem;
