import React from 'react';
import { useState } from "react"


export function FormEducation({formsInput}) {
    const [newInput, setInput] = useState({
        degree: "",
        institution:"",
        graduationDate : "",
        academicDescription :""
      })

    
    
    function handleSubmit(e){
        console.log("aquii" + newInput    )
        e.preventDefault()
        if(newInput === "")return
        formsInput(newInput)      /*send the NewInput back to main (App.lsx)*/
        setInput(() => {return { 
            degree: "",
            institution:"",
            graduationDate : "",
            academicDescription :""
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
                <label>Name Of Institution:</label> 
                <input 
                type="text"
                name="institution"
                value={newInput.institution}
                onChange={handleInputChange}
                /> 
            </div>
            <div className="label_input_container">
                <label>Degree:</label> 
                <input 
                type="text"    
                name = "degree"
                value={newInput.degree}
                onChange={handleInputChange}
                /> 
            </div>
            <div className="label_input_container">
                <label>Graduation Date:</label>
                <input 
                name ="graduationDate "
                value={newInput.graduationDate}
                onChange={handleInputChange}
                type="date" /> 
            </div>
            <div className="label_input_container">
                <label>Education Description:</label>
                <input 
                name = "academicDescription"
                value={newInput.academicDescription}
                onChange={handleInputChange}
                type="text" /> 
            </div>

            <div className="submit_forms_button">
                <button className="submit_button">Save</button>
            </div>
          </form>
    );
  }
  