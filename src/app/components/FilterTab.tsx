'use client';

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
