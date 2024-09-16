import React, { useState, useEffect } from 'react';
import './skills.css'
import CardBox from './CardBox';
const Skills = () => {
    const cards=[{name:'Java',image:''},
                {name:'Java',image:''}, 
                {name:'Java',image:''},
                {name:'Java',image:''},
                {name:'Java',image:''},
                {name:'Java',image:''},
                {name:'Java',image:''},
                {name:'Java',image:''},
                {name:'Java',image:''},
                {name:'Java',image:''},
                {name:'Java',image:''},
                {name:'Java',image:''},
                ];
    return(
        <div className="SkillSec">
            <CardBox cards={cards}/>
        </div>
    );
};



export default Skills;