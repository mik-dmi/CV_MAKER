import { useState } from 'react'
import './App.css'
import { FormGeneral } from './component/forms/form_general';
import { FormEducation } from './component/forms/form_education';
import {FormProfessional} from './component/forms/form_professional';
import {CvDisplay} from './component/cv_display';
import {AccordionContainers} from './component/accordion';



function App() {
  const [userInputGeneral, setUserInputGeneral] = useState({
    fullName: "Your Name",
    phoneNumber: "+49xxxxxxxxxx",
    email: "example@gmail.com",
    linkedIn: "linkedin.com/in/xxxxxxx/"
  })
  const [userInputEducation, setUserInputEducation] = useState([{
    degree: "Your Degree",
    institution:"Name of the Institution",
    graduationDate : "XX-XX-20XX",
    academicDescription : "Lorem ipsum , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboriDuis a ute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia",
    idNumberOfForms: ""
  }
])
  const [userInputProfessional, setUserInputProfessional]= useState([{
      positionName: "Name of th Position",
      company: "Company's Name",
      location:"Location",
      startDate:"XX-XX-20XX",
      endDate:"XX-XX-20XX",
      professionalDescription:"Lorem ipsum , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboriDuis a ute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia"
  }
])
  function addGeneralInfo(generalInfo) {
    //console.log(generalInfo)
    setUserInputGeneral(currentInput =>{return {
         ...currentInput,fullName: generalInfo.fullName, phoneNumber: generalInfo.phoneNumber, email: generalInfo.email,  linkedIn: generalInfo.linkedIn
      }
    })
  } 
  function addEducationalInfo(educationInfo) {
    setUserInputEducation((prevEducation) => {
      // Clone the previous education array
      const updatedEducation = [...prevEducation];
        // Find the index based on idNumberOfForms
      const indexToUpdate = educationInfo.idNumberOfForms ;
      updatedEducation[indexToUpdate] = educationInfo;
      return updatedEducation;
    });
  }
  
  function addProfessionalInfo(professionalInfo){
    setUserInputProfessional((prevProfessionalInfo) => {
      // Clone the previous  array
      const updatedProfessional = [...prevProfessionalInfo];
        // Find the index based on idNumberOfForms
      const indexToUpdate = professionalInfo.idNumberOfForms ;
      updatedProfessional[indexToUpdate] = professionalInfo;
      return updatedProfessional;
    });

  }

function removeForms(typeOfForm, position ){
  if (typeOfForm ===  "EducationForm"){
    setUserInputEducation((prevEducationInfo) => {
       const updateInfo = prevEducationInfo.filter((a)=> a.idNumberOfForms !== position   ) 
      console.log(updateInfo)
      return  updateInfo
    })
  }   
  if (typeOfForm ===  "ProfessionalForm"){
      setUserInputProfessional((prevProfessionalInfo) => {
        const updateInfo = prevProfessionalInfo.filter((a)=> a.idNumberOfForms !== position   ) 
       console.log(updateInfo)
       return  updateInfo
     })
  }     
  
}
 
  //console.log("Full Name: " + userInputGeneral[].fullName);
  //console.log("Phone Number: " + userInputGeneral.phoneNumber);
  //console.log("Email: " + userInputGeneral.email);
  return (
    <div className='body_container'>
      <div className='left_side_of_body'>
        <AccordionContainers userData = {addGeneralInfo} header={"General"} typeOfForms={"GeneralForm"} FormComponent={FormGeneral}  />
        <AccordionContainers userData = {addEducationalInfo} header={"Education"} typeOfForms={"EducationForm"} FormComponent={FormEducation} deleteForms = {removeForms}/>
        <AccordionContainers userData = {addProfessionalInfo} header={"Professional Experience"} typeOfForms={"ProfessionalForm"} FormComponent={FormProfessional} deleteForms = {removeForms}/>
      </div>
      <CvDisplay generalData = {userInputGeneral} educationData = {userInputEducation}  professionalData = {userInputProfessional} /> 
  
    </div>
  )
}

export default App
