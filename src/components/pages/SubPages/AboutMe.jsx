import React from 'react';

function AboutMe() {
    return (
        <>
            <div className='about-me-page'>
                <img
                    src={require('../../imgs/about-me-header.svg')}
                    className='img-header'
                    alt='Hi'
                />
                <img
                    src={require('../../imgs/background-img.svg')}
                    className='background-img'
                    alt='background-img'
                />
                <div className='bio'>
                    <p>
                        I'm a frontend developer from California. I've lived in
                        Italy and Portugal as well! I am passionate about
                        design, functionality, and helping small, sustainable
                        businesses build websites they love.
                    </p>
                    <p>
                        I started with a career in education after university
                        and worked as a public school teacher for 3.5 years. I
                        began to teach my students some basic elements of coding
                        through code.org and became very interested in it
                        myself. I taught myself how to code with lots of help
                        from Udemy, Youtube, and coffee!
                    </p>
                    <p>
                        I have experience working in HTML, CSS, Node,
                        Javascript, and React. I'm also proficient at Wordpress
                        and Webflow. Lets chat about any of your website needs!
                    </p>
                </div>
            </div>
        </>
    );
}

export default AboutMe;
