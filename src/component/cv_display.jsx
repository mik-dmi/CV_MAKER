export function CvDisplay({generalData, educationData}){
    console.log("aquie")
    console.log(educationData)
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
            <h3>{educationData.degree}</h3>
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
          <div className="experience-entry">
            <h3>Position Title</h3>
            <p>Company: Company Name</p>
            <p>Location: Location of the Company</p>
            <p>Start Date: Start Date</p>
            <p>End Date: End Date</p>
            <p>Description: Description of your responsibilities and achievements</p>
          </div>
          {/* Add more experience entries as needed */}
        </section>
      </div>
    ) 
}