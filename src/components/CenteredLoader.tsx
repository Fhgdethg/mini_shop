import { ActivityIndicator, StyleSheet, View } from 'react-native';
import 'react-native-reanimated';
import themeStore from '@/src/store/theme/themeStore';
import { observer } from 'mobx-react-lite';

const CenteredLoader = () => {
  const { theme } = themeStore;

  return (
    <View style={s.wrapper}>
      <ActivityIndicator size={100} color={theme.mainBlue} />
    </View>
  );
};

const s = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default observer(CenteredLoader);
