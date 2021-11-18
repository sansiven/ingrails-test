import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import cartReducer from "./components/reducers/cartReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Cart from "./Cart";
import Product from "./Product";
import Layout from "./components/layout/Layout";
const store = createStore(cartReducer);

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Layout>
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/product/:productId" element={<Product />} />
                    </Routes>
                </Layout>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
