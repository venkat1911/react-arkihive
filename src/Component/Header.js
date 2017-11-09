import React,{Component} from 'react';

export default class Header extends Component{
    render(){
        var navbar ={
            marginBottom: 0
        }
        return(
            <nav className="navbar navbar-inverse" style={navbar}>
                <div className="container-fluid">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#mainNavBar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <img src={require("../images/logo.png")} className="logo" alt="logo" />
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
    }   
};

