import { useState } from "react";
import React from 'react'
import AddSpeakerSidebar from './sidebar'
import Checkbox from '@mui/material/Checkbox';
import { green } from "@mui/material/colors";


const SpeakerCard = ({ name, role, companyName,checkBoxChange,checked,id }) => {
    const handleChange = (event) => {
        checkBoxChange(id, event.target.checked);
      };
  return (
    <div className={`d-flex-row p-4 ${checked?'b-green':''} `} > 
    <div className="d-flex pr-24 w-20" >
    <img className="" src={`asset/images/Avatar.png`}   />


    </div>
    <div className="d-flex" style={{width:'80%'}} >
   <p className="name-p" >
    {name}
   </p>
   <p className="p-10" >
   <span className="info-p" > {role} </span> <span style={{
    paddingLeft:'15px',
    paddingRight:'15px',
    opacity:'20%',
    color:'black'
   }} > | </span>  <span  className="info-p" > {companyName} </span>
   </p>
   <p className="orange-p" >
    <img  style={{
      width:'18px',
      marginBottom:'-0.3rem'
      }} src={`asset/images/black_edit.png`}   />
   <span style={{marginTop:'-5px'}} > Edit speaker </span>
   </p>


    </div> <div className="d-flex float-right" >
    <Checkbox
           checked={checked}
           onChange={handleChange}
         
            sx={{
             
                '&.Mui-checked': {
                  color: green[600], // Color when checked
                },
              }}
      
          />
   

    </div>
    
       

  
    </div>
  )
}

export default SpeakerCard