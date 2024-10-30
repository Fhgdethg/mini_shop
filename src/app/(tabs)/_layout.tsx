import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import TabBarLabel from '@/src/components/TabBarLabel';
import Header from '@/src/components/Header';
import { observer } from 'mobx-react-lite';
import themeStore from '@/src/store/theme/themeStore';

const TabsLayout = () => {
  const { theme } = themeStore;
  const styles = s(theme.modeValues.basic);

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.tabBar,
        headerShown: true,
        header: () => <Header />,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons
              name="home"
              size={size}
              color={focused ? theme.mainBlue : theme.mainGray}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <TabBarLabel text="Home" isFocused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="products/index"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons
              name="store"
              size={size}
              color={focused ? theme.mainBlue : theme.mainGray}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <TabBarLabel text="Products" isFocused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="basket"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons
              name="shopping-cart"
              size={size}
              color={focused ? theme.mainBlue : theme.mainGray}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <TabBarLabel text="Basket" isFocused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

const s = (bgColor: string) =>
  StyleSheet.create({
    tabBar: {
      backgroundColor: bgColor,
      borderTopWidth: 1,
      borderTopColor: 'rgba(0,0,0,0.1)',
      height: 62,
      paddingTop: 6,
      paddingBottom: 6,
      paddingHorizontal: 2,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
  });

export default observer(TabsLayout);
