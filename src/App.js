import './App.css';
import Header from '../src/componentes/Header/Header';
import Sidebar from './componentes/Sidebar/Sidebar';
import Footer from './componentes/Footer/Footer';
import Main from './componentes/Main/Main';
// import Script from './componentes/script';
function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Main/>
      <Footer/>
      {/* <Script /> */}
    </div>
  );
}

export default App;
