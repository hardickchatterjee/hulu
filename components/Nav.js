import React from 'react'
import requests from '../utils/requests'
import {useRouter} from 'next/router'
import { useState } from 'react'

const Nav = () => {
  const router = useRouter()
  const [activeItem, setActiveItem] = useState('')

  return (
    <nav className="relative">
      <div className="flex px-10 space-x-10 overflow-x-scroll text-2xl sm:px-20 whitespace-nowrap sm:space-x-20">
        {Object.entries(requests).map(([key, { title, url }]) => ( 
          <h2
            key={key}
            onClick={() =>
              router.push(`/?genre=${key}`) && setActiveItem(title)
            }
            className={`transition duration-100 transform cursor-pointer last:pr-24 hover:scale-125 hover:text-green-500 active:text-green-500 ${
              activeItem == title && 'text-green-500' 
            }`}
          >
            {title}
          </h2>
        ))}
      </div>
      {/* Fade Effect */}
      <div className="absolute top-0 left-0 bg-gradient-to-r to-transparent from-[#06202A] h-10 w-1/12" />
      <div className="absolute top-0 right-0 bg-gradient-to-l to-transparent from-[#06202A] h-10 w-1/12" />
    </nav>
  )
}

export default Nav
