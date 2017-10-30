import React from 'react';
import meas from './images/meas.png';
import deliver from './images/deli.png';
import build from './images/build.png';

var construct = () => {
    return(
            <section className="container-fluid" id="section1">
                <h1>Streamline all your <br/> constructional needs online!</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    <br/>when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p><br />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-sm-10 col-sm-offset-2">
                                        <div className="hexagon">
                                            <img className="user" src={meas} alt="user" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="row">
                                    <div className="col-md-10 col-sm-offset-1">
                                         <div className="hexagon">
                                            <img className="user" src={deliver} alt="user" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-sm-10">
                                        <div className="hexagon">
                                            <img className="user" src={build} alt="user" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
            </section>
        );
};

export default construct;