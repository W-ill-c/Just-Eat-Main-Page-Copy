import React from 'react';

export default function MainBody(){
    return(    
        <section className='mainBody'>
            Hello
            <img src={require("../../images/backgroundMeal.jpg")} alt="Burger and Fries Background Image" className='backgroundImage'/>
        </section>
    )
}