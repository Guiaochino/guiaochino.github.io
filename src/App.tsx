import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import routes, { errorElement } from './routes';

const App = () => {
  const {
    navigation: {path: navPath, element: navElement}, 
    homepage: {path: homePath, element: homeElement},
  } = routes;

  return(
    <Routes>
      <Route path={navPath} element={navElement}>
        <Route path={homePath} element={homeElement} errorElement={errorElement}></Route>
      </Route>
    </Routes>
  );
}

export default App;
