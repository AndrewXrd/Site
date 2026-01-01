import '../css/ProjectCard.css'
import { Link } from 'react-router-dom'
// import "@fontsource/chakra-petch/400.css";
// import "@fontsource/chakra-petch/600.css";

function ProjectCard(props) {
    const isExternal = props.link && (props.link.startsWith('http') || props.link.startsWith('https'));

    return (
        <div className='card-container'>
            {props.link ? (
                isExternal ? (
                    <a href={props.link} target="_blank" className='img-container'>
                        <img src={props.src} className='img' />
                    </a>
                ) : (
                    <Link to={props.link} className='img-container'>
                        <img src={props.src} className='img' />
                    </Link>
                )
            ) : (
                <div className='img-container'>
                    <img src={props.src} className='img' />
                </div>
            )}
            <div className='txt'>
                <p className='project-title'>{props.title}</p>
                <p className='project-des'>{props.dec}</p>
            </div>
        </div>
    )
}

export default ProjectCard