'use server'

import { ReduxProvider } from '@/store/provider';
import axios from 'axios';
import TemplateList from './components/TemplateList';
import { Template } from '@/types/template';
import FilterTab from './components/FilterTab';


async function fetchTemplates(): Promise<Template[]> {
  const headers = { 
    'Authorization': 'Bearer SOME-VALUE',
  };

  const response = await axios.get<Template[]>(
    'https://caselops.free.beeceptor.com/template',
    // 'https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates'
    // 'https://caselops.free.beeceptor.com'
    // 'https://caselops.free.beeceptor.com/api/v1/public/task_template', 

    // 'https://api.apilayer.com/financelayer/news?date=today&keywords=at%26t&sources=seekingalpha.com&keyword=merger&tickers=dis',
    
    { headers }
  );
  console.log('Response status:', response.status);
  console.log('Response Data:', response.data);
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
