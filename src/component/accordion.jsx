import ChevronDown from './icons/chevron_down.svg'
import {FormGeneral} from './forms/form_general';
import { useState, useEffect, useRef } from "react"


export function AccordionContainers({userData, header , typeOfForms}){

    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeighEl] = useState();

    const refHeight = useRef()

    // Define forms components
    const formComponents = {
        FirstForm: FormGeneral,

    };

    useEffect(() => { 
      setHeighEl(`${refHeight.current.scrollHeight}px`)

    }, [])

    const toggleState = () => {
      setToggle(!toggle)
    }


    const FormComponent = formComponents[typeOfForms];

    return(
        
      <div className='general_forms_container'>
        <button 
        onClick={toggleState}
        className="general_forms_button">
            <span className="title_forms">{header}</span>
            <img src = {ChevronDown} 
            className={`imgChev ${toggle && 'active'}`}    
            />
        </button>
        <div 
        style={{height: toggle ? `${heightEl}` : "0px"}}
        className={toggle ? "accordion_toggle animated" : "accordion_toggle"} 
        ref={refHeight}  
        aria-hidden = {toggle ? "true" : "false"}
        >
        {FormComponent && (
        <FormComponent formsInput = {userData}/>
      )}
        </div>
      
      </div>
    ) 
}