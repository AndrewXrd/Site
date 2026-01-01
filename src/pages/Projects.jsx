import '../css/Projects.css'
import ProjectCard from '../components/ProjectCard'
import infiniteMovie from '../assets/infinite-movie.png'
import trvl from '../assets/Trvl.png'
import locallens from '../assets/locallens.png'
import onProcess from '../assets/on-process.png'

function Projects() {

    return (
        <div className='project-container'>
            <p className='title-project'>Projects</p>
            <div className='cards'>
                <ProjectCard
                    src={infiniteMovie}
                    title='Infinity Movies'
                    dec='Clone of Netflix'
                    link='https://infinitemoviesbyxrd.netlify.app/'
                />
                <ProjectCard
                    src={trvl}
                    title='Trvl'
                    dec='An International travel'
                    link='https://trvlbyxrd.netlify.app/'
                />
                <ProjectCard
                    src={locallens}
                    title='Local Lens SL'
                    dec='Fully functional local travel mobile app'
                    link='/locallens'
                />
                <ProjectCard
                    src={onProcess}
                />
            </div>

        </div>
    )

}

export default Projects