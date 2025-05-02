
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import './App.css';

// Создаем экземпляр клиента запросов
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <div className="app">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
          </div>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

