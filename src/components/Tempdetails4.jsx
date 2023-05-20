import React from 'react'

function Tempdetails4() {
  return (
    <div className='w-3/4 mx-4'>
        <h2>Today at</h2>
        <div>
            <ul>
                <li>
                    <div>
                        <p>3 PM</p>
                        <img 
                            src="https://openweathermap.org/img/wn/01d@2x.png" 
                            alt="" 
                            className='w-25'/>
                        <p>&deg;</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Tempdetails4