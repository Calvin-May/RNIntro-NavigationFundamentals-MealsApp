import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

export default function MealsOverviewScreen() {
    return (
        <View style={Styles.container}>
            <Text> Meals Overview Screen</Text>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});