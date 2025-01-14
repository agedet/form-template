'use client';

import { RootState } from '@/store/provider';
import { useSelector } from 'react-redux';
import Filters from './Filters';

export default function FilterTab() {
  const activeCategory = useSelector((state: RootState) => state.templates.activeCategory);

  return (
    <header className="mb-4">
      <Filters />

      <h1 className='rounded-lg bg-slate-700 px-5 py-5 text-white'>{activeCategory} Templates</h1>
    </header>
  );
}
