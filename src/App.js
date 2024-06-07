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
import PetDetails from "./pages/PetDetails";
import './App.css'
import ProfileUpdate from "./pages/ProfileUpdate";
import ServicePost from "./pages/formInfo/ServicePost";

function App() {
  const [timmer, setTimmer] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setTimmer(false);
    }, 2000);
  }, []);
  return (
    <div className='App'>
      {timmer && <Loader />}
      <>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/' element={<Home />} />
            {/* profile */}
            <Route path='/profile-details' element={<ProfileDetails />} />
            <Route path='/profile' element={<UserProfile />} />
            <Route path='/profileTwo' element={<ProfileUpdate />} />
            {/* shop */}
            <Route path='/pet-shop-list' element={<ShopList />} />
            <Route path='/shop-form-details' element={<ShopDetails />} />
            {/* adoption */}
            <Route path='/adoption' element={<Adoption />} />
            <Route path='/adoption-post' element={<AdoptionPost />} />
            <Route path='/pet-details/adoption/:id' element={<PetDetails />} />
            <Route path='/pet-details/Mating/:id' element={<PetDetails />} />

            {/* mating */}
            <Route path='/mating' element={<Mating />} />
            <Route path='/mating-post' element={<MatingPost />} />
            {/* service */}
            <Route path='/service' element={<Service />} />
            <Route path='/service-post' element={<ServicePost />} />
            {/* product */}
            <Route path='/product' element={<ProductShop />} />
            <Route path='/product-detail' element={<ProductDetails />} />
            <Route
              path='/cart'
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route path='/pet-gallery' element={<PetGallery />} />
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
