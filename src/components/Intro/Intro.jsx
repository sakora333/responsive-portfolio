import React from 'react';
import './Intro.css';
import linkedin from '../../img/linkedin.png';
import github from '../../img/github.png';
import instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';

const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span> Hey, I Am </span>
                    <span>Andrew Rhomas</span>
                    <span>Frontend Development with height Experience
                        in web Design and development, producting the quality work
                    </span>
                </div>
                <button className="button i-button"> Hire Me</button>
                <div className="i-icons">
                    <img src={linkedin} alt="linkedin" />
                    <img src={github} alt="github" />
                    <img src={instagram} alt="instagram" />
                </div>
            </div>

            <div className="i-right">
                <img src={Vector1} alt='vector' />
                <img src={Vector2} alt='vector' />
                <img src={boy} alt='boy' />
                 
            </div>
        </div>
    )
}
export default Intro;