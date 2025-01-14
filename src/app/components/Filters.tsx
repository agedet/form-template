'use client';

import { RootState } from '@/store/provider';
import { setActiveCategory, setSearchQuery, setSort } from '@/store/templateSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Filters() {
  const dispatch = useDispatch();
  const { activeCategory, searchQuery, sort } = useSelector((state: RootState) => state.templates);

  return (
    <section className="filters">
      <div className="categories">
        {['All', 'Education', 'E-commerce', 'Health'].map((category) => (
          <button
            key={category}
            onClick={() => dispatch(setActiveCategory(category))}
            className={category === activeCategory ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
      <input
        type="text"
        placeholder="Search templates..."
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />
      <select
        value={sort.type}
        onChange={(e) => dispatch(setSort({ type: e.target.value as 'default' | 'alphabetical' | 'date', order: sort.order }))}
      >
        <option value="default">Default</option>
        <option value="alphabetical">Alphabetical</option>
        <option value="date">Date Created</option>
      </select>
    </section>
  );
}
