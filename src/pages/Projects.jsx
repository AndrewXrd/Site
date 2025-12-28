import '../css/Projects.css'
import ProjectCard from '../components/ProjectCard'

function Projects() {

    return (
        <div className='project-container'>
            <p className='title-project'>Projects</p>
            <div className='cards'>
                <ProjectCard
                    src='src\assets\infinite-movie.png'
                    title='Infinity Movies'
                    dec='Clone of Netflix'
                />
                <ProjectCard
                    src='src\assets\Trvl.png'
                    title='Trvl'
                    dec='An International travel'
                />
                <ProjectCard
                    src='src\assets\locallens.png'
                    title='Local Lens SL'
                    dec='Fully functional local travel mobile app'
                />
                <ProjectCard
                    src='src\assets\on-process.png'
                />
            </div>

        </div>
    )

}

export default Projects