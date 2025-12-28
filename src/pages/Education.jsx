import '../css/Education.css'
import edu from '../assets/Edu.png'
import '@fontsource/chakra-petch';

function Education() {

    return (
        <div className='edu-container'>
            <div className='title-img'>
                <p className='title-edu'>Education</p>
                <img src={edu} className='edu-img' />
            </div>
            <div className='education-list'>
                <div className='edu-item-ol'>
                    <p className='edu-title'>G.C.E O/L</p>
                    <p className='edu-year'>2018</p>
                    <p className='edu-desc'>6A 3B</p>
                </div>
                <div className='edu-item-al'>
                    <p className='edu-title'>G.C.E A/L</p>
                    <p className='edu-year'>2021</p>
                    <p className='edu-desc'>Physical Science<br />C 2S</p>
                </div>
                <div className='edu-item-it'>
                    <p className='edu-title'>BSc in IT</p>
                    <p className='edu-year'>2023 - Current</p>
                    <p className='edu-desc'>Current GPA - 3.84/4.00</p>
                </div>
            </div>
        </div>
    )

}

export default Education