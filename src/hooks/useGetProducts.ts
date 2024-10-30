import productsStore from '@/src/store/products/productsStore';
import { useEffect, useState } from 'react';
import { productsQ } from '@/src/queries/productsQ/productsQ';
import { queriesRoutes } from '@/src/queries/queriesRoutes';

export const useGetProducts = () => {
  const { products, changeProducts } = productsStore;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getProducts = async () => {
    try {
      setError('');
      setIsLoading(true);

      const { data } = await productsQ.get<{ products: any[] }>(
        queriesRoutes.products
      );

      changeProducts(data.products);
      setIsLoading(false);
    } catch (e: any) {
      const err = e?.message ? e?.message : 'Getting products error';
      setError(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!products.length) getProducts();
  }, []);

  return { products, isLoading, error };
};
