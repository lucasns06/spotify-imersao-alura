import './App.css';
import Header from '../src/componentes/Header/Header';
import Sidebar from './componentes/Sidebar/Sidebar';
import Footer from './componentes/Footer/Footer';
import Main from './componentes/Main/Main';
import Dynamic from './componentes/Dynamic/Dynamic';
import './componentes/media-queries.css';
import Script from './componentes/script';
import Loading from './componentes/Loading/Loading';
import './componentes/Cores.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CategoryProvider } from './componentes/CategoriesContext';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // return <Loading />;
  }
  return (
    <div>
      <Sidebar />
      <Header />
      <CategoryProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/musica" element={<Dynamic />} />
        </Routes>
      </CategoryProvider>
      <Footer />
      <Script />
    </div>
  );
}

export default App;
