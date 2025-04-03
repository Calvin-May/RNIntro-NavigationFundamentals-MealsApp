import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { LinearGradient } from 'expo-linear-gradient';

// Navigation Libraries
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

//Navigation Configuration
const Stack = createStackNavigator();

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
          <NavigationContainer>
            <Stack.Navigator 
              initialRouteName="MealCategories"
              screenOptions={{ // Set Global Screen Options
                headerStyle: {backgroundColor: '#ffffff'},
                headerTintColor: '#000000',
                //contentStyle: { backgroundColor: '#555123' } // Doesn't Work
                cardStyle: {backgroundColor: '#555123'}
              }}
            >
              <Stack.Screen name="MealCategories" 
                component={CategoriesScreen} 
                options={{
                  title: 'Meal Categories',
                  //headerStyle: {backgroundColor: '#ffffff'},
                  //headerTintColor: '#000000',
                  //backgroundColor: '#ffffff'
                }} 
                />
              <Stack.Screen name="MealsOverview" 
                component={MealsOverviewScreen} 
                options={{
                  title: 'Meals'
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
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
