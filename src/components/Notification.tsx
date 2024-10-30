import { Text } from 'react-native';
import 'react-native-reanimated';
import themeStore from '@/src/store/theme/themeStore';
import { observer } from 'mobx-react-lite';
import React from 'react';

type TNotification = 'info' | 'warning' | 'error';

interface INotificationProps {
  text: string;
  type?: TNotification;
}

const Notification: React.FC<INotificationProps> = ({
  text,
  type = 'error',
}) => {
  const {
    theme: {
      mainDarkRed,
      mainMediumRed,
      mainWhite,
      mainMediumGreen,
      mainDarkGreen,
    },
  } = themeStore;

  let mediumCol = '';
  let darkCol = '';

  if (type === 'error') {
    mediumCol = mainMediumRed;
    darkCol = mainDarkRed;
  } else if (type === 'info') {
    mediumCol = mainMediumGreen;
    darkCol = mainDarkGreen;
  }

  return (
    <Text
      style={{
        padding: 10,
        borderRadius: 5,
        backgroundColor: mediumCol,
        borderColor: darkCol,
        borderWidth: 1,
        borderStyle: 'solid',
        color: mainWhite,
        fontSize: 18,
      }}
    >
      {text}
    </Text>
  );
};

export default observer(Notification);
