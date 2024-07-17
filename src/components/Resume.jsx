
const Resume = ({ userDetails, summary, skills, experience }) => {

    const formatMonthYear = (dateString) => {
        const date = new Date(dateString);
        const month = date.toLocaleString('en-US', { month: 'short' });
        const year = date.getFullYear();
        return `${month} ${year}`;
    };

    return (
        <div className="container resume p-3">
            <h1 className="text-center">{userDetails.firstname} {userDetails.lastname}</h1>
            <div className="row justify-content-center">
                <p className="col-auto">{userDetails.city}, {userDetails.state}</p>
                <p className="col-auto">{userDetails.phone}</p>
                <p className="col-auto">{userDetails.email}</p>
            </div>
            <div className="container">
                <div className="row align-items-center text-right">
                    <h4 className="col-auto">{summary.personalTitle}</h4>
                    <div className="col divider" />
                </div>
                <p>{summary.summary}</p>
            </div>
            <div className="container">
                <div className="row align-items-center text-right">
                    <h4 className="col-auto">Skills</h4>
                    <div className="col divider" />
                </div>
                <ul className="row">
                    {skills.map((skill, index) => (
                        <li className="col-auto gx-5 skill-item" key={index}>{skill}</li>
                    ))}
                </ul>
            </div>

            <div className="container">
                <div className="row align-items-center text-right">
                    <h4 className="col-auto">Experience</h4>
                    <div className="col divider" />
                </div>

                {experience.map((exp, index) => (
                    <div className="row" key={index}>
                        <p>{exp.jobtitle}</p>
                        <p>{exp.employer} | {exp.city}, {exp.state} | {formatMonthYear(exp.startDate)} - {formatMonthYear(exp.endDate)}</p>
                        <p>{exp.responsibilities}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Resume