import ChevronDown from './icons/chevron_down.svg'
import { useState, useEffect, useRef } from "react"


export function AccordionContainers({ userData, header, typeOfForms, FormComponent , deleteForms }) {
  
  const [toggle, setToggle] = useState({
    GeneralForm: false,
    EducationForm: false,
    ProfessionalForm: false,
    // Add  forms
  });
  const [heightEl, setHeightEl] = useState({
    GeneralForm: "0px", // Initialize  height 
    EducationForm: "0px", // Initialize  height 
    ProfessionalForm: "0px",
    // Add more forms 
  });

  const [addFormList, setAddFormList ] = useState([<FormComponent formsInput={userData} numbForm = {0} />]
  )


  const addAnotherForms = (position ,idForm) => {
    let aux = position +1
    const firstPartHeight = 500;
    setHeightEl((prevState) => ({
     ...prevState,
      [idForm]: firstPartHeight,
    })); 
    
    const newForm = <FormComponent formsInput={userData}  numbForm = {aux} />;
    setAddFormList((prevForms) => [...prevForms, newForm]);
  }
  const refHeights = useRef({}); // Initialize ref with null
    useEffect(() => {
      // Update the height in the state for the specific accordion type
      setHeightEl((prevHeightEl) => ({
        ...prevHeightEl,
        [typeOfForms]: refHeights.current ?
        `${refHeights.current[typeOfForms].scrollHeight}px` : "0px",
      }));
    }, [typeOfForms]);

  const toggleAccordion = (type) => {
    setToggle((prevToggle) => ({
      ...prevToggle,
      [type]: !prevToggle[type],
    }));
  };
  const deleteEducationForm  = (deletePosition)=> { 
    console.log("deletePosition antes = " + deletePosition)
    const newArrForms = addFormList.filter( (_,aux)=> aux !== deletePosition)
    setAddFormList(newArrForms)
    
    
    deleteForms(typeOfForms ,deletePosition )     // send the type of forms it is being deleted and the position in of the forms deleted
  }


  return (
    <div className="general_forms_container">
      <button
        onClick={() => toggleAccordion(typeOfForms)}
        className={`general_forms_button ${toggle[typeOfForms] ? 'active' : ''}`}
      >
        <span className="title_forms">{header}</span>
        <img
          src={ChevronDown}
          className={`imgChev ${toggle[typeOfForms] && 'active'}`}
        />
      </button>
      
      
      {addFormList.map((singleForm, index) =>(
        <div
        key={index}
        style={{
          height: toggle[typeOfForms] ? `${heightEl[typeOfForms]}` : "0px" ,
        }}
        className={toggle[typeOfForms] ? "accordion_toggle animated" : "accordion_toggle"}
        ref={(el) => (refHeights.current[typeOfForms] = el)} 
        aria-hidden={toggle[typeOfForms] ? "true" : "false"}
      >
        
    
         {singleForm}
         

        {typeOfForms !== "GeneralForm" &&(
          <div className='bottom_buttons'>
            <div  className="add_another_forms_container">
              {addFormList.length - 1 === index && addFormList.length < 3 && (
                <button onClick={() => { addAnotherForms(index, typeOfForms);  }}
                className="another_forms_button">Add</button>)}
            </div> 
            <div className="delete_forms_container">
              {index === addFormList.length -1 && <button onClick ={()=>(deleteEducationForm(index)) }
              className="delete_forms_button">Delete</button>}
                {index === 0 && (<button  onClick={() => deleteEducationForm(index)} className="delete_forms_button"
                style={{ display: 'none' }}
                >X</button>
                )}
            </div>
          </div>   
      )}
      </div>
      ))}
    </div>
  );
}
