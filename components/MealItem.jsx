import { StyleSheet, Pressable, Image, View, Text } from "react-native";

export default function MealItem({title, imageUrl, affordability, duration, complexity}) {
    return (
    <View style={Styles.mealItemContainer}>
        <Pressable>
            <View>
            <Image style={Styles.imageStyle} source={{uri: imageUrl}} />
                <Text style={Styles.title}>{title}</Text>
            </View>
            <View style={Styles.details}>
                <Text><Text style={Styles.detailsHighlight}>Cook Time:</Text> {duration}m</Text>
                <Text><Text style={Styles.detailsHighlight}>Difficulty:</Text> {complexity.toUpperCase()}</Text>
                <Text><Text style={Styles.detailsHighlight}>Cost:</Text> {affordability.toUpperCase()}</Text>
            </View>
        </Pressable>
    </View>
    );
}

const Styles = StyleSheet.create({
    mealItemContainer: {
        marginBottom: 20,
        paddingBottom: 12,
        borderWidth: 1,
        borderRadius: 8,
        overflow: 'hidden',
    },
    imageStyle: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8
    },
    detailsHighlight: {
        fontWeight: 'bold',
        
    }
});

