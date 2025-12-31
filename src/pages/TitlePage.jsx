import '../css/TitlePage.css'
import me from '../assets/Me.png'
import bgimg from '../assets/Bg.jpg'
import '@fontsource/chakra-petch';
import { useEffect } from 'react';

function TitlePage() {

    useEffect(() => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const title = document.querySelector(".title");
        const originalText = title.dataset.value;

        let iteration = 0;
        let interval = null;

        const startAnimation = () => {
            iteration = 0;
            title.classList.add("glitch-active");

            interval = setInterval(() => {
                title.innerText = originalText
                    .split("")
                    .map((char, index) => {
                        if (char === " ") return " ";
                        if (index < iteration) return originalText[index];
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("");

                iteration += 0.75; // (smaller = slower)

                if (iteration >= originalText.length) {
                    clearInterval(interval);
                    title.innerText = originalText;
                    title.classList.remove("glitch-active"); // ❌ OFF
                }
            }, 150); // (higher = slower)
        };

        startAnimation();
        const loop = setInterval(startAnimation, 8000);

        return () => {
            clearInterval(interval);
            clearInterval(loop);
        };
    }, []);



    return (
        <div className="main">
            <img src={bgimg} className='backimg' />
            <div className="title glitch-text" data-value="A N D R E W">A N D R E W</div>
            <img src={me} className="me" />
            <div className='roles'>
                <p className='role1'>UI/UX Designer</p>
                <p className='role2'>Front-End Developer</p>
            </div>
        </div>
    )
}

export default TitlePage