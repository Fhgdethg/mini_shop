import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import themeStore from '@/src/store/theme/themeStore';
import { ITheme } from '@/src/store/theme/themeTypes';
import { observer } from 'mobx-react-lite';

interface ITabBarLabelProps {
  isFocused: boolean;
  text: string;
}

const TabBarLabel: React.FC<ITabBarLabelProps> = ({ isFocused, text }) => {
  const { theme } = themeStore;
  const styles = s(isFocused, theme);

  return <Text style={styles.tabBarLabel}>{text}</Text>;
};

const s = (isFocused: boolean, theme: ITheme) =>
  StyleSheet.create({
    tabBarLabel: {
      color: isFocused ? theme.mainBlue : theme.mainGray,
    },
  });

export default observer(TabBarLabel);
