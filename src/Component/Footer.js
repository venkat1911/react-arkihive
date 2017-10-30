import React from 'react';

var footer = () => {
    return(
        <section className="container-fluid" id="section">
            <div id="footer">
                <div className="wrap">
                    <div className="left">
                        <h3><a href="/">About Us</a></h3>
                        <h3><a href="/">FAQ</a></h3>
                        <h3><a href="/">Contact Us</a></h3>
                        <h3><a href="/">Terms & Conditions</a></h3>
                    </div>
                    <div className="right">
                        <h3><a href="/">Facebook</a></h3>
                        <h3><a href="/">Twitter</a></h3>
                        <h3><a href="/">Google Plus</a></h3>
                    </div>
                    <div className="centered">
                        <h3><a href="/">Track Order</a></h3>
                        <h3><a href="/">How To Shop</a></h3>
                        <h3><a href="/">Size Guide</a></h3>
                        <h3><a href="/">Delivery Information</a></h3>
                    </div>
                </div>
                    <small>&copy; Copyright 2017</small>
            </div>
        </section>
    );
};

export default footer;