import React, { useState } from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./components/routing/Home";
import Login from "./components/routing/Login";
import Pnf from "./components/routing/Pnf";
import Products from "./components/routing/Products";
import Profile from "./components/routing/Profile";
import "../src/components/routing/Navbar.scss"
import Navbar from "./components/routing/Navbar";
import Mobiles from "./components/routing/Products/Mobiles.jsx";
import Laptops from "./components/routing/Products/Laptops";
import Watches from "./components/routing/Products/Watches";
import Earphones from "./components/routing/Products/Earphones";
import MobileDetails from "./components/routing/Products/MobileDetails";
import Signup from "./components/routing/Signup";
import Login1 from "./components/routing/Login1";
import AuthProvider from "./components/routing/auth";
import ProtectedProfile from "./components/routing/ProtectedProfile";
// import LazyLoading from "./components/routing/LazyLoading";

let LazyLoadingImages=React.lazy(()=>import("./components/routing/LazyLoading"))



function App() {

  let [userData,setUserData]=useState({})
  
  return (
    <BrowserRouter>
    <AuthProvider>
    <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>

              <Route path="products" element={<Products/>} >

                  <Route index element={<Watches/>} />
                  <Route path="mobiles" element={<Mobiles/>}/>
                  <Route path="laptops" element={<Laptops/>}/>
                  <Route path="watches" element={<Watches/>}/>
                  <Route path="earphones" element={<Earphones/>}/>
                  <Route path="mobiles/:mobileId" element={<MobileDetails/>}/>
                
              </Route>

              <Route path="profile" element={
              <ProtectedProfile>
                <Profile/>
                </ProtectedProfile>}/>
              <Route path="limage" element={<React.Suspense fallback="Loading.......">
                <LazyLoadingImages/>
              </React.Suspense>}/>

              <Route path="signup" element={<Signup setUserData={setUserData}/>}/>

              <Route path="login" element={<Login userData={userData}/>}/>
              <Route path="login1" element={<Login1/>}/>

              <Route path="*" element={<Pnf/>}/>
          </Routes>
          </AuthProvider>
    </BrowserRouter>
  );
} 

export default App; 
