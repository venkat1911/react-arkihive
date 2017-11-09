import React,{Component} from 'react';
import './../css/hexagon.css';

export default class Construct extends Component{
    render(){
        return(
            <section id="features" className="section_color">
                    <div className="container">
                        <div className="section-header">
                          <h2>Streamline all your <br/> constructional needs online!</h2><br/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            <br/>when an unknown printer took a galley of type and scrambled.
                            </p>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-sm-10 col-sm-offset-2">
                                            <div className="hexagon">
                                                <img className="user" src={require("../images/meas.png")} alt="user" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="row">
                                        <div className="col-md-10 col-sm-offset-1">
                                            <div className="hexagon">
                                                <img className="user" src={require("../images/deli.png")} alt="user" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-sm-10">
                                            <div className="hexagon">
                                                <img className="user" src={require("../images/build.png")} alt="user" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        );
    }   
};

