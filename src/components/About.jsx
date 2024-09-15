import './About.css';
import Resume from './Resume';
import {Github , Linkedin} from 'lucide-react';
import { Rocket, Globe } from 'lucide-react';
import {Link} from 'react-router-dom';
import profilePicture from './3.jpeg';
import { Typewriter } from 'react-simple-typewriter';

export default function About(){
    const description = (
        <>
          🚀 I am proficient in developing web and mobile applications. <br />
           🔭 Passionate about exploring the vastness of space and the endless possibilities of web development. <br />
           🌠 I’m currently learning GraphQL and Machine Learning.
        </>
      );
    const typeWritetWords = [' Competitive Programmer',' Android Developer']
    return (
        <div className='about-container'>
            <div className="all">
                <div className='profile-picture'>
                    <img src={profilePicture} className='circular-pic' alt='Profile'></img>
                </div>
                <div className='social-media'>
                    <div>
                    <Link to='https://github.com/LakshmiSowmya04'>
                            <Github className='social-media-btn'></Github>
                    </Link>
                    </div>
                    <div>
                    <Link to='https://linkedin.com/in/iamlakshmisowmya'>
                            <Linkedin className='social-media-btn'></Linkedin>
                    </Link>
                    </div>
            </div>
        </div>
            <div id="home" className='about'>
                <h2>Hello I am </h2>
                <h1>Lakshmi Sowmya</h1>
                <h2>I am a 
                    <span className='cp-text'>
                        <Typewriter
                            words={typeWritetWords}
                            loop={0}
                            cursor
                            cursorStyle={'|'}
                        >
                        </Typewriter>
                    </span>
                </h2>
                <div className='my-description'>
                   {description}
                </div>
                <Resume></Resume>
            </div>
            {/* <div className='social-media'>
                <div>
                    <Link to='https://github.com/bhatganeshdarshan'>
                        <Github className='social-media-btn'></Github>
                    </Link>
                </div>
                <div>
                    <Link to='https://linkedin.com/in/ganeshdarshan'>
                        <Linkedin className='social-media-btn'></Linkedin>
                    </Link>
                </div>
            </div> */}
            
        </div>
    );
}