import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
export default function MealDetailsScreen({ route }) {
    const MEAL_ID = route.params.mealId;

    const meal = MEALS.find((meal) => meal.id === MEAL_ID);

    
    return (
        <View style={STYLES.screen}>
            <Text>{meal.title}</Text>
        </View>
    );
}

const STYLES = StyleSheet.create({
    screen: {
        flex: 1,
    },
});