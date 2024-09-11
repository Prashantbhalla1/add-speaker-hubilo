import { useState } from "react";
import React from 'react'
import AddSpeakerSidebar from './sidebar'

const Index = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleSideBar = () => {
      setIsVisible(!isVisible);
    };
  return (
    <div className={` ${isVisible ? 'grid-main' : ''}`} > 
        
        <AddSpeakerSidebar isOpen={isVisible} closeSidebar={toggleSideBar} />
    
   
   
     { !isVisible &&  ( <div class='main'>
        <p className='add-p pb-1' > Add speaker </p>
        <button onClick={toggleSideBar} className='add-btn cursor-pointer' > Add speaker </button>
        </div>)}
       

  
    </div>
  )
}

export default Index