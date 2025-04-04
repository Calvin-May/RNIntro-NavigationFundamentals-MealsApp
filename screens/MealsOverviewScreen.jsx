import { View, Text, StyleSheet, FlatList } from "react-native";
import { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

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

    
    function renderMealItem(mealData) {
        const item = mealData.item;

        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability : item.affordability,
            duration: item.duration,
            complexity: item.complexity,
            navigation: navigation
        };

        return (
            <View>
                <MealItem {...mealItemProps /*Each property in mealItemProps is passed as an individual prop */}/>
            </View>
        );
    }

    return (
        <View style={Styles.container}>
            <FlatList 
                data={meals}
                keyExtractor={(mealItem) => mealItem.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});