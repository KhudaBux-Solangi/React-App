import { Icon } from '@iconify/react';
import "./header.css"
const Header =()=>{
   
    return (
        <>

<div className='sticky-top border-bottom'>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="head navbar-brand fs-3" href="#">MNTN</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="te nav-link mx-2 active" aria-current="page" href="#">Equipment</a>
        </li>
        <li className="nav-item">
          <a className="te nav-link mx-2" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="te nav-link mx-2" href="#">Blog</a>
        </li>
      
     
     
      </ul>
     
     <div>
     <Icon className='fs-3' icon="gg:profile" />
     <a className='te text-decoration-none text-dark ms-2' href="">Account</a>
     </div>
    </div>
  </div>
</nav>
</div>
<div className='back'>

   <div className='text d-none d-lg-flex'>
   <div className='container  d-flex justify-content-center justify-content-between pt-5 '>
        <div className='d-flex flex-column ' >
            <span className='d-flex flex-column pt-5 '>Follow Us</span>
            <Icon className='mt-3 fs-3' icon="hugeicons:instagram" />
            <Icon className='mt-3 fs-3' icon="mage:twitter" />

        </div>
       
        <div className=' text-white'> 
        <div className='d-flex align-item-center'>
            <span className='hr bg-warning mt-3'></span>
            <h3 className='ms-4 text-warning'>A Hiking guide</h3>
          </div>
          <h1 className='heading'>Be prepared for The <br /> Mountains and beyond!</h1>
          <h4 className='text-warning'>Scroll down   <Icon className='fs-3' icon="lucide:move-down" /> </h4>
        </div>

        <div className='pt-5 text-white'>
       
         <span className='pt-5'>Start</span> <br />
         <span className='py-5'>01</span><br />
         <span className='py-5'>02</span><br />
         <span className='py-5'>03</span><br />
        
        
        </div>
    </div>
   </div>



   <div className='d-md-flex d-lg-none pt-5'>
   <div className='container   '>
       
   <div className='d-flex' >
            <h6 className='d-flex flex-column '>Follow Us</h6>
            <Icon className='mx-3 fs-3' icon="hugeicons:instagram" />
            <Icon className='mx-2 fs-3' icon="mage:twitter" />

        </div>
        <div className='pt-5 text-dark mt-5'> 
        <div className='d-flex align-item-center'>
            <span className='hr bg-warning mt-3'></span>
            <span className='ms-4 text-warning'><h5>A Hiking guide</h5></span>
          </div>
          <p className='heading-1'>Be prepared for The Mountains and beyond!</p>
          <h5 className='text-warning mt-5'>Scroll down   <Icon className='fs-3' icon="lucide:move-down" /> </h5>
        </div>

        <div className='pt-5 mt-5 d-flex justify-content-between text-dark'>
       
         <h6 className=''>Start</h6> <br />
         <h6 className='mx-3'>01</h6><br />
         <h6 className='mx-3'>02</h6><br />
         <h6 className='mx-3'>03</h6><br />
        
        
        </div>
    </div>
   </div>
</div>


        </>
    )
};

export default Header