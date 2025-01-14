import { ReduxProvider } from '@/store/provider';
import axios from 'axios';
import Navbar from './components/Navbar';
import TemplateList from './components/TemplateList';
import Filters from './components/Filters';
import { Template } from '@/types/template';


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
      <Navbar />
      <div className="container">
        <Filters />
        <TemplateList templates={templates} />  
      </div>
    </ReduxProvider>
  );
}
