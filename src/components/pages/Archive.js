import React from 'react'

export function Archive() {
    

    return (
        <>
        <div className='archive'>
          <span id='slider-image1'></span>
          <span id='slider-image2'></span>
          <span id='slider-image3'></span>
          <span id='slider-image4'></span>
        <div className="image-container">
        <img src="/imageFolder/b0y.jpg"className='slider' alt="" />
        <img src="/imageFolder/happy.jpg" className='slider'alt="" />
        <img  src="/imageFolder/kids.jpg"className='slider' alt="" />
        <img src="/imageFolder/chance.jpg"className='slider' alt="" />
        </div>
        <div className="button-container">
      <a href="#slider-image1" className='slider-button'> </a>
      <a href="#slider-image2" className='slider-button'> </a>
      <a href="#slider-image3" className='slider-button'> </a>
      <a href="#slider-image4" className='slider-button'> </a>
        </div>
        </div>
        </>
    )
}
