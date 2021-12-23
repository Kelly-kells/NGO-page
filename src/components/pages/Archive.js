import React from 'react'
import { CarouselWrapper } from "react-pretty-carousel"

export function Archive() {
    

    return (
        <div className="archive">
           <CarouselWrapper items={3} mode="gallery">
              <div className="image image1"></div>
              <div className="image image-2"></div>
              <div className="image image-3"></div>
              <div className="image image1"></div>
              <div className="image image-2"></div>
              <div className="image image-3"></div>

           </CarouselWrapper>
        </div>
    )
}

export default Archive;
