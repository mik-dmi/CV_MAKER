


export function CvDisplay({generalData,educationData, professionalData}){

    return(
        <div className='right_side_of_body'>
        <header>
          <h1>{generalData.fullName}</h1>
          <ul>
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
          {educationData.map((education, index)=>(
          <div key={index*5} className="education_section">
            <h3>{education.institution}</h3>
          
            <ul>
                <div className="place_and_date_container"> 
                    <h4>{education.degree}</h4> 
                    <h4>{education.graduationDate}</h4> 
                </div>
                <li>{education.academicDescription}</li>
            </ul>
          </div>
        ))}  
        </section>

        <section id="experience">
          <h2>Professional Experience</h2>
          {professionalData.map((professional, index)=>(
          <div key={index*5} className="professional_section">
            <h3>{professional.positionName}</h3>
          
            <ul>
                <div className="place_and_date_container"> 
                    <h4>{professional.company}</h4> 
                    <h4>{professional.location}</h4> 
                </div>
                <div>
                  <h4>{professional.startDate} - {professional.endDate}</h4>
                
                </div>
                <li>{professional.professionalDescription}</li>
            </ul>
          </div>
        ))}  
        </section>
  
      </div>
    ) 
}