import { TouchableOpacity } from 'react-native';
import 'react-native-reanimated';
import themeStore from '@/src/store/theme/themeStore';
import { observer } from 'mobx-react-lite';
import React from 'react';

interface IBtnProps {
  children: React.ReactNode;
  onPress: () => void;
}

const Btn: React.FC<IBtnProps> = ({ children, onPress }) => {
  const {
    theme: { mainBlue },
  } = themeStore;

  return (
    <TouchableOpacity
      style={{
        backgroundColor: mainBlue,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 2,
      }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

export default observer(Btn);
