import { useState, useRef, useEffect } from 'react';
const useScrollHandling = () => {
    const [scrollDrection, setScrollDrection] = useState(null);
    const previousScrollPosition = useRef(0);
    const [scrollPosition, setScrollPositon] = useState(0);
    const scrollTracking = () => {
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > previousScrollPosition.current) {
            setScrollDrection('down');
        } else if (currentScrollPosition < previousScrollPosition.current) {
            setScrollDrection('up');
        }
        previousScrollPosition.current =
            currentScrollPosition <= 0 ? 0 : currentScrollPosition;
        setScrollPositon(currentScrollPosition);
    };
    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);
        return () => window.removeEventListener('scroll', scrollTracking);
    }, []);

    return {
        scrollDrection,
        scrollPosition
    };
};

export default useScrollHandling;
