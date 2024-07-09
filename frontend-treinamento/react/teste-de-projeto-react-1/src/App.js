import React, { Suspense, lazy } from "react";
import "./App.css"

import Header from "./pages/components/header.js";
import Footer from "./pages/components/footer.js";
import Aside from "./pages/components/aside.js";

import { Routes, Route } from "react-router-dom";

// Importação do JSON de configuração das rotas
import menuLinks from "./jsondata/menuLinks.json";

// Função para carregar componentes dinamicamente com base no nome
const lazyLoadComponent = (componentName) => lazy(() => import(`./pages/${componentName}`));

function App() {
  return (
    <div>
      <div className="displayFlex">
        <Header />
        <main>
          <Aside />
          <article>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                {menuLinks.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={React.createElement(lazyLoadComponent(route.component))}
                  />
                ))}
              </Routes>
            </Suspense>
          </article>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
