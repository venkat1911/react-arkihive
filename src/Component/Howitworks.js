import React from 'react';
import email from './images/email.png';
import user from './images/user.png';
import file from './images/file.png';
import proj from './images/proj.png';

var howitworks = () => {
    return(
            <section className="container-fluid" id="section">
                 <h1>How it works ?</h1><br/>
                 <img src={email} className="icon" alt="emial" />
                     <h2 className="title">Post your requirements</h2>
                        <p className="text">Lorem Ipsum is simply dummy text of<br/>the printing and typesetting industry.
                        </p>
                 <img src={user} className="icon" alt="emial" />
                     <h2 className="title">Choose profoessional</h2>
                        <p className="text">Lorem Ipsum is simply dummy text of<br/>the printing and typesetting industry.
                        </p>
                 <img src={file} className="icon" alt="emial" />
                     <h2 className="title">Execute professionals</h2>
                        <p className="text">Lorem Ipsum is simply dummy text of<br/>the printing and typesetting industry.
                        </p>
                 <img src={proj} className="icon" alt="emial" />
                     <h2 className="title">Choose your projects</h2>
                        <p className="text">Lorem Ipsum is simply dummy text of<br/>the printing and typesetting industry.
                        </p>
            </section>
    );
};

export default howitworks;