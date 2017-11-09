import React,{Component}  from 'react';


export default class Howitworks extends Component{
    render(){
        const text = {
            textAlign: 'left'
        }
        
        return(
                <section id="features" className = "backgroundimage">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title text-center">How it works</h2>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                            </div>
                            <div className="col-md-4 col-sm-offset-4">
                                <div className="media service-box">
                                        <div className="left">
                                            <img src={require("../images/user.png")} alt="user" />
                                        </div>
                                    <div className="media-body">                                
                                        <h4 className="media-heading">Customer Focused</h4>
                                        <p  style={text}>We offer our customers consistently efficient experiences across all touch points by putting a customers at the center of all we do.</p>
                                    </div>
                                </div>
                                <div className="media service-box">
                                        <div className="left">
                                            <img src={require("../images/email.png")} alt="email" />
                                        </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">Quality Service</h4>
                                        <p style={text}>We pride ourselves with the quality service we provide and it is the only thing that sets us apart from the rest. Our USP is our service we offer.</p>
                                    </div>
                                </div>
                                <div className="media service-box">
                                        <div className="left">
                                            <img src={require("../images/file.png")} alt="file" />
                                        </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">Integrity</h4>
                                        <p style={text}>Our core pillars are based on priciples, trust, transparecy and business ethics. We aim to build our reputation for being an organization of excellence and integrity.</p>
                                    </div>
                                </div>
                                <div className="media service-box">
                                        <div className="left">
                                            <img src={require("../images/proj.png")} alt="project" />
                                        </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">Knowledge</h4>
                                        <p style={text}>We have access to an extensive pool of knowledge - whether out understanding of customer's needs, or the expertise to complete complex tasks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
    };

