import React from 'react';

const Home=()=>{
  return(
    <div className='home'>
        <div><h3>Student Gallery</h3>
        <img className = "logohome"src= {require("./images/recabn.png")} alt="Nothing"></img>
        </div>
        <div><h3> Final Year Batch </h3></div>
    <div className='final'>
      <div><p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p></div>
     <div> <img className='pic' src = {require("./images/final_yr.jpg")} alt="missing"></img>
      </div>
    </div>
    
    <h3>Third Year</h3>
    <div className='final'>
      <div><p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :</p></div>
     <div> <img className='pic' src = {require("./images/third_yr.jpg")} alt="missing"></img>
      </div>
    </div>
    
    <h3>Second Year</h3>
    <div className='final'>
      <div><p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div> 
     <div> <img className='pic' src = {require("./images/second_yr.jpg")} alt="missing"></img>
      </div>
    </div>
    </div>
  )
}
export default Home ;