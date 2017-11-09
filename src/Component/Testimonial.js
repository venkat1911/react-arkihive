import React,{Component} from 'react';
import Slider from 'react-slick';
import './../css/testimonial.css';

function SampleNextArrow(props) {
    const {className, style, onClick} = props
    return (
      <div
        className={className}
        style={{...style, display: 'block', background: '#222222'}}
        onClick={onClick}
      ></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {className, style, onClick} = props
    return (
      <div
        className={className}
        style={{...style, display: 'block', background: '#222222'}}
        onClick={onClick}
      ></div>
    );
  }

export default class Testimonial extends Component{
    render(){
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
          };
        return(
            <section id="features" className="section_color">
                    <div className="container">
                            <div className="section-header">
                                <h2>What our client says!</h2>
                            </div>
                         <br/>
                            <Slider {...settings}>
                                <div className="item">
                                    <blockquote>
                                        <div className="row">
                                            <div className="col-sm-3 text-center">
                                                <img className="img-circle" src={require("../images/128.jpg")} alt="user" />
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
                                                <img className="img-circle" src={require("../images/users.png")} alt="user" />
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
                                                <img className="img-circle" src={require("../images/users1.jpg")} alt="user" />
                                            </div>
                                            <div className="col-sm-9">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor nec lacus ut tempor. Mauris.</p>
                                                <small>Someone famous</small>
                                            </div>
                                        </div>   
                                    </blockquote>
                                </div>
                        </Slider>
                        <br/>
                    </div>
            </section>
        );
    }   
};

