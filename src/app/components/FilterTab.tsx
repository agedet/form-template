'use client';

import { RootState } from '@/store/provider';
import { useSelector } from 'react-redux';
import Filters from './Filters';
import WelcomeTemplate from './WelcomeTeplate';

export default function FilterTab() {
  return (
    <header className="mb-4">
      <Filters />

      <WelcomeTemplate />
    </header>
  );
}
