import { useState } from 'react'
import './App.css'
import {General} from './component/general';
import {Education} from './component/education';
import {PraticalExperience} from './component/pratical_experience';
import {CvDisplay} from './component/cv_display';


function App() {
  const [userInput, setUserInput] = useState({
    fullName: "",
    phoneNumber: "",
    email: ""
  })

  
  function addGeneralInfo(info) {
    setUserInput(currentInput =>{return {
         ...currentInput,fullName: info.fullName, phoneNumber: info.phoneNumber, email: info.email
      }
  
    })

  } 
   console.log("Full Name: " + userInput.fullName);
  console.log("Phone Number: " + userInput.phoneNumber);
  console.log("Email: " + userInput.email);
  
  return (
    <div className='body_container'>
      <div className='left_side_of_body'>
        <General userData = {addGeneralInfo}/>
        <Education />
        <PraticalExperience />
      </div>
      <div className='right_side_of_body'>
        <CvDisplay />  
      </div>

    </div>
  )
}

export default App