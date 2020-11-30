import React from 'react';
//import {Link} from 'react-router-dom'
import Home1data from './Home1data';
import WhyUsData from './WhyUsData';
import ReviewsData from './ReviewsData';
import Miniaboutus from '../../images/Miniaboutus.jpg'
import Carousel from './Carousel'



export default function HomeMain() {
    return (
        <>
        <div className='container-fluid hero-background'>
            <div className="row col-12 d-flex m-auto">
                <div className="row col-lg-6 col-sm-12  name mx-auto pt-70">
                <div className="hero-lable">
                <h1>Step By Step</h1>
                <h2>Putilkovo</h2>
                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, et? Facilis incidunt quo.</h6>

            </div>
                </div>
                <div className="row col-lg-6 col-sm-12  slider mx-auto"></div>
            </div>
                
            
            {/* <div className="hero-lable">
                <h1>Step By Step</h1>
                <h2>Putilkovo</h2>
                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, et? Facilis incidunt quo.</h6>

            </div> */}
        </div>

        <div className="age-groups row mx-auto">
                {Home1data.map((item, index) => {
                        return (
                            <article key={index} className='age-group-element  col-sm-6 col-lg-2 mx-auto mb-5'>
                                <span className='mx-auto age-group-icon d-flex '>
                                    <img className='mx-auto' src={item.icon} alt=""/>
                                </span>
                                <span className='mx-auto'>
                                    <h5 className='age-group-title'>{item.title}</h5>
                                </span>
                            </article>
                        )
                    })}
        </div>
        <div className="row home-about-us mx-auto">
            <div className=' col-sm-12 col-lg-4 home-about-us-pic'>
                <img src={Miniaboutus} alt=""/>
            </div>
            <div className=' col-sm-12 col-lg-8 home-about-us-text'>
                <div className="col-9">
                <h1>About Us</h1>
                <h5 className='pb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde odit sit distinctio placeat neque? Fugit repellendus possimus, ut delectus dignissimos deserunt! Ipsam molestias laudantium, ut veritatis tenetur ipsa. Vel adipisci expedita, doloribus quibusdam ut nulla impedit natus quod dicta qui quia doloremque officiis et quasi autem amet commodi atque. Neque ut, voluptate necessitatibus aut expedita illo quisquam commodi? Quas!</h5>
                <button className='btn btn-danger'>Learn More</button>
                </div>
            </div>
        </div>



        <div className="why-us">
            <div className="why-us-heading d-flex">
                <h1 className='py-5'>Why study with SBS?</h1>
            </div>
            <div className='row col-12 why-us-elements  justify-content-center mx-auto'>
                {WhyUsData.map((item,index)=> {
                    return(
                        <div className="why-us-element col-sm-9 col-lg-2 m-2">
                            <span className={item.classNameicon}>{item.icon}</span>
                    <span className={item.classNametext}>{item.text}</span>
                        </div>
                    )
                })}

            </div>
        </div>




        <div className="reviews">
            <div className="reviews d-flex">
                <h1 className='py-3'>What our students say?</h1>
            </div>
            <div className="container-fluid">
                <div className="single-review row mx-auto col-lg-8 py-3">
                <div className='single-review-pic col-3'>
                    <img src="https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt=""/>
                </div>
                <div className='col-9'>
                    <div className='single-review-name'>
                        <span>Mike Edwards</span>
                    </div>
                    <div className='single-review-text'>
                        <span>В курсах «Step by Step» прежде всего мне нравится глубокое изучение грамматики, возможность практиковать разговорную речь и специалисты высокого уровня. Изначально выбирала школу по рекомендации друзей и не жалею, результаты обучения оцениваю на отлично.</span>
                    </div>
                </div>
                </div>
            </div>
        </div>

        

        </>
    )
}
