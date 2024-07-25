
const Resume = ({ userDetails, summary, skills, experiences, education, }) => {

    const formatMonthYear = (dateString) => {
        const date = new Date(dateString);
        const month = date.toLocaleString('en-US', { month: 'short' });
        const year = date.getFullYear();
        return `${month} ${year}`;
    };

    return (
        <div className="container resume p-3">

            <div className="container">
                    <div className="row">
                    <div className="row align-items-center">
                        <h2 className="col-auto">{userDetails.firstname} {userDetails.lastname}</h2>
                        <div className="col-auto d-flex justify-content-center">
                            <div className="spacer"></div>
                        </div>
                        <h5 className="col-auto title">{userDetails.title}</h5>
                    </div>

                    <div className="row col-12">
                        <p className="col-auto">{userDetails.city}, {userDetails.state}</p>
                        <p className="col-auto">{userDetails.phone}</p>
                        <p className="col-auto">{userDetails.email}</p>
                        <a className="col-auto" href={userDetails.link}>{userDetails.linkName}</a>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row align-items-center text-right">
                    <h5 className="col-auto">Summary</h5>
                    <div className="col divider" />
                </div>
                <p>{summary.summary}</p>
            </div>

            <div className="container">
                <div className="row align-items-center text-right">
                    <h5 className="col-auto">Skills</h5>
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
                    <h5 className="col-auto">Experience</h5>
                    <div className="col divider" />
                </div>

                {experiences.map((exp, index) => (
                    <div className="row" key={index}>
                        <p className="fw-bold col-12 mb-1">{exp.jobtitle}</p>
                        {exp.current == '' ?
                            <p className="col-12 mb-1 fst-italic">{exp.employer} | {exp.city}, {exp.state} | {formatMonthYear(exp.startDate)} - {formatMonthYear(exp.endDate)}</p>
                            :
                            <p className="col-12">{exp.employer} | {exp.city}, {exp.state} | {formatMonthYear(exp.startDate)} - {exp.current}</p>}
                        <p className="col-12">{exp.responsibilities}</p>
                    </div>
                ))}
            </div>

            <div className="container">
                <div className="row align-items-center text-right">
                    <h5 className="col-auto">Education</h5>
                    <div className="col divider" />
                </div>

                {education.map((school, index) => (
                    <div key={index}>
                        <p className="fw-bold mb-1">{school.degree} in {school.study}</p>
                        <p className="fst-italic">{school.name} | {school.location}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Resume