import React, { useState, useRef, useEffect } from 'react';
import CardTemplate from '../../bits/CardTemplate';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// card imgs
import CoffeeCard from '../../imgs/coffee-card.png';
import NotesCard from '../../imgs/notes-card.png';
import BoredCard from '../../imgs/bored-card.png';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    boxShadow: '0px 0px 0px',
}));

function HPPortfolio() {
    const myRef = useRef();
    const [myElementIsVisible, setMyElementIsVisible] = useState();
    useEffect(() => {
        // console.log('myRef', myRef.current);
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setMyElementIsVisible(entry.isIntersecting);
        });
        observer.observe(myRef.current);
    }, []);

    return (
        <div className='portfolio-section' id='portfolio-section'>
            <h2>Portfolio</h2>
            {/* <img
                    src={require('../../imgs/about-me-header.svg')}
                    alt='test img'
                /> */}
            <div ref={myRef}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1}>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            lg={4}
                            className={
                                myElementIsVisible
                                    ? 'animate-cards'
                                    : 'hide-cards'
                            }
                        >
                            <Item>
                                <CardTemplate
                                    link='/portfolio/coffee-calculator'
                                    // img={require('../../imgs/coffee-card.png')}
                                    img={CoffeeCard}
                                    imgAlt='coffee calculator card'
                                    title='Coffee Calculator'
                                    content='JavaScript, React, MUI, CSS, HTML'
                                />
                            </Item>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            lg={4}
                            className={
                                myElementIsVisible
                                    ? 'animate-cards'
                                    : 'hide-cards'
                            }
                        >
                            <Item>
                                <CardTemplate
                                    link='/portfolio/notes-app'
                                    // img={require('../../imgs/notes-app.png')}
                                    img={NotesCard}

                                    imgAlt='notes app'
                                    title='Notes App'
                                    content='API, JavaScript, React, CSS, HTML'
                                />
                            </Item>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            lg={4}
                            className={
                                myElementIsVisible
                                    ? 'animate-cards'
                                    : 'hide-cards'
                            }
                        >
                            <Item>
                                <CardTemplate
                                    link='/portfolio/bored'
                                    // img={require('../../imgs/bored-api.png')}
                                    img={BoredCard}

                                    imgAlt="I'm Bored"
                                    title="I'm Bored"
                                    content='API, JavaScript, React, CSS, HTML'
                                />
                            </Item>
                        </Grid>
                    </Grid>
                </Box>

                <div>
                    <div className='row'>
                        <Link to='/portfolio'>
                            <button>
                                See More
                                <span>
                                    <ArrowForwardIcon />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HPPortfolio;
