'use client';

import { useSelector } from 'react-redux';
import { Template } from '../../types/template';
import TemplateCard from './TemplateCard';
import { RootState } from '@/store/provider';
import { filterTemplates } from '@/utils/filterTemplate';

type TemplateListProps = {
  templates: Template[];
};

export default function TemplateList({ templates }: TemplateListProps) {
  const { activeCategory, searchQuery, sort } = useSelector((state: RootState) => state.templates);
  const filteredTemplates = filterTemplates(templates, activeCategory, searchQuery, sort);

  return (
    <section className="template-list">
      {filteredTemplates.map((template) => (
        <TemplateCard 
          key={template.name} 
          template={template} 
        />
      ))}
    </section>
  );
}
