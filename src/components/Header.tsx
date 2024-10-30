import React, {useCallback, useRef} from "react";
import { Animated, StyleSheet, Switch, Text, View } from "react-native";
import { darkMode } from "@/src/constants/darkMode";
import { lightMode } from "@/src/constants/lightMode";
import {MaterialIcons} from "@expo/vector-icons";
import {observer} from "mobx-react-lite";
import themeStore from "@/src/store/theme/themeStore";
import {ITheme} from "@/src/store/theme/themeTypes";

const Header = observer(() => {
  const backgroundColor = useRef(new Animated.Value(0)).current;

  const { mode, theme, changeThemeMode } = themeStore;
  const styles = s(theme);
  const isDark = mode === 'dark';


  const switchHandler = useCallback(() => {
    const newModeObj = isDark ? lightMode: darkMode;

    Animated.timing(backgroundColor, {
      toValue: mode === 'light' ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();

    const newMode = isDark ? 'light' : 'dark';

    changeThemeMode(newMode, newModeObj);
  }, [theme, isDark, backgroundColor, mode]);

  const interpolatedBackgroundColor = backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.modeValues.basic, theme.modeValues.basic],
  });

  return (
    <Animated.View style={[styles.headerWrp, { backgroundColor: interpolatedBackgroundColor }]}>
      <Text style={styles.logo}>
        Mini Shop
      </Text>
      <View style={styles.modeWrapper}>
        <MaterialIcons
          name={mode === 'light' ? 'brightness-7' : 'nights-stay'}
          size={26}
          color={isDark ? theme.mainBlue : theme.mainYellow}
        />
        <Switch value={isDark} onValueChange={switchHandler}
          trackColor={{
            false: theme.mainGray,
            true: theme.mainBlue,
          }}
          thumbColor={mode === 'dark' ? theme.mainGray : theme.mainBlue}
          style={styles.modeSwitch}
        />
      </View>
    </Animated.View>
  );
})

const s = (theme: ITheme) => (StyleSheet.create({
  headerWrp: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    elevation: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 28,
    color: theme.mainBlue,
    fontFamily: 'Roboto',
    lineHeight: 28,
  },
  modeWrapper: {
    flexDirection: 'row',
    gap: 6,
    alignItems: "center",
  },
  modeSwitch: {
    transform: [{ scale: 1.3 }],
  }
}));

export default Header;

