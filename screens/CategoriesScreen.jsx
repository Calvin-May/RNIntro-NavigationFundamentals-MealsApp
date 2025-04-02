import { FlatList, StyleSheet, View } from "react-native";

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen({ navigation }) {

    function renderCategoryItem(item) {

        function categoryTilePressHandler() {
            navigation.navigate('MealsOverview');
        }

        return (
            <View style={Styles.grid}>
            <CategoryGridTile 
                title={item.title} 
                color={item.color} 
                onPress={categoryTilePressHandler} 
            />
            </View>
        );
    }

    return (
        <View>
            <FlatList 
                data={CATEGORIES}
                keyExtractor={(itemData) => itemData.id}
                renderItem={(itemData) => renderCategoryItem(itemData.item)}
                numColumns={2}
                overScrollMode="always"
            />
        </View>
    );
}

const Styles = StyleSheet.create({
    grid: {
        flex: 1,
        
    }
})