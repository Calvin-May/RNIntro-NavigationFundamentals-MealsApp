import { StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";
import MealsList from "../components/MealsList/MealsList";

export default function MealsOverviewScreen({ navigation, route }) {

    const categoryData = route.params;
    const meals = MEALS.filter((mealItem) => { 
        return mealItem.categoryIds.indexOf(categoryData.id) >= 0;
        //return 0
    });

    // useLayoutEffect is used to set the title before the first render,
    //-if we used useEffect, the screen would render with the generic title first,
    //-fire off the useEffect, and rerender with the new title
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryData.id).title
        
        navigation.setOptions({title: categoryTitle});
    },[navigation, categoryData]);

    return <MealsList meals={meals} />
   
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});