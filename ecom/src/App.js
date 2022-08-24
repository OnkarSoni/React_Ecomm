import React from 'react';
import Login from './Login';
import Register from './Register';
import Addproduct from './Addproduct';
import Updateproduct from './Updateproduct';
import Protected from './Protected';
import Productlist from './Productlist';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<Protected Cmp={Addproduct} />} />
          <Route path="/upd/:id" element={<Protected Cmp={Updateproduct} />} />
          <Route path="/" element={<Productlist />} />
      </Routes>
    </>
  )
};

export default App;