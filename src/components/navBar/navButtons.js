import React from 'react';
import buttonTitles from './navButtonsTitle'

export default function NavButtons(){
    return(    
        <section className='navButtonsSection'>
            {buttonTitles.map((buttons) => {
                return(
                    <button className='navButtons'>{buttons.title}</button>
                )
            })}

        </section>
    )  
}