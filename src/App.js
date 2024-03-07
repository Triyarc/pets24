import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import ProductShop from "./pages/ProductShop";
import ProductDetails from "./pages/ProductDetails";
import ErrorBoundry from "./pages/ErrorBoundry";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Home />} />
          <Route exact path='/service' element={<Service />} />
          <Route exact path='/product' element={<ProductShop />} />
          <Route exact path='/product-detail' element={<ProductDetails />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/checkout' element={<Checkout />} />
          <Route exact path='/about-us' element={<About />} />
          <Route exact path='/contact-us' element={<Contact />} />
          <Route exact path='/404' element={<ErrorBoundry />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
