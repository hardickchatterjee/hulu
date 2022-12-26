import React from 'react'
import requests from '../utils/requests'
import {useRouter} from 'next/router'

function Nav() {

  const router = useRouter(); 
  return (
    
    <nav className='relative'>
      <div className='last:pr-24 flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20'>
        {Object.entries(requests).map(([key, {title, url}]) =>(
              <h2 key={key} 
              onClick={()=>{router.push(`/?genre=${key}`)}}
              className='cursor-pointer transform hover:text-white active:text-red-500 transition hover:scale-125'>{title}</h2>
        ))}
        </div>
        <div className='absolute top-0 right-0 bg-gradient-to-l'>
          
        </div>
        <br/><br/>
    </nav>
  )
}

export default Nav