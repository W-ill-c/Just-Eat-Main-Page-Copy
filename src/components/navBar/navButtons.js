import React from 'react';
import ButtonTitles from './navButtonsTitle'
import { FaGift } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

export default function NavButtons(){
    return(    
        <section className='navButtonsSection'>
            {ButtonTitles.map((buttons) => {
                return(
                    <button className='navButtons'><buttons.icon /> {buttons.title}</button>
                )
            })}

        </section>
    )  
}