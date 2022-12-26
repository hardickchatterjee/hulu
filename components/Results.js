import React from 'react'
import Thumbnail from '../components/thumbnail'
import FlipMove from "react-flip-move"

import Nav from './Nav'

function Results({requests}) {

  //console.log(requests)
  return (
  
    
    <FlipMove className='px-5 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
      
      {requests.map(result =>{
      
      return <Thumbnail key={result.id} result={result}/>
        
    })}
    
        
      </FlipMove>
  )
}

export default Results