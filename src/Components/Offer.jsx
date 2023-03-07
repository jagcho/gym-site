import { Button } from 'bootstrap';
import React from 'react'

function Offer() {
  return (<>
 
    <div className='text-center'>
      <div className='heading'>
        <h1>A BIG <span>OFFER</span> FOR THIS SUMMER</h1>
        <p className='details'> Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        <div className='pr-btns'>
            <a href='/Program' className='pr-btn'>JOIN NOW</a> 
        </div>
      </div>
  
    </div>
    <div className="footer-Offer bg-dark text-light">
      <div className="container py-3">
          <div className="row d-flex footer-items">
              <div className="col-lg-4">
                 <h5>Useful Links</h5>
                 <ul>
                     <li><a href="#">Terms</a></li>
                     <li><a href="#">Privacy</a></li>
                     <li><a href="#">About us</a></li>
                     <li><a href="#">Mission</a></li>
                 </ul>
             </div>
             <div className="col-lg-4">
                 <h5>Get Updates</h5>
                 <div className="d-flex subscribe">
                     <input type="text" className="form-control"/>
                     <button className="btn btn-warning">Subscribe</button>
                 </div>
               
             </div>
         </div>
         <div className="row text-center">
           <span>@Jagcho</span>
         </div>
      </div>
   
  </div>
    </>
  )
}

export default Offer;