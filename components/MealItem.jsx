import { StyleSheet, View, Text } from "react-native";

export default function MealItem({mealData}) {
    console.log('---');
    console.log(mealData)
    return (
    <View>
        <Text>{mealData.title}</Text>
    </View>
    );
}

const Styles = StyleSheet.create({


});

