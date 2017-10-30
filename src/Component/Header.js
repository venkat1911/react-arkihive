import React from 'react';
import logo from './images/logo.png';

var header = () => {
    return(
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">

                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#mainNavBar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <img src={logo} className="logo" alt="logo" />
                </div>

                <div className="collapse navbar-collapse" id="mainNavBar">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default header;