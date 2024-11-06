import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
  return (
    <>
    <img src="https://media.istockphoto.com/id/187925868/vector/newspaper-cover-page.jpg?s=612x612&w=0&k=20&c=SantJnFi_0dCOD_HUXgRSJxagvgL7Wp_F_e-rFSUV_E=" id='newspaper' alt='newspaper image' />
    <h1>Welcome to NC News</h1>
    <p>You can view various articles on this website and filter by topics, and so much more!</p>
    <p>Click the button below to get started!</p>
    <div className="card">
        <button id="get-started-button" onClick={() => navigate('/main')}>
          Get Started
        </button>
      </div>
      
    </>
    
  );
};

export default Home;
