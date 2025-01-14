import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Sort = {
  type: 'default' | 'alphabetical' | 'date';
  order: 'ascending' | 'descending';
};

export type TemplateState = {
  activeCategory: string;
  searchQuery: string;
  sort: Sort;
  currentPage: number;
  templatesPerPage: number;
};

const initialState: TemplateState = {
  activeCategory: 'All',
  searchQuery: '',
  sort: { type: 'default', order: 'ascending' },
  currentPage: 1,
  templatesPerPage: 30,
};

const templateSlice = createSlice({
  name: 'templates',
  initialState,
  reducers: {
    setActiveCategory(state, action: PayloadAction<string>) {
      state.activeCategory = action.payload;
      state.currentPage = 1;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
      state.currentPage = 1;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setActiveCategory, setSearchQuery, setSort, setCurrentPage } = templateSlice.actions;
export default templateSlice.reducer;
