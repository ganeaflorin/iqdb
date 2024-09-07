import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: '#fff',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.light.background,
          borderTopColor: '#fff',
          borderTopWidth: 2,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Vizualizează',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? 'book' : 'book-outline'}
              color={'#fff'}
            />
          ),
          tabBarLabelStyle: { color: '#fff', paddingBottom: 10 },
        }}
      />
      <Tabs.Screen
        name='add'
        options={{
          title: 'Adaugă',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? 'add-circle' : 'add-circle-outline'}
              color={'#fff'}
            />
          ),
          tabBarLabelStyle: { color: '#fff', paddingBottom: 10 },
        }}
      />
    </Tabs>
  );
}
