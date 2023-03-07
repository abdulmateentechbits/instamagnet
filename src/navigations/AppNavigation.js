/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import { AppStyles } from '../AppStyles';
import Splash from '../screens/SplashScreen';
import MediaLists from '../screens/Media/MediaLists';


const Stack = createNativeStackNavigator();

// Welcome stack
const WelcomeStack = () => (
    <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
            // headerTintColor: 'red',
            // headerTitleStyle: styles.headerTitleStyle,
            // headerMode: 'float',
        }}>
        <Stack.Screen
            name="Welcome"
            options={{
                title: 'Welcome',
                headerShown: false,
            }}
            component={WelcomeScreen}
        />
    </Stack.Navigator>
);

const HomeStack = () => (
    <Stack.Navigator
        initialRouteName="Home">
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
                headerShown:false,
                title:'Home',
                headerTitleStyle:{color:'black'}
            })}
        />
    </Stack.Navigator>
);
const DownLoadStack = () => (
    <Stack.Navigator
        initialRouteName="Download">
        <Stack.Screen
            name="Download"
            component={MediaLists}
            options={({ navigation }) => ({
                headerShown:false,
                title:'Download',
                headerTitleStyle:{color:'black'}
            })}
        />
    </Stack.Navigator>
);

const TopTab = createMaterialTopTabNavigator();

const TabNavigator = () => (
    <TopTab.Navigator
        initialRouteName="Home" >
        <TopTab.Screen
            name="HomeStack"
            component={HomeStack}
        />
        <TopTab.Screen
            name="DownLoadStack"
            component={DownLoadStack}
        />
    </TopTab.Navigator>
);


// Manifest of possible screens
const RootNavigator = () => (
    <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="WelcomeStack" component={WelcomeStack} />
        <Stack.Screen name="TopTab" component={TabNavigator} />
    </Stack.Navigator>
);

const AppNavigator = () => (
    <NavigationContainer>
        <RootNavigator />
    </NavigationContainer>
);

const styles = StyleSheet.create({
    headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        color: 'black',
    },
    iconStyle: { tintColor: AppStyles.color.tint, width: 30, height: 30 },
});

export default AppNavigator;
