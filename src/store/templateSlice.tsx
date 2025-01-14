import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Sort = {
  type: 'default' | 'alphabetical' | 'date';
  order: 'ascending' | 'descending';
};

export type TemplateState = {
  activeCategory: string;
  searchQuery: string;
  sort: Sort;
};

const initialState: TemplateState = {
  activeCategory: 'All',
  searchQuery: '',
  sort: { type: 'default', order: 'ascending' },
};

const templateSlice = createSlice({
  name: 'templates',
  initialState,
  reducers: {
    setActiveCategory(state, action: PayloadAction<string>) {
      state.activeCategory = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
  },
});

export const { setActiveCategory, setSearchQuery, setSort } = templateSlice.actions;
export default templateSlice.reducer;
