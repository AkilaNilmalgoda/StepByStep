import React, { Component } from 'react'
import './Footer.css'
import Logo from '../../images/BlueLogo.png'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid footer-container px-0">
                    <div className="container">
                    <div className="footerbox row col-12 mx-auto">
                        <div className="col-md-4 col-12 footerbox-1 ">
                            <div className="my-auto d-flex footer-logo"><img className='my-auto' src={Logo} alt=""/></div>
                            
                        </div>
                        {/* <div className="col-md-4 col-12 footerbox-2 ">
                            <div className="link-box align-self-center ">
                            <h4>About Us</h4>
                            <h4>Courses</h4>
                            <h4>Prices</h4>
                            <h4>Contacts</h4>
                            </div>
                            
                        </div> */}
                        <div className=" col-md-4 col-12 footerbox-3 py-4">
                            <div className="row  col-12 mx-auto link-box d-flex">
                            <div className=' footer-address d-flex col-12'><i className="fas fa-search-location fa-fw mr-2 my-auto"></i>
                            <h6 className='m-auto'>No 2, Novotushinskaya Street, Putilkovo</h6>
                            </div>
                            
                            <div className="footer-address col-12 m-auto">
                            <i className="fas fa-phone fa-fw mr-2 my-auto"></i>
                            <h5 className='m-auto'>+7 929 986 53 82</h5>
                            </div>
                            
                            </div>
                            
                        </div>
                        <div className="col-md-4 d-flex col-12 footerbox-4 mx-auto">
                            <div className="d-flex footer-social-icons footer-fb ">
                            <i className="fab fa-facebook-f fa-fw m-auto"></i>
                            </div>
                            <div className="footer-social-icons footer-ig d-flex">
                            <i className="fab fa-instagram fa-fw m-auto"></i>
                            </div>
                            <div className="footer-social-icons footer-wa d-flex">
                            <i className="fab fa-whatsapp fa-fw m-auto"></i>
                            </div>
                            <div className="footer-social-icons footer-yt d-flex" >
                            <i className="fab fa-youtube fa-fw m-auto"></i>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
