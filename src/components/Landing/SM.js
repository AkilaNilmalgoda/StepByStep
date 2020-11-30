import React, { Component } from 'react'
import './SM.css'
import FB from '../../images/FB.png'
import IG from '../../images/IG.png'
import YT from '../../images/YT.png'
import WA from '../../images/WA.png'

export default class SM extends Component {
    render() {
        return (
            <section>
                <div className="container main-SM">
                    <div className="SM-heading mx-auto">
                        <h1>Stay Connected</h1>
                        <div className="SM-underline col-2 mx-auto"></div>
                    </div>
                    <div className="SM-box d-flex mx-auto justify-content-around row col-12">
                        <div className="SM-icon col-3 sm-col-6">
                            <img className='img-fluid' src={FB} alt=""/>
                        </div>
                        <div className="SM-icon col-3 sm-col-6">
                            <img className='img-fluid' src={IG} alt=""/>
                        </div>
                        <div className="SM-icon col-3 sm-col-6">
                            <img className='img-fluid' src={YT} alt=""/>
                        </div>
                        <div className="SM-icon col-3 sm-col-6">
                            <img className='img-fluid' src={WA} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
