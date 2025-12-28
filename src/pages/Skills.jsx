import '../css/Skills.css'
import java from '../assets/java.png'
import figma from '../assets/figma.png'
import html from '../assets/html.png'
import css from '../assets/CSS.png'
import js from '../assets/JavaScript.png'
import react from '../assets/react.png'

const skillsData = [
    { src: java, className: 'img-java', alt: 'Java' },
    { src: figma, className: 'img-figma', alt: 'Figma' },
    { src: html, className: 'img-html', alt: 'HTML' },
    { src: css, className: 'img-css', alt: 'CSS' },
    { src: js, className: 'img-js', alt: 'JavaScript' },
    { src: react, className: 'img-react', alt: 'React' },
];

function Skills() {
    return (
        <div className='skills-container'>
            <p className='title-skills'>Skills</p>
            <div className='skills-slider'>
                <div className='skill-img-container'>
                    {/* First set of images */}
                    {skillsData.map((skill, index) => (
                        <img key={`skill-1-${index}`} src={skill.src} className={skill.className} alt={skill.alt} />
                    ))}
                    {/* Second set of images for seamless loop */}
                    {skillsData.map((skill, index) => (
                        <img key={`skill-2-${index}`} src={skill.src} className={`${skill.className} secondary`} alt={skill.alt} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills