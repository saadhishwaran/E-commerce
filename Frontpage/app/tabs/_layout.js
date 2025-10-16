import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Optional for icons

export default function TabLayout() {
  return (
     <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: '#ff3366',
      
      }}
    >
 
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={28} />
          ),
        }}
      />
       <Tabs.Screen
        name="wishlist"
        options={{
          title: 'wishlist',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={28} />
          ),
        }}
      />
       <Tabs.Screen
        name="addtocart"
        options={{
          title: 'addtocart',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" color={color} size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={28} />
          ),
        }}
      />
       <Tabs.Screen
        name="settings"
        options={{
          title: 'settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={28} />
          ),
        }}
      />
    </Tabs>
  );
}
