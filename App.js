import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { LinearGradient } from 'expo-linear-gradient';

// Navigation Libraries
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';

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
                // Dynamically set options using a function, instead we can do this in MealsOverviewScreen.jsx
                // options={({ route, navigation }) => {
                //   const categoryId = route.params.id
                //   return {
                //     title: categoryId,
                //   }
                // }}
              />
              <Stack.Screen name="MealDetails"
                component={MealDetailsScreen}
                // Only Render UI In the Headert his way if it does not need to interact with the Screen
                //-it's rendered on. Instead, create the header button inside the screen component itself.
                // options={{
                //   headerRight: ()=> {
                //     return <Button title='Tap Me' onPress={}/>
                //   }
                // }}
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
