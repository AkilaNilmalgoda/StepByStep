import React, { Component } from 'react'
import './DogIMG.css'
import DogImage from '../../images/DogIMG.png'

export default class DogIMG extends Component {
    render() {
        return (
            <div className="container">
                <div className="DogIMG-box">
                    <img className='img-fluid' src={DogImage} alt=""/>
                </div>
            </div>
        )
    }
}
