import React from 'react';
import testi from './images/128.jpg';

var testimonial = () => {
    return(
<section className="container-fluid" id="section1">
      <h2>What our client says!</h2>
        <br/>
        <div className='row'>
          <div className='col-md-offset-2 col-md-8'>
              <div className="carousel slide" data-ride="carousel" id="quote-carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#quote-carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#quote-carousel" data-slide-to="1"></li>
                        <li data-target="#quote-carousel" data-slide-to="2"></li>
                    </ol>
                        <div className="carousel-inner">
                            <div className="item active">
                                <blockquote>
                                    <div className="row">
                                        <div className="col-sm-3 text-center">
                                             <img className="img-circle" src={testi} alt="user" />
                                        </div>
                                            <div className="col-sm-9">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor nec lacus ut tempor. Mauris.</p>
                                                <small>Someone famous</small>
                                            </div>
                                    </div>   
                                </blockquote>
                            </div>

                            <div className="item">
                                <blockquote>
                                    <div className="row">
                                        <div className="col-sm-3 text-center">
                                             <img className="img-circle" src={testi} alt="user" />
                                        </div>
                                            <div className="col-sm-9">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor nec lacus ut tempor. Mauris.</p>
                                                <small>Someone famous</small>
                                            </div>
                                    </div>   
                                </blockquote>
                            </div>

                            <div className="item">
                                <blockquote>
                                    <div className="row">
                                        <div className="col-sm-3 text-center">
                                             <img className="img-circle" src={testi} alt="user" />
                                        </div>
                                            <div className="col-sm-9">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor nec lacus ut tempor. Mauris.</p>
                                                <small>Someone famous</small>
                                            </div>
                                    </div>   
                                </blockquote>
                            </div>

                        </div>
                            <a data-slide="prev" href="#quote-carousel" className="left carousel-control"><i className="fa fa-chevron-left"></i></a>
                            <a data-slide="next" href="#quote-carousel" className="right carousel-control"><i className="fa fa-chevron-right"></i></a>
                 </div>
            </div>
        </div>    
</section>
    );
};

export default testimonial;