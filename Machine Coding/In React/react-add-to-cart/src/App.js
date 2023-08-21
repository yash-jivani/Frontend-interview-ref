import React from "react";
import Navbar from "./components/Navbar";
import ProductContainer from "./components/ProductContainer";
import { Provider } from "react-redux";
import store from "./store/store";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<ProductContainer />}/>
                    <Route path="/cart" element={<Cart />}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
