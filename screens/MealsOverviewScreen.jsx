import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { FlatList } from "react-native-gesture-handler";
import MealItem from "../components/MealItem";

export default function MealsOverviewScreen({ navigation, route }) {

    const categoryData = route.params;

    console.log(categoryData);

    const meals = MEALS.filter((mealItem) => { 
        return mealItem.categoryIds.indexOf(categoryData.id) >= 0;
        //return 0
    });

    function renderMealItem(mealData) {
        const item = mealData.item;
        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability : item.affordability,
            duration: item.duration,
            complexity: item.complexity
        };

        return (
            <View>
                <MealItem {...mealItemProps /*Each key/value pair in mealItemProps is passed as an individual prop */}/>
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