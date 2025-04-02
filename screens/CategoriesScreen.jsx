import { FlatList, StyleSheet, View } from "react-native";

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from "../components/CategoryGridTile";

function renderCategoryItem(item) {
    return (
        <View style={Styles.grid}>
        <CategoryGridTile title={item.title} color={item.color} />
        </View>
    );
}

export default function CategoriesScreen() {

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