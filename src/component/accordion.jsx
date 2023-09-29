import ChevronDown from './icons/chevron_down.svg'
import {FormGeneral} from './forms/form_general';
import {FormEducation} from './forms/form_education';
import { useState, useEffect, useRef } from "react"


export function AccordionContainers({ userData, header, typeOfForms, FormComponent }) {
  
  const [toggle, setToggle] = useState({
    GeneralForm: false,
    EducationForm: false,
    // Add more forms as needed
  });
  const [heightEl, setHeightEl] = useState({
    GeneralForm: "0px", // Initialize with a default height value
    EducationForm: "0px", // Initialize with a default height value
    // Add more forms as needed
  });
  const [addFormList, setAddFormList ] = useState([<FormComponent formsInput={userData} />]
  )
  const addAnotherEducation = () => {
    // Create a new education form instance and add it to the list
    const newEducationForm = <FormComponent formsInput={userData} />;
    setAddFormList((prevForms) => [...prevForms, newEducationForm]);
  }
  const refHeights = useRef({}); // Initialize ref with null
  useEffect(() => {
    // Update the height value in the state for the specific accordion type
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

  return (
    <div className="general_forms_container">
      <button
        onClick={() => toggleAccordion(typeOfForms)}
        className="general_forms_button"
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
          <>
          <div  className="add_another_forms_container">
            {addFormList.length -1=== index && addFormList.length < 5 &&<button onClick={addAnotherEducation}
             className="another_forms_button">Add another Education</button>}
          </div> 
          <div className="delete_forms_container">
              {addFormList.length === 1  && addFormList.length < 5 &&<button onClick ={() =>console.log("Helllo")}
              className="delete_forms_button">Delete Education Fied</button>}
          </div>
        </>
      )}
      </div>
      ))}
        


    </div>
  );
}
