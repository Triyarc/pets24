import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import ProductShop from "./pages/ProductShop";
import ProductDetails from "./pages/ProductDetails";
import ErrorBoundry from "./pages/ErrorBoundry";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const isAuthenticated = document.cookie.includes("loggedIn=true");

  return (
    <div className='App'>
      {isAuthenticated && <Navbar />}

      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path='/service'
            element={
              <ProtectedRoute>
                <Service />
              </ProtectedRoute>
            }
          />
          <Route
            path='/product'
            element={
              <ProtectedRoute>
                <ProductShop />
              </ProtectedRoute>
            }
          />
          <Route
            path='/product-detail'
            element={
              <ProtectedRoute>
                <ProductDetails />
              </ProtectedRoute>
            }
          />
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
      {isAuthenticated && <Footer />}
    </div>
  );
}

export default App;
