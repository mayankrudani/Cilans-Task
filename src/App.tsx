import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './modules/layout/navbar';
import Footer from './modules/layout/footer';
import HomeTemplate from './modules/home/templates';
import CreateAccount from './modules/account/create-account/template';
import Login from './modules/account/login';
import ProductPreview from './modules/product/template';
import CartLayout from './modules/cart/template';
import NotFoundPage from './modules/not-found';

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
