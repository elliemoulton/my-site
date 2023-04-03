import React, { useState } from 'react';
import '../../../../styles/BoredStyles.css';
import RefreshIcon from '@mui/icons-material/Refresh';

function Bored() {
    const boredApi = 'http://www.boredapi.com/api/activity/';
    const [boredApiData, setBoredApiData] = useState({});
    const [randomNum, setRandomNum] = useState(0);
    const [dataFetched, setDataFetched] = useState(false);
    const [colors, setColors] = useState('');
    const feasibilityPercent = 100 - boredApiData.accessibility * 100;
    const pricePercent = boredApiData.price * 100;
    const participantsPercent = boredApiData.participants * 11;

    function HandleClick() {
        fetch(boredApi)
            .then((res) => res.json())
            .then((data) => setBoredApiData(data))
            .catch((error) => {
                console.error('Error:', error);
            });

        setRandomNum(Math.floor(Math.random() * 5));
        setDataFetched(true);

        switch (randomNum) {
            case 0:
                setColors('blue');
                console.log(colors);
                break;
            case 1:
                setColors('pink');
                console.log(colors);
                break;
            case 2:
                setColors('orange');
                console.log(colors);
                break;
            case 3:
                setColors('green');
                console.log(colors);
                break;
            case 4:
                setColors('purple');
                console.log(colors);
                break;
            default:
                setColors('');
        }
    }

    function Data() {
        return (
            <>
                <div className='activity-section'>
                    <h2>{boredApiData.activity}</h2>
                </div>
                <table>
                    <tr>
                        <td>
                            <p>Feasibility</p>
                        </td>
                        <td>
                            <div className='container'>
                                <div
                                    className='scale feasibility'
                                    style={{
                                        width: feasibilityPercent + '%',
                                        transition: 'ease 500ms',
                                    }}
                                ></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Cost</p>
                        </td>
                        <td>
                            <div className='container'>
                                <div
                                    className='scale cost'
                                    style={{ width: pricePercent + '%' }}
                                ></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Participants</p>
                        </td>
                        <td>
                            <div className='container'>
                                <div
                                    className='scale participants'
                                    style={{ width: participantsPercent + '%' }}
                                ></div>
                            </div>
                        </td>
                    </tr>
                </table>
            </>
        );
    }

    return (
        <>
            <div className='bored-page'>
                <div className={colors}>
                    <div
                        className={`bored-box ${dataFetched ? ' showBox' : ''}`}
                    >
                        <h1>help, i'm bored</h1>
                        <button onClick={HandleClick}>
                            <RefreshIcon
                                sx={{ fontSize: '35px', fontWeight: 'bold' }}
                            />
                        </button>
                        {dataFetched && <Data />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Bored;
