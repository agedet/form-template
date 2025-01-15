import { ReduxProvider } from '@/store/provider';
import axios from 'axios';
import TemplateList from './components/TemplateList';
import { Template } from '@/types/template';
import FilterTab from './components/FilterTab';


async function fetchTemplates(): Promise<Template[]> {
  const response = await axios.get<Template[]>(
    'https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates'
  );
  return response.data;
}

export default async function Home() {
  const templates = await fetchTemplates();

  return (
    <ReduxProvider>
      <div className="container">
        <FilterTab />
        <TemplateList templates={templates} />  
      </div>
    </ReduxProvider>
  );
}
