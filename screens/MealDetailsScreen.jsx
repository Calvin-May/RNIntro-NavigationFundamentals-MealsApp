import { StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Subtitle";
import List from "../components/List";

export default function MealDetailsScreen({ route }) {
    const MEAL_ID = route.params.mealId;

    const meal = MEALS.find((meal) => meal.id === MEAL_ID);

    
    return (
            <View style={STYLES.card}>
            <View style={STYLES.imageContainer}>
                <Image source={{uri: meal.imageUrl}} style={STYLES.image} />
            </View>
            <View style={STYLES.separator}></View>
            <Text style={STYLES.title}>{meal.title}</Text>
            <View>
                <MealDetails 
                    affordability={meal.affordability} 
                    duration={meal.duration} 
                    complexity={meal.complexity} 
                    textStyleOverride={STYLES.detailTextStyle}
                />
            </View>
            <View style={STYLES.contentContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List listData={meal.ingredients} />
            </View>
            <View style={STYLES.contentContainer}>
                <Subtitle>Steps</Subtitle>
                <List listData={meal.steps} listType='steps'/>
            </View>
            </View>
    );
}

const STYLES = StyleSheet.create({
    screen: {
        flex: 1,
    },
    card: {
        flex: 1,
        margin: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        elevation: 14,
        //IOS Shadow
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
    },
    imageContainer: {
        margin: 12,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
        overflow: 'hidden',
        backgroundColor: '#ffffff'
        
    },
    image: {
        width: '100%',
        height: 250,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        marginTop: 2,
        textAlign: 'center',
        color: '#000000'
    },
    detailTextStyle: {
        color: '#000000'
    },
    contentContainer: {
        flex: 1,
        margin: 6,
        paddingHorizontal: 6,
    },
    textStyle: {
        fontSize: 16,
        color: '#444343',
        marginBottom: 4
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#1D1D1D',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        marginHorizontal: 100      
    }
});