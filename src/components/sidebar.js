import { useState } from "react";
import React from 'react'
import { speakerData } from "../utils";
import SpeakerCard from "./speakerCard";
const AddSpeakerSidebar = ({ isOpen, closeSidebar }) => {

    const [checkedItems, setCheckedItems] = useState(
        speakerData.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
      );
      const handleCheckboxChange = (id, checked) => {
        setCheckedItems((prev) => ({
          ...prev,
          [id]: checked,
        }));
      };
      const isAnyItemChecked = Object.values(checkedItems).some(Boolean);
      const [searchSpeaker, setSearchSpeaker] = useState('');
      const [filteredSpeaker, setFilteredSpeaker] = useState(speakerData);
    
  
      const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchSpeaker(value);
    
        // Filter the array based on the input
        const filtered = speakerData.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredSpeaker(filtered);
      };
    
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''} d-flex`}>
   <div className="header" >
   <span className='header-p' > Add speaker </span>
   <span className=" info-p float-right cursor-pointer pb-0" onClick={closeSidebar}>X</span>
     </div>
     <div className="d-flex p-4 h-65 pb-0">
        <input    value={searchSpeaker}
        onChange={handleInputChange} type="text" className="input mb-1" placeholder="Search..." />
        {/* <img className="s-icon" src={`asset/images/MagnifyingGlass.png`}   /> */}

        <div className="d-flex overflow-y " >
        {filteredSpeaker.map((item) => (
        <SpeakerCard
          key={item.id} // Unique key for each child component
          id={item.id}
          name={item.name}
          role={item.role}
          checked={checkedItems[item.id]}
          companyName={item.company}
          checkBoxChange={handleCheckboxChange}
        />
      ))}

     { filteredSpeaker.length==0 && ( <p className="add-p p-4" > Oops! No  speaker..... </p>)}
     

        </div>
    
     </div>
     <div className="d-flex-row1 footer p-4 " >
        <div className="w-70" 
        
        >
        <button  className={`add-btn w-80 mr-1  ${!isAnyItemChecked?'disabled':''} `}  disabled={!isAnyItemChecked} > Add </button>
        <button className="cancel-btn w-80"   > Cancel </button>
        </div>
        <p className="orange-p" > Create a speaker </p>
     </div>


   
   
    </div>
  )
}

export default AddSpeakerSidebar