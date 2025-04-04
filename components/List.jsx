import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';


export default function List({listData, listType}) {
    
    function renderListItem(item) {
        return (
            <Text style={STYLES.textStyle}>
            {
                listType === 'steps' ? 
                `${item.index +1}. ${item.item}` : 
                `${item.item}`
            }
            </Text>
        )
    
    }
    
    return (
        <FlatList 
            data={listData}
            key={(item, index) => index}
            renderItem={renderListItem}
            scrollEnabled
            
        />
    );
}

const STYLES = StyleSheet.create({
    textStyle: {
        fontSize: 16,
        color: '#000000',
        marginBottom: 6
    },
});