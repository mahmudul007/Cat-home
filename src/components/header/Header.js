import React from 'react';
import logo from '../images/logo.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className="head">

            <img src={logo} alt="" srcset="" />
            <div className="text">
                <h1>Cat Home </h1>
                <h3>Where you found all kindes of cat for adoption </h3>
                <p>Avarage estimated cost 4000Bdt</p>
            </div>
        </div>
    );
};

export default Header;