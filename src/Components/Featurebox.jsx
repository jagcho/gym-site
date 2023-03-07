
import React from 'react'

function Featurebox(props) {
  return (<>
      <div class="card m-auto">
    <div className='text-center '>
    <img src={props.image} alt=''/>
            </div>
                  <div class="card-body text-center ">
                    <h6 class="card-subtitle mb-2 text-muted  fw-light">workout</h6>
                    
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
                    <div class="text-center">
                      <a class="btn btn-dark w-100"  role="button" > More Details</a>
                   
                  </div>
                </div>
  
    </>
  )
}

export default Featurebox