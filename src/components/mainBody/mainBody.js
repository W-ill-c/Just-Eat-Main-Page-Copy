import React from 'react';
import NavBar from '../navBar/navBar';

export default function MainBody(){
    return(    
        <section className='mainBody'>
            <NavBar />
            <img src={require("../../images/backgroundMeal.jpg")} alt="Burger and Fries Background Image" className='backgroundImage'/>
        </section>
    )
}