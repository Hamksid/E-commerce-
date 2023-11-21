import  { useState } from "react"
import './App.css';
import Header from './Common/Header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {Pages} from './Pages/Pages'
import Data from './Components/Data'
import { Database } from 'emoji-picker-element';
 function App() {
  // step 1: fetch data from database
  const {productItems} = Data
  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCartItem(cartItem.map((item) => 
      (item.id === product.id?
         {...productExit,qty:productExit.qty+1} : item)))
    }
  }
  const [cartItem, setCartItem] = useState([])
  return (
    <>

      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Pages productItems={productItems} addToCart={addToCart}/>}>
          </Route>
        </Routes>
      </Router>
    </>
  );
  }

export default App;
