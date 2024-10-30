import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-reanimated';
import themeStore from '@/src/store/theme/themeStore';
import { observer } from 'mobx-react-lite';
import React from 'react';
import Btn from '@/src/components/Btn';

interface IProductListItemProps {
  image: string;
  title: string;
  price: string;
  productID: number;
  productHandler: (productID: number) => void;
  productBtnInner: React.ReactNode;
}

const ProductListItem: React.FC<IProductListItemProps> = ({
  price,
  title,
  image,
  productID,
  productHandler,
  productBtnInner,
}) => {
  const {
    theme: { mainBlue, mainGray },
  } = themeStore;
  const styles = s(mainBlue);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 4,
      }}
    >
      <View>
        <Image source={{ uri: image }} style={styles.image} />
        <Text
          style={{
            fontSize: 18,
            color: mainGray,
          }}
        >
          {title}
        </Text>
      </View>
      <View style={styles.rightWrp}>
        <Text style={styles.price}>{price}$</Text>
        <View style={{ maxWidth: 130 }}>
          <Btn onPress={() => productHandler(productID)}>{productBtnInner}</Btn>
        </View>
      </View>
    </View>
  );
};

const s = (blue: string) =>
  StyleSheet.create({
    image: {
      width: 50,
      height: 50,
      borderRadius: 10,
      marginBottom: 2,
    },
    rightWrp: { alignItems: 'flex-end' },
    price: {
      marginBottom: 7,
      color: blue,
    },
  });

export default observer(ProductListItem);
