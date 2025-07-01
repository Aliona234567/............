import { createSelector } from '@reduxjs/toolkit';

// Базовый селектор
const selectProductsState = state => state.products;

// Мемоизированный селектор для всех товаров
export const selectAllProducts = createSelector(
  [selectProductsState],
  (products) => products.items || []
);

// Мемоизированный селектор для фильтрации по категории
export const selectProductsByCategory = createSelector(
  [selectAllProducts, (_, category) => category],
  (products, category) => {
    return category === 'all' 
      ? products 
      : products.filter(p => p.category === category);
  }
);