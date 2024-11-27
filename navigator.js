import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Import your ProfileScreen with full functionality
import ProfileScreen from './Screen/ProfileScreen';

// Home Screen
function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Text>Home Screen</Text>
    </View>
  );
}

// Task List Screen
function TaskListScreen() {
  return (
    <View style={styles.screen}>
      <Text>Task List Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Enable the header
        headerShown: true,
        // Set the title for the header dynamically based on the route name
        headerTitle: route.name,
        // Customize the header style
        headerStyle: {
          backgroundColor: '#26437a', // Set your preferred background color
        },
        headerTitleStyle: {
          color: '#fff', // Set text color
          fontSize: 18,
          fontWeight: 'bold',
        },
        headerTintColor: '#fff', // Color for back icon or title
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Task List') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Task List" component={TaskListScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
