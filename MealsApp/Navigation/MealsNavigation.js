import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation/bottom-tabs';
import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoriesMeals from '../Screens/CategoriesMeals';
import MealDetailScreen from '../Screens/MealDetailScreen';
import FavouritesScreen from '../Screens/FavouritesScreen';
import {Platform} from 'react-native';


const MealsNavigation = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoriesMeals,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? '#4a148c' : 'white',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : '#4a148c',
    },
  },
);
export default createAppContainer(MealsNavigation);