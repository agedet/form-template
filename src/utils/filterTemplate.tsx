import { Sort } from '@/store/templateSlice';
import { Template } from '../types/template';

export const filterTemplates = (
  templates: Template[],
  activeCategory: string,
  searchQuery: string,
  sort: Sort,
): Template[] => {
  let filtered = templates;

  if (activeCategory !== 'All') {
    filtered = filtered.filter((template) =>
      template.category.includes(activeCategory)
    );
  }

  if (searchQuery) {
    filtered = filtered.filter((template) =>
      template.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (sort.type === 'alphabetical') {
    filtered = filtered.sort((a, b) =>
      sort.order === 'ascending'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
  } else if (sort.type === 'date') {
    filtered = filtered.sort((a, b) =>
      sort.order === 'ascending'
        ? new Date(a.created).getTime() - new Date(b.created).getTime()
        : new Date(b.created).getTime() - new Date(a.created).getTime()
    );
  }

  return filtered;
};
