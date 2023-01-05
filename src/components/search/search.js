import React from 'react';
import SearchTitle from './searchTitle'
import UserInput from './input'

export default function WholeSearchSection(){
    return(    
        <section className='wholeSearchSection'>
          <SearchTitle />
          <UserInput />
        </section>
    )
}