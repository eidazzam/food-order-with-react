import React, {useState} from 'react';
import './App.css';
import Header from './components/Layout/Header';
// import Meals from './Meals/Meals';
import Meals from './components/Meals/Meals';
// import Modal from './components/Modal/Modal';
import Cart from './components/Cart/Cart';
// import CartProvider from './store/CartProvider';
import CartProvider from './store/CartProvider';
function App() {
  const [CartIsShown, setCartIsShown] =useState(false);

  const ShownCartHandler = () => {
    setCartIsShown(true)
  }
  const HideCartHandler = () => {
    setCartIsShown(false)
  }
  return (
  <CartProvider>
     {CartIsShown &&<Cart onClose={HideCartHandler}/>}
   <Header onShownCart={ShownCartHandler}/>
   <main>
   <Meals/>

   </main>
    </CartProvider>
  );
}

export default App;
