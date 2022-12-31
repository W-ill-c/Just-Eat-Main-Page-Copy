import React from 'react';

export default function MainBody(){
    return(    
        <section className='mainBody'>
            <h1>Hello</h1>
            <img src={require("../../images/backgroundMeal.jpg")} alt="Burger and Fries Background Image" className='backgroundImage'/>
        </section>
    )
}