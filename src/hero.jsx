import { Icon } from '@iconify/react';
import "./hero.css"
import google from "./Assets/01.png"
import men from "./Assets/01 (1).png"
import watch from "./Assets/01 (2).png"
const hero =()=>{
   
    return (
<>

<div className='bg-dark'>
  
<div class="container  ">
      <div class="row ">

        <div class=" col-xs-12 col-md-6  d-flex align-items-center p-3 text-white ">

          <div>
          <div className='d-flex align-item-center'>
            <span className='hr bg-warning mt-2'></span>
            <span className='te ms-4 text-warning'>GET STARTED</span>
          </div>
           <h1 className='head my-3'>What level of  hiker <br /> are you?</h1>
<p className='te my-3'>Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? </p>

<div className='d-flex align-item-center'>
            
            <span className='te text-warning'>Read More</span>
            <Icon className='fs-3 ms-4 text-warning' icon="maki:arrow" />
          </div>
          </div>
        </div>


        <div class="col-xs-12 col-md-6 text-center d-none d-lg-flex mt-4">
       <img className='img img-fluid' src={google} alt="" />
        </div>
        <div class="col-xs-12 col-md-6 text-center d-md-flex d-lg-none mt-4">
       <img className='img-fluid' src={google} alt="" />
        </div>
      </div>


    </div>
</div>
 


<div className='bg-dark'>
  
  <div class="container pt-5 ">
        <div class="row">
  
        <div class="col-xs-12 col-md-6 text-center mt-4 pt-5">
         <img className='img-fluid' src={men} alt="LOGO" />
          </div>
          <div class=" col-xs-12 col-md-6  d-flex align-items-center p-3 text-white ">
  
            <div>
            <div className='d-flex align-item-center'>
              <span className='hr bg-warning mt-2'></span>
              <span className='te ms-4 text-warning'>
              HIKING ESSENTIALS</span>
            </div>
             <h1 className='head my-3'>Picking the right <br /> Hiking Gear!</h1>
  <p className='te my-3'>The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
  Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet. </p>
  
  <div className='d-flex align-item-center my-5'>
              
              <span className='te text-warning'>Read More</span>
              <Icon className='fs-3 ms-4 text-warning' icon="maki:arrow" />
            </div>
            </div>
          </div>
  
  
        </div>
  
  
      </div>
  </div>

  <div className='bg-dark'>
  
  <div class="container pt-5 ">
        <div class="row">
  
    
          <div class=" col-xs-12 col-md-6  d-flex align-items-center p-3 text-white ">
  
            <div>
            <div className='d-flex align-item-center'>
              <span className='hr bg-warning mt-2'></span>
              <span className='te ms-4 text-warning'> WHERE YOU GO IS THE KEY</span>
            </div>
             <h1 className='head my-5'>Understand Your <br /> Map & Timing</h1>
  <p className='te my-4'>To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..</p>
  
  <div className='d-flex align-item-center my-5'>
              
              <span className='te text-warning'>Read More</span>
              <Icon className='fs-3 ms-4 text-warning' icon="maki:arrow" />
            </div>
            </div>
          </div>
  
          <div class="col-xs-12 col-md-6 text-center mt-4 pt-5">
         <img className='img-fluid' src={watch} alt="time" />
          </div>
        </div>
  
  
      </div>
  </div>


</>
    )
};

export default hero