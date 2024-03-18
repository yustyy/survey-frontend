import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const openSurveysPage = () => {
    navigate(`/surveys/`);
  };

  return (
   <div className='navbar'>

    <div className='navbar-items'>

         <div className='navbar-items-logo'>
            <img src={logo} alt='logo' />
        </div>

        <div className='navbar-items-container'>
        <p><a onClick={openSurveysPage}>Anketler</a></p>
        </div>

    </div>

    <div className='navbar-login'>
      <button type='button'>Çıkış Yap</button>
     </div>

       
   </div>
  );
}

export default Navbar;
