import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { COLORS } from "../../../constants";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
        tabBarActiveTintColor: COLORS.primary,
        headerShown: false,
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarShowLabel: false,
        tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 1,
            borderTopColor: '#F0F0F0',
            height: 60,
            paddingTop: 8
        } 
         }}>
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />
          ) 
        }} 
      />
      <Tabs.Screen 
        name="favorites" 
        options={{ 
          title: "Favorites",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "heart" : "heart-outline"} size={24} color={color} />
          ) 
        }} 
      />
      <Tabs.Screen 
        name="cart" 
        options={{ 
          title: "Cart",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "cart" : "cart-outline"} size={24} color={color} />
          ) 
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "person" : "person-outline"} size={24} color={color} />
          ) 
        }} 
      />
    </Tabs>
  );
}
