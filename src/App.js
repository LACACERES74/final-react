// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {NavBar} from "./componenst/layoust/NavBar"
import ProductList from "./componenst/common/ProductList";
import Cart from "./componenst/pages/ItenListContainer/cart/Cart";
import ItemDetail from "./componenst/pages/ItenListContainer/itemDetail/ItemDetail";
import Checkout from "./componenst/pages/ItenListContainer/checkout/Checkout";
import { CartContextProvider } from "./componenst/context/CartContext";
import Footer from "./componenst/layoust/Footer";
import './App.css';

function App() {


  return (
    
    <BrowserRouter>
    <CartContextProvider>
      <NavBar/>

     < Routes>
       
      <Route  path="/" element={<ProductList/>} />
      <Route path="/categoria/:nombre" element={<ProductList />} />
      <Route  path="/cart" element={<Cart/>} />
      <Route  path="/product/:id" element={<ItemDetail/>} />
      <Route  path="/checkout" element={<Checkout/>} />

     </Routes>
     
     </CartContextProvider>
     <Footer /> 
    </BrowserRouter>

  );
};

export default App;
