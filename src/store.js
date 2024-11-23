import { create } from 'zustand';

export const useFilterStore = create((set) => ({
  filters: [],
  addItem: (filterItem) => {
    set((state) => {
      const exists = state.filters.includes(filterItem);
      if (!exists) {
        return { filters: [...state.filters, filterItem] };
      }
      return state;
    });
  },
  removeItem: (filterItem) => {
    set((state) => ({
      filters: state.filters.filter((item) => item !== filterItem),
    }));
  },
  reset: () => {
    set((state) => ({
      filters: (state.filters = []),
    }));
  },
}));
