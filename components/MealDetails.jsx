import { StyleSheet, View, Text } from "react-native";

export default function MealDetails({duration, complexity, affordability, styleOverride, textStyleOverride}) {

    return (
        <View style={[STYLES.details, styleOverride]}>
            <Text style={[textStyleOverride]}><Text style={[STYLES.detailsHighlight, textStyleOverride]}>Cook Time:</Text> {duration}m</Text>
            <Text style={[textStyleOverride]}><Text style={[STYLES.detailsHighlight, textStyleOverride]}>Cost:</Text> {affordability.toUpperCase()}</Text>
            <Text style={[textStyleOverride]}><Text style={[STYLES.detailsHighlight, textStyleOverride]}>Difficulty:</Text> {complexity.toUpperCase()}</Text>
        </View>
    );
}

const STYLES = StyleSheet.create({
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8
    },
    detailsHighlight: {
        fontWeight: 'bold',
        
    },
});