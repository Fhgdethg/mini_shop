import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { useGetProducts } from '@/src/hooks/useGetProducts';
import PageBodyContainer from '@/src/components/PageBodyContainer';
import Notification from '@/src/components/Notification';
import CenteredLoader from '@/src/components/CenteredLoader';
import themeStore from '@/src/store/theme/themeStore';
import ProductListItem from '@/src/components/ProductListItem';
import basketStore from '@/src/store/basket/basketStore';
import React from 'react';

export default function Products() {
  const {
    theme: { mainBlue, mainWhite },
  } = themeStore;
  const { addProductToBasket } = basketStore;
  const { products, isLoading, error } = useGetProducts();

  const styles = s(mainBlue, mainWhite);

  const addProductToBasketHandler = (productID: number) => {
    const product = products.find((item) => item.id === productID);
    if (product) addProductToBasket(product);
  };

  return (
    <PageBodyContainer>
      {/*<RefreshControl refreshing={true} />*/}
      <View style={styles.container}>
        {isLoading && <CenteredLoader />}
        {Boolean(products.length && !isLoading && !error) && (
          <FlatList
            data={products}
            keyExtractor={(product) => product.id}
            ItemSeparatorComponent={() => (
              <View style={styles.itemSeparator}></View>
            )}
            renderItem={({ item: product }: any) => (
              <ProductListItem
                title={product.title}
                price={product.price}
                image={product.images[0]}
                productHandler={addProductToBasketHandler}
                productID={product.id}
                productBtnInner={
                  <Text style={styles.btnText}>Add to basket</Text>
                }
              />
            )}
          />
        )}
        {error && <Notification text={error} />}
      </View>
    </PageBodyContainer>
  );
}

const s = (separatorCol: string, btnTextCol: string) =>
  StyleSheet.create({
    container: { paddingVertical: 10, height: '100%' },
    itemSeparator: { height: 1, backgroundColor: separatorCol, opacity: 0.5 },
    btnText: {
      color: btnTextCol,
      fontSize: 14,
      textAlign: 'center',
    },
  });
