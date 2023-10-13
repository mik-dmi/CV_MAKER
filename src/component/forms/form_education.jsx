import React from 'react';
import { useState } from "react"


export function FormEducation({formsInput, numbForm}) {
    const [newInput, setInput] = useState({
        degree: "",
        institution:"",
        graduationDate : "",
        academicDescription : "",
        idNumberOfForms: numbForm
      })
    //console.log("Aqui ====")
    //console.log(numbForm) 
    
    function handleSubmit(e) {
 
        if (newInput === "") return;
        e.preventDefault();
        formsInput(newInput); // Send newInput back to the parent component
        setInput({
          degree: "",
          institution: "",
          graduationDate: "",
          academicDescription: "",
          idNumberOfForms: newInput.idNumberOfForms
        });
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
  