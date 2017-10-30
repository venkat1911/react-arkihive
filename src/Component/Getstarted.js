import React from 'react';
import {Button} from 'react-bootstrap';
import slide1 from './images/s1.jpg';
import slide2 from './images/s2.jpg';
import slide3 from './images/s3.jpg';
import slide4 from './images/s4.jpg';
import slide5 from './images/s5.jpg';

var getstarted = () => {
    return(
<section className="container-fluid" id="sections">
        <h2>Are you looking to design <br/> your house?</h2><br />
        <p>Lets connect and build together</p><br />
        <div className="col-md-12 text-center"> 
            <Button bsStyle='warning'>Get started </Button>
        </div>
        <br /><br />
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <div className="carousel slide" id="myCarousel">
                    <div className="carousel-inner">
                        <div className="item active">
                            <div className="col-sm-3">
                                <div className="thumbnail"> 
                                    <img className="img-responsive" src={slide1} alt="" />
                                    
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="thumbnail"> 
                                    <img className="img-responsive" src={slide2} alt="" />
                                    
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="thumbnail"> 
                                    <img className="img-responsive" src={slide3} alt="" />
                                    
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="thumbnail"> 
                                    <img className="img-responsive" src={slide4} alt="" />
                                    
                                </div>
                            </div>
                        </div>
                            <div className="item">
                                <div className="col-sm-3">
                                    <div className="thumbnail"> 
                                        <img className="img-responsive" src={slide5} alt="" />
                                        
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="thumbnail"> 
                                        <img className="img-responsive" src={slide2} alt="" />
                                        
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="thumbnail"> 
                                        <img className="img-responsive" src={slide3} alt="" />
                                        
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="thumbnail"> 
                                        <img className="img-responsive" src={slide4} alt="" />
                                        
                                    </div>
                                </div>
                            </div>
                        <a data-slide="prev" href="#myCarousel" className="carousel-control left">
                            <span className="fa fa-chevron-left" aria-hidden="true"></span>
                        </a>
                        <a data-slide="next" href="#myCarousel" className="carousel-control right">
                            <span className="fa fa-chevron-right" aria-hidden="true"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>    
    );
};

export default getstarted;