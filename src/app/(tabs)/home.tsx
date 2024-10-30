import { View, Image, StyleSheet, Dimensions, Text } from 'react-native';
import { observer } from 'mobx-react-lite';
import themeStore from '@/src/store/theme/themeStore';
import { shopDescription } from '@/src/constants/shopDescription';
import PageBodyContainer from '@/src/components/PageBodyContainerWithScroll';

const HomeScreen = observer(() => {
  const {
    theme: { mainGray },
  } = themeStore;
  const styles = s(mainGray);

  const screenWidth = Dimensions.get('window').width;
  const imageWidth = screenWidth * 0.8;
  const imageHeight = (imageWidth / 251) * 200;

  return (
    <PageBodyContainer>
      <View>
        <Text style={styles.title}>Our Shop</Text>
      </View>
      <View style={styles.imgWrp}>
        <Image
          source={require('@/assets/images/shop.png')}
          style={{ width: imageWidth, height: imageHeight }}
        />
      </View>
      <Text style={styles.description}>{shopDescription}</Text>
    </PageBodyContainer>
  );
});

const s = (mainText: string) =>
  StyleSheet.create({
    title: {
      paddingTop: 35,
      fontSize: 50,
      textAlign: 'center',
      paddingBottom: 20,
      color: mainText,
    },
    imgWrp: {
      width: '100%',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    description: {
      color: mainText,
      fontSize: 17,
      textAlign: 'justify',
      lineHeight: 24,
    },
  });

export default HomeScreen;
