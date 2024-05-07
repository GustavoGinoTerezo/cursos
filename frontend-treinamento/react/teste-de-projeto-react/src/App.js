import './App.css';

import { Route, Routes } from 'react-router-dom';

import About from './pages/about'
import Aside from '../src/pages/components/aside';
import ContactPages from './pages/contactPages'
import Footer from '../src/pages/components/footer';
import Header from '../src/pages/components/header';
import Home from './pages/home';
import Service from './pages/services'

function App() {
  return (
    <div>
      <div className="displayFlex">
        <Header />
        <main>
          <Aside />
          <article>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/servicos" element={<Service />} />
            <Route path="/contato" element={<ContactPages />} />
          </Routes>
          </article>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;