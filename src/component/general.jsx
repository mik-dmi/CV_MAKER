import { useState, useEffect, useRef } from "react"
import ChevronDown from './icons/chevron_down.svg'


export function General({userData}){
    const [newInput, setInput] = useState({
        fullName: "",
        phoneNumber: "",
        email: ""
      })

    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeighEl] = useState();

    const refHeight = useRef()

    useEffect(() => { 
      setHeighEl(`${refHeight.current.scrollHeight}px`)

    }, [])

    const toggleState = () => {
      setToggle(!toggle)
    }

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
        
      <div className='general_forms_container'>
          <button 
          onClick={toggleState}
          className="general_forms_button">
            <span className="title_forms">General</span>
            <img src = {ChevronDown} 
            className={`imgChev ${toggle && 'active'}`}

            
            />
          </button>
        <div 
        style={{height: toggle ? `${heightEl}` : "0px"}}
        className={toggle ? "accordion_toggle animated" : "accordion_toggle"}
        ref={refHeight}>
          <form onSubmit={handleSubmit}  className="forms" ref={refHeight} aria-hidden = {toggle ? "true" : "false"} >
            <div className="label_input_container"
            >
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
      
      </div>
    ) 
}