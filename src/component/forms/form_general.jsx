import React from 'react';
import { useState } from "react"


export function FormGeneral({formsInput}) {
    const [newInput, setInput] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        linkedIn: ""
      })

    
    
    function handleSubmit(e){
        console.log("aquii" + newInput    )
        e.preventDefault()
        if(newInput === "")return
        formsInput(newInput)      /*send the NewInput back to main (App.lsx)*/
        /*setInput(() => {return { 
            fullName: "",
            phoneNumber: "",
            email: "",
            linkedIn: ""
          }})*/
    }
    function handleInputChange(event) {
        const { name, value } = event.target;
        setInput({
          ...newInput,
          [name]: value
        });
      }  
    
   
   
    return (
        <form onSubmit={handleSubmit}  className="forms" >
            <div className="label_input_container" >
                <label>Full Name:</label> 
                <input 
                type="text"
                name="fullName"
                placeholder='Your Name'
                value={newInput.fullName}
                onChange={handleInputChange}
                required
                /> 
            </div>
            <div className="label_input_container">
                <label>Phone Number:</label> 
                <input 
                type="tel" 
                placeholder='+49...'   
                name = "phoneNumber"
                value={newInput.phoneNumber}
                onChange={handleInputChange}
                required
                /> 
            </div>
            <div className="label_input_container">
                <label>Email:</label>
                <input 
                name = "email"
                placeholder='example@gmail.com' 
                value={newInput.email}
                onChange={handleInputChange}
                required
                type="email" /> 
                
            </div>
            <div className="label_input_container">
                <label>LinkedIn:</label> 
                <input 
                type="url"    
                name = "linkedIn"
                placeholder='linkedin.com/in/...' 
                value={newInput.linkedIn}
                onChange={handleInputChange}
                required
                /> 
            </div>
                <div className="submit_forms_button">
                    <button className="submit_button">Save</button>
                </div>
          </form>
    );
  }
  