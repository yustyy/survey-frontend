import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const openSurveysPage = () => {
    navigate(`/admin/surveys/`);
  };

  const logout = () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    navigate('/login');
  };

  return (
   <div className='navbar'>

    <div className='navbar-items'>

         <div className='navbar-items-logo'>
            <img src={logo} alt='logo' />
            <h2>Admin Paneli</h2>
        </div>

        

        <div className='navbar-items-container'>
        <p><a onClick={openSurveysPage}>Anketler</a></p>
        </div>

    </div>

    <div className='navbar-login'>
      <button type='button' onClick={logout}>Çıkış Yap</button>
     </div>

       
   </div>
  );
}

export default Navbar;
