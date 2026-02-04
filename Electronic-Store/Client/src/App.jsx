import React from 'react'
import Navbar from './Components/Layout/Navbar';
import MainLayout from './Components/Layout/MainLayout';
import AllProducts from './Components/Layout/AllProducts';
import { Route, Routes } from 'react-router';
import ProductDetailPage from './Components/Layout/ProductDetailPage';
import Cart from './Components/Layout/Cart';


const App = () => {
  return (
    <div className='bg-[#F4F2F0]'>

      <Navbar />
      <Routes>
        <Route path='/' element={<MainLayout />} />
        <Route path='/allproducts' element={<AllProducts />} />
        <Route path='/productDet' element={<ProductDetailPage />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App;