import '../css/TitlePage.css'
import me from '../assets/Me.png'
import bgimg from '../assets/Bg.jpg'
import '@fontsource/chakra-petch';

function TitlePage() {

    return (
        <div className="main">
            <img src={bgimg} className='backimg' />
            <div className="title">A N D R E W</div>
                <img src={me} className="me" />
            <div className='roles'>
                <p className='role1'>UI/UX Designer</p>
                <p className='role2'>Front-End Developer</p>
            </div>
        </div>
    )
}

export default TitlePage