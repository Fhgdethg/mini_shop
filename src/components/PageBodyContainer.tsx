import { StyleSheet, View } from 'react-native';
import 'react-native-reanimated';
import React from 'react';
import { observer } from 'mobx-react-lite';
import themeStore from '@/src/store/theme/themeStore';

interface IPageBodyContainerProps {
  children: React.ReactNode;
}

const PageBodyContainer: React.FC<IPageBodyContainerProps> = ({ children }) => {
  const {
    theme: { mainWhite },
  } = themeStore;
  const styles = s(mainWhite);

  return <View style={styles.pageContainer}>{children}</View>;
};

const s = (mainBg: string) =>
  StyleSheet.create({
    pageContainer: {
      backgroundColor: mainBg,
      height: '100%',
      flex: 1,
      paddingHorizontal: 10,
    },
  });

export default observer(PageBodyContainer);
