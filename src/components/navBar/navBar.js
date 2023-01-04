import React from 'react';
import NavButtons from './navButtons'
import NavTitle from './navTitle'

export default function NavBar(){
    return(    
        <header className='navBar'>
            <NavTitle />
            <NavButtons />
        </header>
    )
}