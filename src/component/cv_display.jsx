


export function CvDisplay({generalData,educationData, professionalData}){

    return(
        <div className='right_side_of_body'>
        <header className="header_container">
          <h1>{generalData.fullName}</h1>
          <ul className="contact_info">
            <li>
                <i className='bx bxs-phone'>{generalData.phoneNumber}</i>
            </li>
            <li>
                <i className='bx bxs-envelope'>{generalData.email}</i>
            </li>
            <li>
                <i className='bx bxl-linkedin-square'>{generalData.linkedIn}</i>
            </li>
          </ul>
        </header>

        <section id="education">
          <h2>Education</h2>
          <div className="education_container">
            {educationData.map((education, index)=>(
            <div key={index*5} className="individual_education_section">
              <h3>{education.degree}</h3>
              <ul className = "education_details">
                <li className = "education_degree">{education.institution}</li>
                <li className = "education_graduation">{education.graduationDate}</li>
                <li className = "bullet_point education_description">{education.academicDescription}</li>
              </ul>
            </div>  
            ))} 
          </div>
        </section>

        <section id="experience">
          <h2>Professional Experience</h2>
          <div className="experience_container">
            {professionalData.map((professional, index)=>(
            <div key={index*5} className="professional_section">
              <h3>{professional.company}</h3>
              <ul className="professional_details"> 
                  <li className="professional_company">{professional.positionName}</li>
                  <li className="professional_location">{professional.location}</li>
                  <li className="professional_dates">{professional.startDate} - {professional.endDate}</li>
                  <li className="bullet_point professional_description">{professional.professionalDescription}</li>
              </ul>
            </div>
            ))} 
          </div>
        
        </section>
  
      </div>
    ) 
}