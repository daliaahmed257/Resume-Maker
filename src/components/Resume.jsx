
const Resume = ({ userDetails }) => {
    return (
        <div>
        <h2>Resume</h2>
        <p><strong>First Name:</strong> {userDetails.firstname}</p>
        <p><strong>Last Name:</strong> {userDetails.lastname}</p>
        <p><strong>Job Title:</strong> {userDetails.jobtitle}</p>
        <p><strong>Address 1:</strong> {userDetails.address1}</p>
        <p><strong>Address 2:</strong> {userDetails.address2}</p>
        <p><strong>Phone:</strong> {userDetails.phone}</p>
        <p><strong>Email:</strong> {userDetails.email}</p>
      </div>
    )
}

export default Resume