import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AboutPage } from './pages/AboutPage';
import { VirtualLabPage } from './pages/VirtualLabPage';
import { BlogPage } from './pages/BlogPage';
import { PoliciesPage } from './pages/PoliciesPage';
import { FAQPage } from './pages/FAQPage';
import { AiToolsPage } from './pages/AiToolsPage';

const App: React.FC = () => {

  const openBuyModal = (name: string) => {
    const text = `Hi sir, I’m interested in buying the project: ${name}.`;
    window.open(`https://wa.me/919373286008?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header onOpenBuyModal={openBuyModal} />
        
        <main className="flex-grow pt-28 pb-12 w-full overflow-hidden bg-brand-bg text-brand-primary">
          <Routes>
            <Route path="/" element={<HomePage onOpenBuyModal={openBuyModal} />} />
            <Route path="/explore" element={<CatalogPage onOpenBuyModal={openBuyModal} />} />
            <Route path="/project/:id" element={<ProjectDetailPage onOpenBuyModal={openBuyModal} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/virtuallab" element={<VirtualLabPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/policies" element={<PoliciesPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/ai-tools" element={<AiToolsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
