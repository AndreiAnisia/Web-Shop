import React, { useEffect, useState } from 'react';
import Products from './components/Products';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import './App.css';
import Checkout from './components/CheckoutForm/Checkout/Checkout';
import CarouselContainer from './components/Carousel/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';

const App = () => {
   const [products, setProducts] = useState([]);
   const [cart, setCart] = useState({});
   const [order, setOrder] = useState({});
   const [errorMessage, setErrorMessage] = useState({});

   const fetchProducts = async () => {
      const response = await commerce.products.list();
      setProducts((response && response.data) || []);
   };

   const fetchCart = async () => {
      const cart = await commerce.cart.retrieve();
      setCart(cart);
   };

   const handleAddToCart = async (productId, quantity) => {
      const item = await commerce.cart.add(productId, quantity);
      setCart(item.cart);
   };

   const handleUpdateCartQty = async (productId, quantity) => {
      const response = await commerce.cart.update(productId, { quantity });
      setCart(response.cart);
   };

   const handleRemoveFromCart = async (productId) => {
      const response = await commerce.cart.remove(productId);
      setCart(response.cart);
   };

   const handleEmptyCart = async () => {
      const response = await commerce.cart.empty();
      setCart(response.cart);
   };

   const refreshCart = async () => {
      const newCart = await commerce.cart.refresh();

      setCart(newCart);
   };

   const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
      try {
         const incomingOrder = await commerce.checkout.capture(
            checkoutTokenId,
            newOrder
         );

         setOrder(incomingOrder);

         refreshCart();
      } catch (error) {
         setErrorMessage(error.data.error.message);
      }
   };

   useEffect(() => {
      fetchProducts();
      fetchCart();
   }, []);

   return (
      <Router>
         <div>
            <Navbar totalItems={cart.total_items} />
            <Switch>
               <Route exact path="/">
                  <CarouselContainer products={products} />
                  <Products products={products} onAddToCart={handleAddToCart} />
                  <Footer />
               </Route>
               <Route exact path="/cart">
                  <Cart
                     cart={cart}
                     handleUpdateCartQty={handleUpdateCartQty}
                     handleRemoveFromCart={handleRemoveFromCart}
                     handleEmptyCart={handleEmptyCart}
                  />
               </Route>
               <Route exact path="/checkout">
                  <Checkout
                     cart={cart}
                     order={order}
                     handleCaptureCheckout={handleCaptureCheckout}
                     error={errorMessage}
                  />
               </Route>
            </Switch>
         </div>
      </Router>
   );
};

export default App;
