import React, { useEffect, useState } from 'react';
import profileImg1 from '../../imgs/home-img-1.svg';
import profileImg2 from '../../imgs/home-img-2.svg';
import profileImg3 from '../../imgs/home-img-3.svg';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Header() {
    // loops through images to create gif like icon
    const profileImgsArray = [profileImg1, profileImg2, profileImg3];
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            currentIndex === profileImgsArray.length - 1
                ? setCurrentIndex(0)
                : setCurrentIndex(currentIndex + 1);
        }, 800);
        return () => clearInterval(intervalId);
    });

    return (
        <div className='head-section'>
            <header>
                <h1>Ellie Moulton</h1>
                <h2>Frontend Developer</h2>
                <p>
                    I'm passionate about creating custom websites and web apps
                    to give you the website of your dreams!
                </p>
                <button>
                    <a href='#portfolio-section'>
                        Let's Begin
                        <span>
                            <ArrowDownwardIcon />
                        </span>
                    </a>
                </button>
                <img
                    src={profileImgsArray[currentIndex]}
                    className='profile-img'
                    alt='profile img'
                />
            </header>
            <div class='custom-shape-divider-bottom-1674668410'>
                <svg
                    data-name='Layer 1'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 1200 120'
                    preserveAspectRatio='none'
                >
                    <path
                        d='M1200 120L0 16.48 0 0 1200 0 1200 120z'
                        class='shape-fill'
                    ></path>
                </svg>
            </div>
        </div>
    );
}

export default Header;
