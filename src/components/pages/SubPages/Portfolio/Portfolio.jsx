import React from 'react';
// import Footer from '../../../Bits/Footer';

// MUI Card styling
import CardTemplate from '../../../bits/CardTemplate';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// card imgs
import CoffeeCard from '../../../imgs/coffee-card.png';
import NotesCard from '../../../imgs/notes-card.png';
import BoredCard from '../../../imgs/bored-card.png';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    boxShadow: '0px 0px 0px',
}));

function PortfolioGrid() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Item>
                            <CardTemplate
                                link='/portfolio/coffee-calculator'
                                // idk why this doesn't work
                                // img={require('../../../imgs/coffee-card.png')}
                                img={CoffeeCard}
                                imgAlt='coffee calculator'
                                title='Coffee Calculator'
                                content='JavaScript, React, MUI, CSS, HTML'
                            />
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Item>
                            <CardTemplate
                                link='/portfolio/notes-app'
                                img={NotesCard}
                                imgAlt='notes app'
                                title='Notes App'
                                content='JavaScript, React, CSS, HTML'
                            />
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Item>
                            <CardTemplate
                                link='/portfolio/bored'
                                img={BoredCard}
                                imgAlt='Bored Api'
                                title="I'm Bored"
                                content='JavaScript, React, MUI, CSS, HTML'
                            />
                        </Item>
                    </Grid>
                    {/* sample cards */}
                    {/* <Grid item xs={12} sm={12} md={6} lg={4} className='grid'>
                        <Item>
                            <CardTemplate
                                link='/portfolio/weather-app'
                                // img={require('../../../imgs/coffee-calc.png')}
                                img={BoredCard}
                                imgAlt='Weather App'
                                title='Weather App'
                                content='JavaScript, React, CSS, HTML'
                            />
                        </Item>
                    </Grid> */}
                    {/* <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Item>
                            <CardTemplate
                                link='/portfolio/notes-app'
                                // img={require('../../../imgs/coffee-calc.png')}
                                img={BoredCard}
                                imgAlt='notes app'
                                title='Notes App'
                                content='JavaScript, React, CSS, HTML'
                            />
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Item>
                            <CardTemplate
                                // img={require('../../../imgs/coffee-calc.png')}
                                img={BoredCard}
                                imgAlt='Branyon Tech'
                                title='Branyon Tech'
                                content='JavaScript, React, CSS, HTML'
                            />
                        </Item>
                    </Grid> */}
                </Grid>
            </Box>
        </>
    );
}

function Portfolio() {
    return (
        <>
            <div className='portfolio-page'>
                <img
                    src={require('../../../imgs/orange-background-img.svg')}
                    className='background-img'
                    alt='background-img'
                />
                <h1>Portfolio</h1>
                <PortfolioGrid />
            </div>
        </>
    );
}

export default Portfolio;
