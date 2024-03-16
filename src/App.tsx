import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './modules/container/navbar';
import Footer from './modules/components/layout/footer';

import HomeTemplate from './modules/components/home/templates';
import CreateAccount from './modules/components/account/create-account/template';
import Login from './modules/components/account/login/template';
import ProductPreview from './modules/container/product';
import CartLayout from './modules/container/cart';

import NotFoundPage from './modules/components/not-found';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeTemplate />} />
          <Route path='/create-account' element={<CreateAccount />} />
          <Route path='/login' element={<Login />} />
          <Route path="/product/:id" element={<ProductPreview />} />
          <Route path="/cart" element={<CartLayout />} />
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;
