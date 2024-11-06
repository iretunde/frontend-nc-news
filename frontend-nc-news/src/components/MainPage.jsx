import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import Nav from './Nav';

const MainPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    e.preventDefault(); // Prevents default anchor behavior (page reload)
    navigate('/'); // Navigate to the home route
  };
  return (
    <>
    <Logo />
    <h1>NC News Main Page</h1>
    <Nav />
    </>
  )
}
export default MainPage;