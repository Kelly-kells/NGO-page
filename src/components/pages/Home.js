import React from 'react';


export const Home =() => {
    

    return (
        <div className='overall-container'>
        <h1 className='heading'>Innocent Charity Foundation</h1>

           <section className='home-container'>
           <img src="/imageFolder/kids.jpg" alt="" />
               <div className="text">
            <h2>EVERYONE DESERVES A Chance!</h2>
            <p>A peaceful and sane society cannot be achieved <br />
               unless everyone has access to basic Lorem ipsum dolor <br />
                sit amet, consectetur adipisicing elit. Provident, volup <br />tates?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Consequatur  
                eius aspernatur voluptatem esse saepe, <br />tempore qui quasi autem molestias facilis.
                A peaceful and sane society cannot be achieved <br />
               unless everyone has access to basic Lorem ipsum dolor <br />
                sit amet, consectetur adipisicing elit. Provident, volup <br />tates?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Consequatur  
                eius aspernatur voluptatem esse saepe, <br />tempore qui quasi autem molestias facilis.
            </p>
               </div>
            
           </section>

           <section className='container'>
               <h1>OUR GOALS</h1>
                  <p className='type-out'>
                      Innocent charity foundation, is a foundation  that caters for the differently pridveleged.<br />
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sit ad rerum reiciendis amet <br />
                      similique sequi in sunt aperiam dolorum, ea aliquam ullam eum libero vero impedit aliquid nul<br />
                      la aut, debitis, id cum delectus laudantium ut natus. Illo rerum, eaque ad ratione quibusdam cum<br />
                       quaerat quam voluptate maxime aut neque.<br />
                       Innocent charity foundation, is a foundation  that caters for the differently pridveleged.<br />
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sit ad rerum reiciendis amet <br />
                      similique sequi in sunt aperiam dolorum, ea aliquam ullam eum libero vero impedit aliquid nul<br />
                      la aut, debitis, id cum delectus laudantium ut natus. Illo rerum, eaque ad ratione quibusdam cum<br />
                       quaerat quam voluptate maxime aut neque.

                  </p>
               
           </section>



           <section className='archive'>
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
        </section>
        </div>
    )
}
