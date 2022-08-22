import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/layout/Footer.jsx";
import Product from "./components/layout/Product";
import Header from "./components/layout/Header.jsx";
import Cart from "./components/Cart";
import Checkout from "./Pages/Checkout";
import { CartProvider } from "react-use-cart";
function App() {
  const [user, setUser] = useState(null);
  const [toggleCheckOut, setToggleCheckOut] = useState(false);
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(null) 

  useEffect(() => {
    let x = localStorage.getItem("user");
    setUser(JSON.parse(x));
  }, []);

  return (
  
      <div className="App">
        <Header user={user} setUser={setUser} />
<BrowserRouter>
        <CartProvider>
          {!toggleCheckOut && (
            <Product   user={user} />
          )}
          {toggleCheckOut && <Checkout items={items} total={total} />}
          <Cart
            user={user}
            setToggleCheckOut={setToggleCheckOut}
            toggleCheckOut={toggleCheckOut} setItems={setItems} setTotal={setTotal} 
          />
        </CartProvider>
</BrowserRouter>
        <Footer />
      </div>
    
  );
}
export default App;
