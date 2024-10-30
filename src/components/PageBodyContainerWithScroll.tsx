import { ScrollView, StyleSheet, View } from 'react-native';
import 'react-native-reanimated';
import React from 'react';
import { observer } from 'mobx-react-lite';
import themeStore from '@/src/store/theme/themeStore';

interface IPageBodyContainerWithScrollProps {
  children: React.ReactNode;
}

const PageBodyContainerWithScroll: React.FC<
  IPageBodyContainerWithScrollProps
> = ({ children }) => {
  const {
    theme: { mainWhite },
  } = themeStore;
  const styles = s(mainWhite);

  return (
    <View style={styles.pageContainer}>
      <ScrollView contentContainerStyle={styles.scrollWrp}>
        {children}
      </ScrollView>
    </View>
  );
};

const s = (mainBg: string) =>
  StyleSheet.create({
    pageContainer: {
      backgroundColor: mainBg,
      height: '100%',
      flex: 1,
      paddingLeft: 10,
      paddingRight: 4,
    },
    scrollWrp: {
      paddingBottom: 70,
      paddingRight: 6,
    },
  });

export default observer(PageBodyContainerWithScroll);
