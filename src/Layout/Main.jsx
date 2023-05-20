import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

const Main = () => {
  const loc = useLocation()
  useEffect(() => {
    if (loc.pathname === '/') {
      document.title = `Dreamy Dolls | Home`;
    } else {
      document.title = `Dreamy Dolls ${loc.pathname.replace("/","| ")}`
    }

  },[loc.pathname])
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </div>
  );
};

export default Main;