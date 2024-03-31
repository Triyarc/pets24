import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import ProductShop from "./pages/ProductShop";
import ErrorBoundry from "./pages/ErrorBoundry";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import SignUp from "./pages/SignUp";
import Adoption from "./pages/Adoption";
import ShopList from "./pages/ShopList";
import Mating from "./pages/Mating";
import ShopDetails from "./pages/formInfo/ShopDetails";
import ProfileDetails from "./pages/formInfo/ProfileDetails";
import ProductDetails from "./pages/ProductDetails";
import AdoptionPost from "./pages/formInfo/AdoptionPost";
import MatingPost from "./pages/formInfo/MatingPost";
import PetGallery from "./pages/formInfo/PetGallery";
import Loader from "./components/common/Loader";
import UserProfile from "./pages/UserProfile";

function App() {

  return (
    <div className='App'>
      <Loader />
      <>
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
            <Route path='/adoption-post' element={<AdoptionPost />} />
            <Route path='/mating-post' element={<MatingPost />} />
            <Route path='/pet-gallery' element={<PetGallery />} />
            <Route path='/profile' element={<UserProfile />} />
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
      </>
    </div>
  );
}

export default App;
