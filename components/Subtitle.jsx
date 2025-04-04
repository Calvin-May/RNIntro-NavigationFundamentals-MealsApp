import { StyleSheet, Text } from "react-native";

export default function Subtitle({children}) {
    return <Text style={STYLES.subTitle}>{children}</Text>
}

const STYLES = StyleSheet.create({
subTitle: {
        fontSize: 20,
        marginBottom: 6,
        fontWeight: 'bold',
        color: '#444343',
        borderBottomWidth: 2,
        borderBottomColor: '#444343'
    },
});