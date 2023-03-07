import React from 'react'
import Featurebox from './Featurebox'
import fimage1 from '../images/1.svg'
import fimage2 from '../images/2.svg'
import fimage3 from '../images/3.svg'
import fimage4 from '../images/4.svg'

function Program() {
  return (
  <div className=" row container-Program text-center">
  
          <div className='row a-container'>
            <div className='col-6'>
            <Featurebox  image={fimage1} title="WeightLifting"/><br/>
            </div>
            <div className='col-6'>
            <Featurebox  image={fimage2} title="Specific Muscle"/><br/>
            </div>
            <div className='col-6'>
            <Featurebox  image={fimage3} title="Flex Your Muscle"/><br/>
            </div>
            <div className='col-6'>
            <Featurebox  image={fimage4} title="Cardio Excercise"/><br/>
            </div>
          </div>
  </div>
  )
}

export default Program;