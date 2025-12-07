import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductList from "./pages/ProductList";
import StaffList from "./pages/StaffList";


function App() {
  console.log("App rendered");
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />


        <Route path="/product-list" element={<ProductList/>} />
        <Route path="/staff-list" element={<StaffList />} />
        
      </Routes>
    </Layout>
  );
}

export default App;
