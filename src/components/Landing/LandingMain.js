import React from 'react'
import './Landing.css'
import AgeGroupsData from './AgeGroupsData';
import NewsData from './NewsData';

import Footer from '../Footer/Footer'
import Hero from './Hero'
import Inspire from './Inspire'
import SM from './SM'
import DogIMG from './DogIMG'


export default function LandingMain() {
    return (
        
        <>
        <Hero/>

        
        
        {/* ----------- Stats ----------- */}
        
        <section className="age-groups">
            <div className="container">
                <div className="row col-12 my-4 mx-auto justify-content-around">
                {AgeGroupsData.map((item, index) => {
                        return (
                            <div className={item.className}>
                            <div className={item.classNamebox}  key={index}>
                                    
                                <h3>{item.title}</h3>
                                <h4>{item.book}</h4>
                                <div className="age-groups-age d-flex">
                                <h4 className='my-auto'>{item.age}</h4>
                                <span>years old</span>
                                </div>
                                
                            </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>


        {/* ----------Free Testing ----------- */}
        <Inspire/>
        

        {/* ----------News ----------- */}

        <section>
            <div className="container-fluid news-background">
                <div className="container">
                <div className="row col-12 mx-auto news-row">

                {NewsData.map((item, index) => {
                        return (
                            <div className={item.className} >
                    <div className="news-box col-12 my-1 " key={index}>
                        <div className="col-12 news-image-area">
                            <img className='news-image' src={item.image} alt=""/>
                            
                        </div>
                        <div className="col-12 news-text-area mt-2">
                        <h5>{item.title}</h5>
                        <span><i className="fas fa-calendar-week fa-fw mr-2 "></i>{item.date}</span>
                        <p className='news-short-text'>{item.shorttext}</p>
                        </div>
                    </div>
                    </div>
                        )
                    })}
                </div>
                <div className="morenews-btn row mx-auto">
                    <button className='btn btn-primary d-flex mx-auto'>More News</button>
                </div>
                </div>
                
            </div>
        </section>

        <SM/>

        <DogIMG/>

        <section>
            <Footer/>
        </section>


        
                
                
            
        


        </>
    )
}

