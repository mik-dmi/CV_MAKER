


export function CvDisplay({generalData,educationData, professionalData}){

    return(
        <div className='right_side_of_body'>
        <header className="header_container">
        {(generalData.fullName || generalData.phoneNumber || generalData.emil || generalData.linkedIn) &&(
          <>
          <h1>{generalData.fullName}</h1>
          <ul className="contact_info">
            <li>
                <i className='bx bxs-phone'></i>
                <span>{generalData.phoneNumber}</span>
            </li>
            <li>
                <i className='bx bxs-envelope'></i>
                <span>{generalData.email}</span>
            </li>
            <li>
                <i className='bx bxl-linkedin-square'></i>
                <span>{generalData.linkedIn}</span>
            </li>
          </ul>
          </>
        )}
        </header>

        <section id="education">
          <h2>Education</h2>
          <div className="education_container">
            {educationData.filter((education) => education.degree || education.institution 
            || education.graduationDate || education.academicDescription).map((education, index)=>(
            <div key={index*5} className="individual_education_section">
              <h3>{education.degree}</h3>
              <ul className = "education_details">
                <li className="degree_and_graduationDate">
                  <li className = "education_degree">{education.institution}</li>
                  <li className = "education_graduation">{education.graduationDate}</li>
                </li>
                <li className = "bullet_point education_description">{education.academicDescription}</li>
              </ul>
            </div>  
            ))} 
          </div>
        </section>

        <section id="experience">
          <h2>Professional Experience</h2>
          <div className="experience_container">
            {professionalData.filter((professional) => professional.company || professional.positionName 
            || professional.location || professional.startDate || professional.endDate || professional.professionalDescription).map((professional, index)=>(
            <div key={index*5} className="professional_section">
              <h3>{professional.positionName}</h3>
              <ul className="professional_details"> 
                  <li className="company_and_dates">
                    <li className="professional_company">{professional.company}</li>
                    <li className="professional_dates">
                      <div>{professional.startDate}</div> 
                      <div>{professional.endDate}</div>
                    </li>
                  </li>
                  {/*<li className="professional_location">{professional.location}</li>*/}
                  <li className="bullet_point professional_description">{professional.professionalDescription}</li>
              </ul>
            </div>
            ))} 
          </div>
        
        </section>
  
      </div>
    ) 
}