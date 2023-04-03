import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function HPContact() {
    return (
        <div className='contact-section'>
            <div class='custom-shape-divider-top-1674671710'>
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
            <h2 className='title'>Contact Me</h2>
            <p className='email'>ellie@frontendellie.com</p>
            <a href='https://github.com/elysemoulton'>
                <GitHubIcon fontSize='large' className='icon' />
            </a>
            <a href='https://www.linkedin.com/in/elliemoulton/'>
                <LinkedInIcon fontSize='large' className='icon' />
            </a>
        </div>
    );
}

export default HPContact;
