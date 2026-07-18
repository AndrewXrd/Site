import '../css/Skills.css'
import java from '../assets/java.png'
import figma from '../assets/figma.png'
import html from '../assets/html.png'
import css from '../assets/CSS.png'
import js from '../assets/JavaScript.png'
import react from '../assets/React.png'
import gemini from '../assets/gemini.svg'
import claude from '../assets/claude.svg'
import huggingface from '../assets/huggingface.svg'

const skillsData = [
    { src: java, className: 'img-java', alt: 'Java' },
    { src: figma, className: 'img-figma', alt: 'Figma' },
    { src: html, className: 'img-html', alt: 'HTML' },
    { src: css, className: 'img-css', alt: 'CSS' },
    { src: js, className: 'img-js', alt: 'JavaScript' },
    { src: react, className: 'img-react', alt: 'React' },
    { src: gemini, className: 'img-gemini ai-icon-bg', alt: 'Gemini' },
    { src: claude, className: 'img-claude ai-icon-bg', alt: 'Claude AI' },
    { src: huggingface, className: 'img-huggingface ai-icon-bg', alt: 'Hugging Face' },
];

function Skills() {
    return (
        <div className='skills-container'>
            <p className='title-skills'>Skills & AI Tools</p>
            <div className='skills-grid'>
                {skillsData.map((skill, index) => (
                    <div key={`skill-${index}`} className={`skill-icon-wrapper float-anim-${(index % 3) + 1}`}>
                        <img src={skill.src} className={skill.className} alt={skill.alt} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills