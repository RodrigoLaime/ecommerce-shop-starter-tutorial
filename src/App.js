import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import pages
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetails'
// import components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetail />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  )
};

export default App;
