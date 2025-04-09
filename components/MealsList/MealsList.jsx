import { View, StyleSheet, FlatList } from 'react-native'
import React from 'react'

import MealItem from './MealItem';

export default function MealsList({meals}) {

    function renderMealItem(mealData) {
        const item = mealData.item;

        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            duration: item.duration,
            complexity: item.complexity,
        };

        return (
            <View>
                <MealItem {...mealItemProps /*Each property in mealItemProps is passed as an individual prop */} />
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