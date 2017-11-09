import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
import Slider from 'react-slick';

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

export default class Getstarted extends Component{

 render(){
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
            
        };

        var background = {
            backgroundColor: '#F5F5F7'
        }         
        var pdiv ={
            height:20, 
            width:'100%',
            background: '#ffffff'
            //backgroundColor: '#ffffff'
        }
        return(
            <section id="features" style = {background}>
                    <div className="container">
                        
                        <div className="section-header">
                            <h2>Are you looking to design <br/> your house?</h2><br />
                            <p>Lets connect and build together</p><br />
                        </div>
                            <div className="col-md-12 text-center"> 
                                <Button bsStyle='warning'>Get started </Button>
                            </div>
                                <br /><br />
                            <Slider {...settings}>
                                <div><h3><img src={require("../images/s1.jpg")} alt="slide1" /></h3></div>
                                <div><h3><img src={require("../images/s2.jpg")} alt="slide2" /></h3></div>
                                <div><h3><img src={require("../images/s3.jpg")} alt="slide3" /></h3></div>
                                <div><h3><img src={require("../images/s4.jpg")} alt="slide4" /></h3></div>
                                <div><h3><img src={require("../images/s5.jpg")} alt="slide5" /></h3></div>
                            </Slider>
                    </div><br />
                        <div style = {pdiv}>
                        </div>
            </section>   
            
        );
    }
};

