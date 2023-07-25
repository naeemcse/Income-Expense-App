import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Income from './Pages/Income';
import Expense from './Pages/Expense';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/income' element={<Income/>} />
         <Route path='/expense' element={<Expense/>} />

        

         </Routes>
      </BrowserRouter>
      
      
    </div>
  );
};

export default App;