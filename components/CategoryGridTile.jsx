import { Pressable, StyleSheet, View, Text, Platform } from "react-native";

export default function CategoryGridTile({title, color, onPress}) {
    return (
        <View style={[Styles.gridItem, {backgroundColor: color}]}>
            <Pressable 
                android_ripple={{color: '#00000034'}} 
                //Destructure pressed from style function, used to insert additional style when button is pressed
                style={({pressed}) => [Styles.button, pressed ? Styles.buttonPressed : null]}
                onPress={onPress}
                >
                <View style={Styles.innerContainer}>
                    <Text style={Styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}


const Styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin : 16,
        height: 150,
        borderRadius: 8,
        elevation: 12,   
        shadowColor: '#000000',
        //IOS Shadow
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        backgroundColor: '#FFFFFF',
        // Prevent android_ripple for going over corners of button container
        overflow: Platform.OS === 'ios' ? "visible" : 'hidden'  
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        boxShadow: '0px 0px 12px -1px inset',

    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    }
});