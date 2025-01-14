'use client';

import { RootState } from '@/store/provider';
import { useSelector } from 'react-redux';
// import { RootState } from '../../store/templateSlice';

export default function Navbar() {
  const activeCategory = useSelector((state: RootState) => state.templates.activeCategory);

  return (
    <header className="navbar">
      <h1>{activeCategory} Templates</h1>
    </header>
  );
}
