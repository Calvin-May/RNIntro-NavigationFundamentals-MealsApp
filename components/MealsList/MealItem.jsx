import { StyleSheet, Pressable, Image, View, Text, Platform } from "react-native";
import MealDetails from "../MealDetails";
import { useNavigation } from "@react-navigation/native";

export default function MealItem({id, title, imageUrl, affordability, duration, complexity, onPress}) {
    
    const navigation = useNavigation();
    
    function onMealItemPress() {
        navigation.navigate('MealDetails', {mealId: id});
    }
    
    return (
    <View style={Styles.mealItemContainer}>
        <Pressable
            onPress={onMealItemPress}
            android_ripple={{color: '#00000034', foreground: true}} 
            //Destructure pressed from style function, used to insert additional style when button is pressed
            style={({pressed}) => [Styles.button, pressed ? Styles.buttonPressed : null]}
        >
            <View style={Styles.innerContainer}> 
                <View>
                    <Image style={Styles.imageStyle} source={{uri: imageUrl}} />
                    <Text style={Styles.title}>{title}</Text>
                </View>
                <MealDetails affordability={affordability} duration={duration} complexity={complexity} />
            </View>
        </Pressable>
    </View>
    );
}

const Styles = StyleSheet.create({
    mealItemContainer: {
        marginBottom: 24,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000000',
        backgroundColor: '#FFFFFF',
        //IOS Shadow
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        // Prevent android_ripple for going over corners of button container
        overflow: Platform.OS === 'ios' ? "visible" : 'hidden'  
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
        paddingBottom: 12
    },
    imageStyle: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        boxShadow: '0px 0px 12px -4px inset',
    },
});

