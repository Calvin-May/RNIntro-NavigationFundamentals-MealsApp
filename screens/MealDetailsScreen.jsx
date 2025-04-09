import { StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Subtitle";
import List from "../components/List";
import IconButton from "../components/IconButton";

import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../store/redux/favourites";

export default function MealDetailsScreen({ route, navigation }) {

    const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);
    const dispatch = useDispatch();

    const MEAL_ID = route.params.mealId;
    const meal = MEALS.find((meal) => meal.id === MEAL_ID);

    const mealIsFavourite = favouriteMealIds.includes(MEAL_ID);

    function changeFavouriteStatusHandler() {
        mealIsFavourite ? 
            dispatch(removeFavourite({id: MEAL_ID})) : 
            dispatch(addFavourite({id: MEAL_ID}));
    }
    useLayoutEffect(() => {
        navigation.setOptions({headerRight: () => {
            return (
                <View style={STYLES.headerButtonContainer}>
                    <IconButton 
                        colour='#EC9C06' 
                        onPress={changeFavouriteStatusHandler} 
                        icon= {mealIsFavourite ? 'star-sharp' : 'star-outline'} 

                        />

                </View>
            )    
    }
    })
    },[navigation, changeFavouriteStatusHandler])



    
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
    },
    headerButtonContainer: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 12
    }
});