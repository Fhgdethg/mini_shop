import { StyleSheet } from 'react-native';
import { SafeAreaView, StatusBar } from 'react-native';
import 'react-native-reanimated';
import React from 'react';
import { observer } from 'mobx-react-lite';
import themeStore from '@/src/store/theme/themeStore';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const {
    theme: { mainWhite },
  } = themeStore;
  const styles = s(mainWhite);

  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={styles.mainArea}>{children}</SafeAreaView>
    </>
  );
};

const s = (mainBg: string) =>
  StyleSheet.create({
    mainArea: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: mainBg,
    },
  });

export default observer(Layout);
