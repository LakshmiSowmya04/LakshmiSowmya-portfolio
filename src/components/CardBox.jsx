import React, { useEffect } from 'react';
import { FaJava, FaPython, FaNodeJs, FaDatabase } from 'react-icons/fa'; // Import icons for Java, Python, Node.js, SQL
import { SiMongodb, SiExpress } from 'react-icons/si'; // Import icons for MongoDB and Express
import './cardboard.css';

const technologies = [
  { name: 'Java', icon: <FaJava size={70} color="orange" />, rating: 5 },
  { name: 'Python', icon: <FaPython size={70} color="blue" />, rating: 4 },
  { name: 'Node.js', icon: <FaNodeJs size={70} color="green" />, rating: 3 },
  { name: 'Express', icon: <SiExpress size={70} color="gray" />, rating: 4 },
  { name: 'MongoDB', icon: <SiMongodb size={70} color="green" />, rating: 5 },
  { name: 'SQL', icon: <FaDatabase size={70} color="teal" />, rating: 4 }
];


const Card = ({ name, icon, rating }) => {
  return (
    <div className='Card'>
      <>{icon}</>
      <h4>{name}</h4>
      <h2 className='stars'>
        {[...Array(5)].map((_, index) => (
          <span key={index} className='starSpan'>{index < rating ? '★' : '☆'} </span>
        ))}
      </h2>
    </div>
  );
};

const CardBox = () => (
  <div className='Cardbox'>
    {technologies.map((tech, index) => (
      <Card key={index} name={tech.name} icon={tech.icon} rating={tech.rating} />
    ))}
  </div>
);

export default CardBox;



{/* <div className="row">
<div className="skill" data-rating="5"><i className="fab fa-python"></i></div>
<div className="skill" data-rating="4"><i className="fab fa-node"></i></div>
<div className="skill" data-rating="3"><i className="fab fa-react"></i></div>
</div>

useEffect(() => {
  document.querySelectorAll('.skill').forEach(skill => {
    const rating = skill.getAttribute('data-rating');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const starsContainer = document.createElement('div');
    starsContainer.classList.add('stars');

    for (let i = 0; i < 5; i++) {
      const star = document.createElement('span');
      star.innerHTML = i < rating ? '★' : '☆';
      starsContainer.appendChild(star);
    }

    overlay.appendChild(starsContainer);
    skill.appendChild(overlay);
  });
}, []);


.skill .stars {
  color: #f39c12;
  font-size: 18px;
}

.skill:hover {
  transform: scale(1.2);
}

.skill:hover i {
  color: #f39c12;
} */}
