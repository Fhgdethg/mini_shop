import { View, Text, FlatList, StyleSheet } from 'react-native';
import themeStore from '@/src/store/theme/themeStore';
import basketStore from '@/src/store/basket/basketStore';
import PageBodyContainer from '@/src/components/PageBodyContainer';
import ProductListItem from '@/src/components/ProductListItem';
import Notification from '@/src/components/Notification';
import Btn from '@/src/components/Btn';
import React from 'react';
import uuid from 'react-native-uuid';

export default function HomeScreen() {
  const {
    theme: { mainBlue, mainWhite },
  } = themeStore;
  const { basketProducts, totalPrice, removeProductFromBasket } = basketStore;

  const styles = s(mainBlue, mainWhite);
  let idx = 0;

  return (
    <PageBodyContainer>
      <View style={styles.container}>
        {basketProducts.length ? (
          <View style={styles.listContainer}>
            <FlatList
              data={basketProducts}
              keyExtractor={(item, index) => uuid.v4().toString()}
              ItemSeparatorComponent={() => (
                <View style={styles.itemSeparator}></View>
              )}
              renderItem={({ item: product }: any) => (
                <ProductListItem
                  title={product.title}
                  price={product.price}
                  image={product.images[0]}
                  productHandler={removeProductFromBasket}
                  productID={product.id}
                  productBtnInner={
                    <Text style={styles.btnText}>Remove from basket</Text>
                  }
                />
              )}
            />
            <View style={styles.btnWrp}>
              <Btn onPress={() => {}}>
                <Text style={styles.btnText}>Pay {totalPrice.toFixed(2)}$</Text>
              </Btn>
            </View>
          </View>
        ) : (
          <Notification text="Basket is empty" type="info" />
        )}
      </View>
    </PageBodyContainer>
  );
}

const s = (separatorCol: string, btnTextCol: string) =>
  StyleSheet.create({
    container: { paddingVertical: 10, height: '100%' },
    listContainer: {
      height: '90%',
    },
    btnWrp: {
      marginTop: 25,
      maxWidth: 160,
      marginHorizontal: 'auto',
    },
    btnText: {
      color: btnTextCol,
      fontSize: 14,
      textAlign: 'center',
    },
    itemSeparator: { height: 1, backgroundColor: separatorCol, opacity: 0.5 },
  });
