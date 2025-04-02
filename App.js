import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <LinearGradient 
        colors={['sienna', '#162E44', '#091724']}
        start={{x: 0, y: 0}}
        end={{x: 0.6, y: 0.5}}
        style={Styles.screen}
      >
        <View style={Styles.container}>
          <CategoriesScreen />
        </View>
      </LinearGradient>
    </>
  );
}

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 40
  },
});
