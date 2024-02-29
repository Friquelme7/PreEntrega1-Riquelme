import "./styles/app.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navBar"; 
import { ItemListContainer } from "./components/ItemListContainer";
import { Footer } from "./components/Footer"; 
import { Checkout } from "./components/Checkout";
import { Cart } from "./components/Cart";
import { ItemDetailsContainer } from "./components/ItemDetailsContainer";
import { NotFound } from "./components/NotFound";

export const App = () => {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element = {<ItemListContainer />}> </Route>
          <Route path="/category/:idc" element = {<ItemListContainer />}> </Route>
          <Route path="/products/:idp" element = {<ItemDetailsContainer />}> </Route>
          <Route path="/cart" element = {<Cart />}> </Route>
          <Route path="/checkout" element = {<Checkout />}> </Route>
          <Route path="*" element = {<NotFound />}> </Route>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}



