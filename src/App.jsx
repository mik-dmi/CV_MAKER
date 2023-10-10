import { useState } from 'react'
import './App.css'
import { FormGeneral } from './component/forms/form_general';
import { FormEducation } from './component/forms/form_education';
import {FormProfessional} from './component/form_professional';
import {CvDisplay} from './component/cv_display';
import {AccordionContainers} from './component/accordion';



function App() {
  const [userInputGeneral, setUserInputGeneral] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    linkedIn: ""
  })
  const [userInputEducation, setUserInputEducation] = useState([{
      degree: "",
      institution:"",
      graduationDate: "",
      academicDescription:""
}])
  const [userInputProfessional, setUserInputProfessional]= useState([{
      positionName: "",
      company: "",
      location:"",
      startDate:"",
      endDate:"",
      professionalDescription:""
  }])
  function addGeneralInfo(generalInfo) {
    //console.log(generalInfo)
    setUserInputGeneral(currentInput =>{return {
         ...currentInput,fullName: generalInfo.fullName, phoneNumber: generalInfo.phoneNumber, email: generalInfo.email,  linkedIn: generalInfo.linkedIn
      }
    })
  } 
  function addEducationalInfo(educationInfo) {
    setUserInputEducation((prevEducation) => [...prevEducation, {
      degree: educationInfo.degree,
      institution: educationInfo.institution ,
      graduationDate: educationInfo.graduationDate,
      academicDescription: educationInfo.academicDescription
    }]);
  };
  function addProfessionalInfo(professionalInfo){
    setUserInputProfessional((prevProfessional) =>[...prevProfessional,{
      positionName: professionalInfo.positionName,
      company: professionalInfo.company ,
      location: professionalInfo.location,
      startDate: professionalInfo.startDate,
      endDate: professionalInfo.endDate,
      professionalDescription: professionalInfo.professionalDescription
    }])
  }

  //console.log("Full Name: " + userInputGeneral[].fullName);
  //console.log("Phone Number: " + userInputGeneral.phoneNumber);
  //console.log("Email: " + userInputGeneral.email);
  return (
    <div className='body_container'>
      <div className='left_side_of_body'>
        <AccordionContainers userData = {addGeneralInfo} header={"General"} typeOfForms={"GeneralForm"} FormComponent={FormGeneral} />
        <AccordionContainers userData = {addEducationalInfo} header={"Education"} typeOfForms={"EducationForm"} FormComponent={FormEducation}/>
        <AccordionContainers userData = {addProfessionalInfo} header={"Professional Experience"} typeOfForms={"ProfessionalForm"} FormComponent={FormProfessional}/>
      </div>
      <CvDisplay generalData = {userInputGeneral} educationData = {userInputEducation} />  
  
    </div>
  )
}

export default App
