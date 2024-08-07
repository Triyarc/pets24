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
import "./App.css";
import ProfileUpdate from "./pages/ProfileUpdate";
import ServicePost from "./pages/formInfo/ServicePost";
import UpdateProfileDetails from "./pages/formInfo/UpdateProfileDetails";
import ShopRegistration from "./pages/formInfo/ShopRegistration";
import { loginConfrimation } from "./redux/loginAuthSlice";
import { getCookieValue } from "./cokkies";
import { useDispatch } from "react-redux";
import EditPorfileDetails from "./pages/formInfo/EditPorfileDetails";
import EditShopDetails from "./pages/formInfo/EditShopDetails";
import CartOffcanvas from "./components/common/CartOffcanvas";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  // const [timmer, setTimmer] = useState(true);
  const dispatch = useDispatch();
  const loginAuth = getCookieValue("loggedIn");
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  if (loginAuth == "true") {
    dispatch(loginConfrimation(true));
  } else if (loginAuth == "false") {
    dispatch(loginConfrimation(false));
  }

  // useEffect(() => {
  //   setTimeout(function () {
  //     setTimmer(false);
  //   }, 2000);
  // }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find((cartItem) => cartItem.id === item.id);
      if (itemInCart) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const incrementQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const decrementQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === itemId && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  };

  return (
    <div className='App'>
      {/* {timmer && <Loader />} */}
      <>
        <ErrorBoundary>
          <Navbar />
          <CartOffcanvas
            cart={cart}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
          />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/' element={<Home />} />

            {/* profile */}
            <Route path='/profile-post' element={<ProfileDetails />} />
            <Route path='/profile' element={<UserProfile />} />
            <Route path='/profileTwo' element={<ProfileUpdate />} />
            <Route path='/edit-profile-info' element={<EditPorfileDetails />} />

            {/* shop */}
            <Route path='/pet-shop-list' element={<ShopList />} />
            <Route path='/shop-post' element={<ShopDetails />} />
            <Route path='/shop-registration' element={<ShopRegistration />} />
            <Route path='/edit-shop-info' element={<EditShopDetails />} />

            {/* adoption */}
            <Route path='/adoption' element={<Adoption />} />
            <Route path='/pet-details/adoption/:id' element={<PetDetails />} />
            <Route path='/pet-details/Mating/:id' element={<PetDetails />} />

            {/* mating */}
            <Route path='/mating' element={<Mating />} />
            <Route path='/mating-post' element={<MatingPost />} />
            {/* service */}
            <Route path='/service' element={<Service />} />
            <Route path='/service-post' element={<ServicePost />} />
            {/* product */}
            <Route
              path='/product'
              element={<ProductShop addToCart={addToCart} />}
            />
            <Route
              path='/product-detail/:slug'
              element={<ProductDetails addToCart={addToCart} />}
            />

            {/* protected route */}
            <Route element={<ProtectedRoute />}>
              <Route path='/cart' element={<Cart />} />
              <Route path='/adoption-post' element={<AdoptionPost />} />
            </Route>

            <Route path='/pet-gallery' element={<PetGallery />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/404' element={<ErrorBoundry />} />
            <Route path='*' element={<ErrorBoundry />} />
          </Routes>
          <Footer />
        </ErrorBoundary>
      </>
    </div>
  );
}

export default App;
