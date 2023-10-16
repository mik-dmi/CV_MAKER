import React from 'react';
import { useState } from "react"

export function FormProfessional({formsInput, numbForm}){
    const [newInput, setInput] = useState({
        positionName: "",
        company: "",
        location:"",
        startDate:"",
        endDate:"",
        professionalDescription:"",
        idNumberOfForms: numbForm
      })

    
    
    function handleSubmit(e){
        e.preventDefault()
        if(newInput === "")return
        formsInput(newInput)      /*send the NewInput back to main (App.lsx)*/
        setInput(() => {return { 
            positionName: "",
            company: "",
            location:"",
            startDate:"",
            endDate:"",
            professionalDescription:"",
            idNumberOfForms: newInput.idNumberOfForms
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
        <form onSubmit={(e) =>{handleSubmit(e);} 
        } className="forms" >
            <div className="label_input_container" >
                <label>Position:</label> 
                <input 
                type="text"
                name="positionName"
                value={newInput.positionName}
                onChange={handleInputChange}
                placeholder="Position's Name"
                required
                /> 
            </div>
            <div className="label_input_container">
                <label>Company:</label> 
                <input 
                type="text"    
                name = "company"
                value={newInput.company}
                placeholder="Company's Name"
                onChange={handleInputChange}
                
                required
                /> 
            </div>
            {/*<div className="label_input_container">
                <label>Location:</label> 
                <input 
                type="text"    
                name = "location"
                value={newInput.location}
                onChange={handleInputChange}
                required
                /> 
            </div>*/}
            <div className="label_input_container">
                <label>Starting Date:</label>
                <input 
                name ="startDate"
                value={newInput.startDate}
                onChange={handleInputChange}
                type="date"
                required
                /> 
            </div>
            <div className="label_input_container">
                <label>Ending Date:</label>
                <input 
                name ="endDate"
                value={newInput.endDate}
                onChange={handleInputChange}
                type="date"
                required
                
                 /> 
            </div>
            <div className="label_input_container">
                <label>Description:</label>
                <textarea
                name = "professionalDescription"
                value={newInput.professionalDescription}
                onChange={handleInputChange}
                placeholder='Less than 250 characters'
                maxLength={250}
                type="text" /> 
            </div>

            <div className="submit_forms_button">
                <button className="submit_button">Save</button>
            </div>
          </form>
    );
  }
  