import React, { useState } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';
import { Button } from './Styles';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div className="scroll-btn">
            <Button> 
                <IoIosArrowDropupCircle onClick={scrollToTop}
                    style={{ display: visible ? 'inline' : 'none' }} title="Scroll to the top."/>
            </Button>
        </div>

    );
}

export default ScrollButton;
