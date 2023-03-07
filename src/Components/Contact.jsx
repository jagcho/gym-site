import React from 'react'

function Contact() {
  return (
    <>
    <div className='contact '>

    
    <form className="needs-validation" novalidate="" action="">
                <div>
                  <label for="name" className="form-label">Name</label>
                  <input type="text" className="form-control" placeholder="Full Name" required=""/>
                  <div className="invalid-feedback">
                    Name required
                  </div>
                </div>
                <div>
                  <label for="email" className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Email" required=""/>
                  <div className="invalid-feedback">
                    Valid Email required
                  </div>
                </div>
                <div>
                  <label for="phone" className="form-label">Phone</label>
                  <input type="tel" className="form-control" placeholder="phone" required="" minlength="6"/>
                  <div className="invalid-feedback">
                    Valid Phone
                  </div>
                </div>
        
                  <input type="submit" className="form-control btn btn-success mt-4" value="Submit"/>
              </form>

</div>
<div className="footer bg-dark text-light">
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
         </div>
         <div className="row text-center">
           <span>@Jagcho</span>
         </div>
      </div>
   
  </div>
</>
  )
}

export default Contact