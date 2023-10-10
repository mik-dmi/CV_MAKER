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
        setInput(() => {return { 
            fullName: "",
            phoneNumber: "",
            email: "",
            linkedIn: ""
          }})
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
                value={newInput.fullName}
                onChange={handleInputChange}
                /> 
            </div>
            <div className="label_input_container">
                <label>Phone Number:</label> 
                <input 
                type="tel"    
                name = "phoneNumber"
                value={newInput.phoneNumber}
                onChange={handleInputChange}
                /> 
            </div>
            <div className="label_input_container">
                <label>Email:</label>
                <input 
                name = "email"
                value={newInput.email}
                onChange={handleInputChange}
                type="email" /> 
            </div>
            <div className="label_input_container">
                <label>LinkedIn:</label> 
                <input 
                type="url"    
                name = "linkedIn"
                value={newInput.linkedIn}
                onChange={handleInputChange}
                /> 
            </div>
                <div className="submit_forms_button">
                    <button className="submit_button">Save</button>
                </div>
          </form>
    );
  }
  