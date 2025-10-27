import { useState } from 'react';
import HomePage from './pages/HomePage';
import AimsPage from './pages/AimsPage';
import TheoryPage from './pages/TheoryPage';
import ObjectivePage from './pages/ObjectivePage';
import ProcedurePage from './pages/ProcedurePage';
import SimulationPage from './pages/SimulationPage';
import Navigation from './components/Navigation';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'aims':
        return <AimsPage />;
      case 'theory':
        return <TheoryPage />;
      case 'objective':
        return <ObjectivePage />;
      case 'procedure':
        return <ProcedurePage />;
      case 'simulation':
        return <SimulationPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <div className="page-content">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
