import {Link} from 'react-router-dom';

export default function Resume(){
    const resumeLink = "https://drive.google.com/file/d/11etMgo7G2u_V3NlHLZXVUQmdbnIh9Isn/view?usp=sharing"; 
    return (
        <button className="resume-btn">
            <Link to={resumeLink}>
                Download Resume
            </Link>
        </button>
    );
}