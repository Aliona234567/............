import { createSlice, createEntityAdapter, createSelector } from '@reduxjs/toolkit';

// Создаем адаптер для нормализованного состояния
const productsAdapter = createEntityAdapter({
  selectId: (product) => product.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title)
});

// Начальное состояние с использованием адаптера
const initialState = productsAdapter.getInitialState({
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  currentCategory: 'all'
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Добавление/обновление товаров
    productsLoaded: productsAdapter.setAll,
    
    // Добавление одного товара
    productAdded: productsAdapter.addOne,
    
    // Обновление товара
    productUpdated: productsAdapter.updateOne,
    
    // Удаление товара
    productDeleted: productsAdapter.removeOne,
    
    // Изменение текущей категории
    categoryChanged(state, action) {
      state.currentCategory = action.payload;
    },
    
    // Сброс состояния
    productsReset: () => initialState,
    
    // Установка статуса загрузки
    setLoadingStatus(state, action) {
      state.status = action.payload;
    }
  },
  // Дополнительно можно добавить extraReducers для обработки async thunks
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        productsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

// Экспорт действий
export const {
  productsLoaded,
  productAdded,
  productUpdated,
  productDeleted,
  categoryChanged,
  productsReset,
  setLoadingStatus
} = productsSlice.actions;

// Экспорт стандартных селекторов адаптера
export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectIds: selectProductIds,
  selectEntities: selectProductEntities
} = productsAdapter.getSelectors(state => state.products);

// Кастомные мемоизированные селекторы
export const selectProductsStatus = state => state.products.status;
export const selectCurrentCategory = state => state.products.currentCategory;

// Селектор для товаров текущей категории
export const selectProductsByCategory = createSelector(
  [selectAllProducts, selectCurrentCategory],
  (products, category) => {
    return category === 'all' 
      ? products 
      : products.filter(product => product.category === category);
  }
);

// Селектор для списка категорий
export const selectCategories = createSelector(
  [selectAllProducts],
  (products) => {
    const categories = new Set();
    products.forEach(product => categories.add(product.category));
    return ['all', ...Array.from(categories)];
  }
);

// Пример async thunk для загрузки товаров
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('/api/products');
    return await response.json();
  }
);

export default productsSlice.reducer;