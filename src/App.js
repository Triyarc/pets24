import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import ProductShop from './pages/ProductShop';
import ProductDetails from './pages/ProductDetails';
import ErrorBoundry from './pages/ErrorBoundry';
import Cart from './pages/Cart';
import Login from './pages/Login';
import ProtectedRoute from './ProtectedRoute';
import SignUp from './pages/SignUp';
import Adoption from './pages/Adoption';
import ShopList from './pages/ShopList';
import Mating from './pages/Mating';
import ShopDetails from './pages/ShopDetails';
import ProfileDetails from './pages/ProfileDetails';

function App() {
  const isAuthenticated = document.cookie.includes('loggedIn=true');

  return (
    <div className='App'>
    <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/product' element={<ProductShop />} />
          <Route path='/product-detail' element={<ProductDetails />} />
          <Route path='/adoption' element={<Adoption />} />
          <Route path='/mating' element={<Mating />} />
          <Route path='/pet-shop-list' element={<ShopList />} />
          {/* inputs */}
          <Route path='/shop-details' element={<ShopDetails />} />
          <Route path='/profile-details' element={<ProfileDetails />} />
          <Route
            path='/cart'
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route path='/about-us' element={<About />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/404' element={<ErrorBoundry />} />
          <Route path='*' element={<ErrorBoundry />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
