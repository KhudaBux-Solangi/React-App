import { Icon } from '@iconify/react';
import "./footer.css"
const footer =()=>{
   
    return (
        <>

<div className="bg-dark">
    <div className="container pt-5">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-4 d-flex justify-content-between">
        <div className="col mb-3">
        <h1 className='head te text-white'>MNTN</h1>
         <h6 className='te text-white'>
         Get out there & discover your next slope, mountain & destination!
         </h6>
         
        </div>
       
     <div className="col mb-3 mt-4 ms-lg-5">
          <h5 className="text-warning">More on The Blog</h5>
        
          <ul className="nav flex-column mt-3">
            <li className="nav-item mb-2"><a href="#" className="te nav-link p-0  text-white">About MNTN</a></li>
            <li className="nav-item mb-2"><a href="#" className="te nav-link p-0  text-white">Contributors & Writers</a></li>
            <li className="nav-item mb-2"><a href="#" className="te nav-link p-0  text-white">Write For Us</a></li>
            <li className="nav-item mb-2"><a href="#" className="te nav-link p-0  text-white">Contact Us</a></li>
            <li className="nav-item mb-2"><a href="#" className="te nav-link p-0  text-white">Privacy Policy</a></li>
        
          </ul>
        </div>
        <div className="col mb-3 mt-4">
          <h5 className="text-warning">More on MNTN</h5>

          <ul className="nav flex-column mt-3">
            <li className="nav-item mb-2"><a href="#" className="te nav-link p-0  text-white">The Team</a></li>
            <li className="nav-item mb-2"><a href="#" className="te nav-link p-0  text-white">Job</a></li>
            <li className="nav-item mb-2"><a href="#" className="te nav-link p-0  text-white">Press</a></li>
          
          </ul>
        </div>
   
      </footer>
    </div>
  </div>


        </>
    )
};

export default footer