import React from 'react'
import {AiOutlineArrowUp} from "react-icons/ai"
import {HiArrowCircleUp} from "react-icons/hi"
import "./backToTop.css"

const BackToTop = () => {
  return (
    <div className='back-to-top-btn'><a href='#backToTop'><HiArrowCircleUp size={40} /></a></div>
  )
}

export default BackToTop