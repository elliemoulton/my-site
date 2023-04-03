import React from 'react';
import { useEffect, useState } from 'react';
import '../../../../styles/CoffeeCalculatorStyles.css';
// import Footer from '../../../Footer';

//styles for grid
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    boxShadow: '0px 0px 0px',
}));

function CoffeeCalculator() {
    const [isCalculated, setIsCalculated] = useState(false);

    const [brewType, setBrewType] = useState('Filter');
    const [cupQuantity, setCupQuantity] = useState(1);

    const [grindType, setGrindType] = useState(null);
    const [gramsOfWater, setGramsOfWater] = useState(null);
    const [gramsOfCoffee, setGramsOfCoffee] = useState(null);
    const [steps, setSteps] = useState([]);

    const handleClick = () => {
        setIsCalculated(!isCalculated);
    };

    useEffect(() => {
        switch (brewType) {
            case 'Filter':
                setGrindType('Medium');
                setGramsOfWater(cupQuantity * 235);
                setGramsOfCoffee(cupQuantity * 14);
                setSteps([
                    'Filter step1- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    'Filter step2- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    'Filter step3- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    'Filter step4- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    'Filter step5- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    'Filter step6- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                ]);
                break;
            case 'French Press':
                setGrindType('Coarse');
                setGramsOfWater(cupQuantity * 350);
                setGramsOfCoffee(cupQuantity * 30);
                setSteps([
                    'French Press step1- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    'French Press step2- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    'French Press step3- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    'French Press step4- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                ]);
                break;
            case 'V60':
                setGrindType('Medium-Coarse');
                setGramsOfWater(cupQuantity * 250);
                setGramsOfCoffee(cupQuantity * 15);
                setSteps([
                    'V60 step1- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    'V60 step2- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    'V60 step3- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    'V60 step4- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    'V60 step5- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                ]);
                break;
            case 'Aeropress':
                setGrindType('Medium-Fine');
                setGramsOfWater(cupQuantity * 90);
                setGramsOfCoffee(cupQuantity * 15);
                setSteps([
                    'Aeropress step1- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    'Aeropress step2- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    'Aeropress step3- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                ]);
                break;
            case 'Cold Brew':
                setGrindType('Extra-Coarse');
                setGramsOfWater(cupQuantity * 212);
                setGramsOfCoffee(cupQuantity * 15);
                setSteps([
                    'Cold Brew step1- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    'Cold Brew step2- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    'Cold Brew step3- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    'Cold Brew step4- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                ]);
                break;
            default:
                setGrindType('error');
        }
    }, [brewType, cupQuantity]);

    function InputCoffeeCalc() {
        return (
            <>
                <div className='right-column'>
                    <div className='box'>
                        <Grid item>
                            <Item>
                                <form
                                    className='input'
                                    action='/'
                                    method='post'
                                >
                                    <div className='top-group'>
                                        <h2 className='input-row'>
                                            Select Your Brew Method
                                        </h2>
                                        <select
                                            className='brew-type-input'
                                            name='brewType'
                                            id='brewType'
                                            value={brewType}
                                            onChange={(event) =>
                                                setBrewType(event.target.value)
                                            }
                                        >
                                            <option>Filter</option>
                                            <option>French Press</option>
                                            <option>V60</option>
                                            <option>Aeropress</option>
                                            <option>Cold Brew</option>
                                        </select>
                                    </div>
                                    <h2 className='input-row'>
                                        How many cups?
                                    </h2>
                                    <input
                                        className='cup-input'
                                        type='number'
                                        id='quantity'
                                        name='cupQuantity'
                                        min='1'
                                        max='10'
                                        value={cupQuantity}
                                        onChange={(event) =>
                                            setCupQuantity(
                                                parseInt(event.target.value)
                                            )
                                        }
                                    />
                                </form>
                            </Item>
                        </Grid>
                        <button type='submit' onClick={handleClick}>
                            Calculate
                        </button>
                    </div>
                </div>
            </>
        );
    }

    function BrewInstructions() {
        return (
            <>
                <div className='instructions'>
                    <details>
                        <summary>
                            <h2>{brewType} Coffee Instructions</h2>
                        </summary>
                        <ol>
                            {steps.map((step) => {
                                return (
                                    <div>
                                        <li>{step}</li>
                                        <br />
                                    </div>
                                );
                            })}
                        </ol>
                    </details>
                </div>
            </>
        );
    }

    function ResultsRow(props) {
        return (
            <>
                <Grid container item spacing={0} className='results-row'>
                    <React.Fragment>
                        <Grid item md={8} sm={8} xs={12}>
                            <Item>
                                <h2 className='title'>{props.data}</h2>
                            </Item>
                        </Grid>
                        <Grid item md={4} sm={4} xs={12}>
                            <Item>
                                <h2 className='results-right'>
                                    {props.results}
                                </h2>
                            </Item>
                        </Grid>
                    </React.Fragment>
                </Grid>
            </>
        );
    }

    function ResultsCoffeeCalc() {
        return (
            <>
                <div className='right-column'>
                    <div className='box results-box'>
                        <Grid
                            item
                            lg={12}
                            container
                            spacing={-20}
                            className='results-data'
                        >
                            <ResultsRow
                                data='Brew Method:'
                                results={brewType}
                            />
                            <ResultsRow
                                data='Cup Quantity:'
                                results={cupQuantity}
                            />
                            <ResultsRow
                                data='Grind Type:'
                                results={grindType}
                            />
                            <ResultsRow
                                data='Grams of Coffee:'
                                results={gramsOfCoffee}
                            />
                            <ResultsRow
                                data='Grams of Water:'
                                results={gramsOfWater}
                            />
                        </Grid>
                        <button type='submit' onClick={handleClick}>
                            Back
                        </button>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }} className='coffee-calculator'>
                <Grid container spacing={-20}>
                    <Grid
                        item
                        lg={4}
                        md={12}
                        sm={12}
                        xs={12}
                        className='left-column'
                    >
                        <Item>
                            <h1 className='coffee-title-blurb'>
                                Coffee Ratio Calculator
                            </h1>
                            <p>
                                The coffee calculator is a useful tool for
                                helping coffee enthusiasts learn the proper
                                ratio of coffee to water for a variety of brew
                                methods. Use this calculator by selecting your
                                preferred brew method and the number of cups of
                                coffee desired.
                            </p>
                            <p>
                                The results will provide the recommended amount
                                of coffee beans and hot water to brew with.
                            </p>
                        </Item>
                    </Grid>
                    {/* returns different results based on calculation input */}
                    <Grid item lg={8} md={12} sm={12} xs={12}>
                        <Item>
                            {isCalculated ? (
                                <ResultsCoffeeCalc />
                            ) : (
                                <InputCoffeeCalc />
                            )}
                        </Item>
                    </Grid>
                    <Item> {isCalculated && <BrewInstructions />}</Item>
                </Grid>
            </Box>
            {/* <Footer /> */}
        </>
    );
}

export default CoffeeCalculator;
