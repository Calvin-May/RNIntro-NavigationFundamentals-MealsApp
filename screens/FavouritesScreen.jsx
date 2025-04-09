import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { MEALS } from "../data/dummy-data";
import MealsList from '../components/MealsList/MealsList'
import { FavouritesContext } from '../store/context/favourites-context';


export default function FavouritesScreen() {

  const FavouriteMealsCtx = useContext(FavouritesContext)

  const FavouriteMeals = MEALS.filter(meal => FavouriteMealsCtx.ids.includes(meal.id));

  if (FavouriteMeals.length === 0) {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>
          You have no favourite meals yet!
        </Text>
      </View>
    );
  }
  else {
    return (
      <MealsList meals={FavouriteMeals} />
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff'
  }
});