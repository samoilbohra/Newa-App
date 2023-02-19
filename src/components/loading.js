import React  from 'react'
import "./loading.css";




export default  function loading () {
  
    return (
      <div className='container ' 
      style={{
        position: 'absolute',
    //     top: '50%',
        left: '50%',
    //     margintop: '-50px',
    //     marginleft: '-50px',
    //     width: '100px',
    //     height: '100px',
    }}
    >
       <div className="lds-hourglass"></div>
      </div>
    )
  
}
