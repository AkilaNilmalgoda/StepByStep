import React, { Component } from 'react'
import './Hero.css'
import Logo from '../../images/BlueLogo.png'
import HeroImage from '../../images/HeroImage.png'


export default class Hero extends Component {
    render() {
        return (
            <section className='show'>
                <div className="container-fluid main-container">
                    <div className="container">
                        <div className="row mx-auto">
                            <div className="col-md-7 col-sm-12  box-0">
                                <div className="row col-12 mx-auto p-0">
                                    <div className="hero-logo-box">
                                    <div className="col-2 hero-logo">
                                        
                                        <div className="hero-logo-image-box">
                                            <img className='hero-logo-image' src={Logo} alt=""/>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-12 mx-auto p-0">
                                        <div className="col-12 hero-words">
                                            <h1>English Lessons</h1>
                                            <div className="SM-underline-hero col-2  pb-1"></div>
                                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat mollitia delectus adipisci, nihil eos quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. neque ipsum consequuntur porro perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, optio!</h6>
                                            {/* <h5>For adults</h5>
                                            <h5>With native English speakers</h5> */}
                                        </div>
                                        <div className="col-12 hero-image mx-auto">
                                            <div className="hero-il-image-box d-flex mx-auto">
                                            <img className='hero-il-image mx-auto img-fluid animated shake' src={HeroImage} alt=""/>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* rightbox */}
                            <div className="col-md-5 col-sm-12 box-form ">
                                <div className="form-box col-8 card">
                                <h2>Request a Call</h2>
                                <form>
                                <div className="form-controller">
                                    <input type="text" name='name' placeholder='Name' required/>
                                </div>
                                <div className="form-controller">    
                                    <input type="text" name='company' placeholder='Company' required/>
                                </div>
                                <div className="form-controller">    
                                    <input type='email' name="email" placeholder="Email"required/>
                                </div>
                                <input type='submit' value='Request' className='btn btn-prime' />
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                
            
        )
    }
}
