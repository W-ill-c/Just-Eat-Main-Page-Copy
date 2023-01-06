import React, { useEffect, useState } from 'react';
import ButtonTitles from './navButtonsTitle'
import { FaGift } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { BsList, BsLock } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";

export default function NavButtons(){
    
    const[openSideBar, setOpenSideBar] = useState(false);

    window.onresize = ()=>{
        if (window.innerWidth > 600){
            setOpenSideBar(false)
        }
    }

    return(    
        <section className={openSideBar ? 'navButtonsSectionActive':'navButtonsSection'}>
            {openSideBar == false && <BsList className='listNav' onClick={()=>{setOpenSideBar(!openSideBar)}} />}
            <BsXLg className='exitNav' onClick={()=>{setOpenSideBar(!openSideBar)}} style={openSideBar ? {display:"inline"}:{display:"none"}} />
            {ButtonTitles.map((buttons) => {
                return(
                    <button className='navButtons'><buttons.icon /> {buttons.title}</button>
                )
            })}
        </section>
    )  
}