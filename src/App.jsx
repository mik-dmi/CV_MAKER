import { useState } from 'react'
import './App.css'
import { FormGeneral } from './component/forms/form_general';
import { FormEducation } from './component/forms/form_education';
import {PraticalExperience} from './component/pratical_experience';
import {CvDisplay} from './component/cv_display';
import {AccordionContainers} from './component/accordion';


function App() {
  const [userInputGeneral, setUserInputGeneral] = useState({
    fullName: "",
    phoneNumber: "",
    email: ""
  })

  const [userInputEducation, setUserInputEducation] = useState([{
      degree: "",
      institution:"",
      graduationDate: "",
      academicDescription:""
  }])

  
  function addGeneralInfo(generalInfo) {
    //console.log(generalInfo)
    setUserInputGeneral(currentInput =>{return {
         ...currentInput,fullName: generalInfo.fullName, phoneNumber: generalInfo.phoneNumber, email: generalInfo.email
      }
    })
  } 


  function addEducationalInfo(educationInfo) {
    
    setUserInputEducation([...userInputEducation, {
      degree: educationInfo.degree,
      institution: educationInfo.institution ,
      graduationDate: educationInfo.graduationDate,
      academicDescription: educationInfo.academicDescription
    }]);
  };

  console.log("ola")
  console.log( userInputEducation);

  //console.log("Full Name: " + userInputGeneral[].fullName);
  //console.log("Phone Number: " + userInputGeneral.phoneNumber);
  //console.log("Email: " + userInputGeneral.email);
  
  return (
    <div className='body_container'>
      <div className='left_side_of_body'>
        
        <PraticalExperience/><AccordionContainers userData = {addGeneralInfo} header={"General"} typeOfForms={"GeneralForm"} FormComponent={FormGeneral} />
        <AccordionContainers userData = {addEducationalInfo} header={"Education"} typeOfForms={"EducationForm"} FormComponent={FormEducation}/>
      </div>
      <div className='right_side_of_body'>
        <CvDisplay />  
      </div>

    </div>
  )
}

export default App
