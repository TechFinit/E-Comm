import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import { useState } from 'react'; // Make sure useState is imported

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <BrowserRouter>
      {/* Pass the login toggle function to Navbar */}
      <Navbar onLoginClick={() => setShowLogin(true)} />

      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

      {/* Overlay LoginSignup on all pages */}
      {showLogin && <LoginSignup navigate={('/')} />}

      <Footer />
    </BrowserRouter>
  );
}

export default App;
