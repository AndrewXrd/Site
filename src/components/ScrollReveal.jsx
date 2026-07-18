import { useEffect, useRef, useState } from 'react';
import './ScrollReveal.css'; // Let's move CSS out to avoid multiple <style> tags

const ScrollReveal = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Unobserve after revealing to prevent vanishing
                }
            });
        }, { threshold: 0.1 });
        
        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }
        
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div
            ref={domRef}
            className={isVisible ? 'cyberpunk-animate' : 'cyberpunk-hidden'}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
