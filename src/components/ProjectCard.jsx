import '../css/ProjectCard.css'
// import "@fontsource/chakra-petch/400.css";
// import "@fontsource/chakra-petch/600.css";

function ProjectCard(props) {

    return (
        <div className='card-container'>
            <a href={props.link} target="_blank" className='img-container'>
                <img src={props.src} className='img' />
            </a>
            <div className='txt'>
                <p className='project-title'>{props.title}</p>
                <p className='project-des'>{props.dec}</p>
            </div>
        </div>
    )
}

export default ProjectCard