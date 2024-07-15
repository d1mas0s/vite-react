//import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Todo from './Todo';
import Posts from './Posts';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="Todo" element={<Todo />} />
            <Route path="Posts" element={<Posts />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

