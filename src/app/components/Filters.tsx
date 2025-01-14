'use client';

import { RootState } from '@/store/provider';
import { setActiveCategory, setSearchQuery, setSort } from '@/store/templateSlice';
import { useDispatch, useSelector } from 'react-redux';
import './filters.scss';

export default function Filters() {
  const dispatch = useDispatch();
  const { activeCategory, searchQuery, sort } = useSelector((state: RootState) => state.templates);
  
  const categories = ['All', 'Education', 'E-commerce', 'Health', 'Agriculture', 'Finance', 'Travel', 'Other'];

  return (
    <section className="filters">
      {/* search input */}
      <div className='filter-group'>
        <label htmlFor="search-input">Search:</label>
        <input
          id="search-input"
          type="text"
          placeholder="Search templates..."
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
      </div>

      <div className='flex items-center gap-4'>
        {/* search by categories */}
        <div className="filter-group">
          <label htmlFor='category-select'>Categories:</label>
          <select 
            id='category-select'
            value={activeCategory}
            onChange={(e) => dispatch(setActiveCategory(e.target.value))}
          >
            {categories.map((category) => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* sort  by order */}
        <div className='filter-group'>
          <label htmlFor="sort">Sort By:</label>
          <select
            id='sort-select'
            value={sort.type}
            onChange={(e) => dispatch(setSort({ type: e.target.value as 'default' | 'alphabetical' | 'date', order: sort.order }))}
          >
            <option value="default">Default</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="date">Date Created</option>
          </select>
        </div>
      </div>
    </section>
  );
}
