'use client';

import { useSelector } from 'react-redux';
import { Template } from '../../types/template';
import TemplateCard from './TemplateCard';
import { RootState } from '@/store/provider';
import { filterTemplates } from '@/utils/filterTemplate';
import Pagination from './Pagination';

type TemplateListProps = {
  templates: Template[];
};

export default function TemplateList({ templates }: TemplateListProps) {
  const { activeCategory, searchQuery, sort, currentPage, templatesPerPage } = useSelector((state: RootState) => state.templates);
  
  const filteredTemplates = filterTemplates(templates, activeCategory, searchQuery, sort);

  // Pagination logic
  const startIndex = (currentPage - 1) * templatesPerPage;
  const paginatedTemplates = filteredTemplates.slice(startIndex, startIndex + templatesPerPage);
  const totalPages = Math.ceil(filteredTemplates.length / templatesPerPage);

  return (
    <section className="template-list scrollable-container grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {paginatedTemplates.map((template) => (
        <TemplateCard 
          key={template.name} 
          template={template} 
        />
      ))}

      <Pagination
        // totalItems={filteredTemplates.length} 
        // itemsPerPage={templatesPerPage}
        totalPages={totalPages}
      />
    </section>
  );
}
