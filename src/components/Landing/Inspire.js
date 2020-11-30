import React, { Component } from 'react'
import RombusImg from '../../images/rombus.jpg';
import './Inspire.css'
import Dreams from '../../images/Dreams.png'

export default class Inspire extends Component {
    render() {
        return (
            <section>
            <div className="container py-sm-2 py-lg-5">
                <div className="row col-12 mx-auto">
                <div className=" box-1 col-md-8 col-lg-6 col-sm-12 mx-auto p-0">
                    <div className="col-12 abox1">
                    <h1>Where will you go?</h1>
                    </div>
                    <div className="col-12 abox2">
                    <p>Mark Twain said  “Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did. So throw off the bowlines, sail away from the safe harbor. Catch the trade winds in your sail”.</p>
                    </div>
                    <div className="col-12 abox3">
                    <h3>EXPLORE.</h3>
                    <h3>DREAM.</h3>
                    <h3>DISCOVER.</h3>
                    </div>
                </div>
                
                <div className=" box-2 col-md-4 col-lg-6 col-sm-12 ">
                <div className="dreams-image-box d-flex  col-12 mx-auto ">
                    <img className='img-fluid  ' src={Dreams} alt=""/>
                </div>
                </div>
                </div>
            </div>
        </section>
        )
    }
}
