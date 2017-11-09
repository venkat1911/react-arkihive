import React,{Component} from 'react';
import './../css/footer.css';

export default class Footer extends Component{
    render(){
       
        return(
            <section id="features">
                 <div className="container">
                    <div id="footer">
                        <div className="wrap">
                            <div className="left">
                                <h2 className="htext">Contact</h2>
                                <h3><a href="/">About Us</a></h3>
                                <h3><a href="/">FAQ</a></h3>
                                <h3><a href="/">Contact Us</a></h3>
                                <h3><a href="/">Terms & Conditions</a></h3>
                            </div>
                            <div className="right">
                                <h2 className="htext">Social</h2>
                                <h3><a href="/">Facebook</a></h3>
                                <h3><a href="/">Twitter</a></h3>
                                <h3><a href="/">Google Plus</a></h3>
                            </div>
                            <div className="centered">
                                <h2 className="htext">Links</h2>
                                <h3><a href="/">Track Order</a></h3>
                                <h3><a href="/">How To Shop</a></h3>
                                <h3><a href="/">Size Guide</a></h3>
                                <h3><a href="/">Delivery Information</a></h3>
                            </div>
                        </div>
                            <small>&copy; Copyright 2017</small>
                    </div>
                </div>
            </section>
        );
    }
};

