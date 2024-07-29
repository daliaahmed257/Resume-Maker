import { useLocation } from "react-router-dom";

const Resume = ({ userDetails, summary, skills, experiences, education, }) => {

    const location = useLocation()

    const formatMonthYear = (dateString) => {
        const [year, month] = dateString.split("-");
        const date = new Date(year, month - 1); // month - 1 because months are zero-indexed
        const formattedMonth = date.toLocaleString('en-US', { month: 'short' });
        return `${formattedMonth} ${year}`;
    };

    return (
        <div className="container resume p-3" style={{maxWidth: `${location.pathname === '/download' ? '800px' : ''}`}}>

            <div className="container">
                    <div className="row">
                    <div className="row align-items-center">
                        <h2 className="col-auto title fw-bold">{userDetails.firstname} {userDetails.lastname}</h2>
                        <div className="col-auto d-flex justify-content-center">
                            <div className="spacer"></div>
                        </div>
                        <h5 className="col-auto jobtitle subtitle fw-bold">{userDetails.title}</h5>
                    </div>

                    <div className="row col-12">
                        <p className="col-auto text">{userDetails.city}, {userDetails.state}</p>
                        <p className="col-auto text">{userDetails.phone}</p>
                        <p className="col-auto text">{userDetails.email}</p>
                        <a className="col-auto text" href={userDetails.link}>{userDetails.linkName}</a>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row align-items-center text-right">
                    <h5 className="col-auto subtitle fw-bold">SUMMARY</h5>
                    <div className="col divider" />
                </div>
                <p className="text">{summary.summary}</p>
            </div>

            <div className="container">
                <div className="row align-items-center text-right">
                    <h5 className="col-auto subtitle fw-bold">SKILLS</h5>
                    <div className="col divider" />
                </div>
                <ul className="row">
                    {skills.map((skill, index) => (
                        <li className="col-auto gx-5 skill-item text" key={index}>{skill}</li>
                    ))}
                </ul>
            </div>

            <div className="container">
                <div className="row align-items-center text-right">
                    <h5 className="col-auto subtitle fw-bold">EXPERIENCE</h5>
                    <div className="col divider" />
                </div>

                {experiences.map((exp, index) => (
                    <div className="row" key={index}>
                        <p className="fw-bold col-12 mb-1 text">{exp.jobtitle}</p>
                        {exp.current == '' ?
                            <p className="col-12 mb-1 fst-italic text">{exp.employer} | {exp.city}, {exp.state} | {formatMonthYear(exp.startDate)} - {formatMonthYear(exp.endDate)}</p>
                            :
                            <p className="col-12 mb-1 fst-italic text">{exp.employer} | {exp.city}, {exp.state} | {formatMonthYear(exp.startDate)} - {exp.current}</p>}
                        <p className="col-12 responsibility text">{exp.responsibilities}</p>
                    </div>
                ))}
            </div>

            <div className="container">
                <div className="row align-items-center text-right">
                    <h5 className="col-auto subtitle fw-bold">EDUCATION</h5>
                    <div className="col divider" />
                </div>

                {education.map((school, index) => (
                    <div key={index}>
                        <p className="mb-1 text fw-bold">{school.degree} in {school.study}</p>
                        <p className="fst-italic text">{school.name} | {school.location}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Resume