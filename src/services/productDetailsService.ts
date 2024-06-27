import api from './api';
import { ProductDetails } from '../models/product';

export const getProductDetailsById = async (
  id: string,
): Promise<ProductDetails> => {
  try {
    const response = await api.get<ProductDetails>(`/productDetails/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar o produto:', error);
    throw error;
  }
};
