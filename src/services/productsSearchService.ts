import api from './api';
import { ProductsSearch } from '../models/productsSearch';

export const getProductsSearchByQuery = async (
  query: string,
): Promise<ProductsSearch> => {
  try {
    const response = await api.get<ProductsSearch>(`/products/`, {
      params: {
        search: query,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar produtos pelo termo ${query}:`, error);
    throw error;
  }
};
