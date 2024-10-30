import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import Layout from '@/src/components/Layout';
import StartLoader from '@/src/components/CenteredLoader';
import Header from '@/src/components/Header';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return (
      <Layout>
        <StartLoader />
      </Layout>
    );
  }

  return (
    <Layout>
      <Stack screenOptions={{ headerShown: true, header: () => <Header /> }}>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </Layout>
  );
}
