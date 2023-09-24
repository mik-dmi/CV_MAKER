import { useState } from "react"


export function General({userData}){
    const [newInput, setInput] = useState({
        fullName: "",
        phoneNumber: "",
        email: ""
      })

    function handleSubmit(e){
        e.preventDefault()
        if(newInput === "")return
        userData(newInput)
        setInput(() => {return { 
            fullName: " ",
            phoneNumber: " ",
            email: " "
          }})
    }
    function handleInputChange(event) {
        const { name, value } = event.target;
        setInput({
          ...newInput,
          [name]: value
        });
      }
    
 
    
    return(
        
      <div className='general_forms_contianer'>
        <div className="forms_header">General</div>
        <form onSubmit={handleSubmit}  className="forms" >
          <div className="label_input_container">
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
              <div className="submit_forms_button">
                  <button className="submit_button">ADD</button>
              </div>
        </form>
      </div>
    ) 
}