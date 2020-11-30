import React from 'react'

//import Logo_Blue from '../images/BlueLogo.png'

function Navbar  () {
    return (
        <>
        <div className="navbar p-0">
            <div className="container p-0 flex justify-content-between">
                <div className="navbutton">
                    <span className='menu-bars-spa'>
                        <i className="fas fa-bars fa-fw fa-2x" ></i>
                    </span>
                </div>
                <div className="logo">
                    <h1 className='m-auto'>SBS Step By Step</h1>
                </div>
                <div className="login-icon d-flex justify-content-between">
                    <span><i className="fas fa-user fa-fw fa-2x" ></i></span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar