import React from 'react';
import HPPortfolio from './HPPortfolio';
import HPContact from './HPContact';
import Header from './Header';

function HomePage() {
    return (
        <>
            <div className='home-page'>
                <Header />
                <HPPortfolio />
                <HPContact />
            </div>
        </>
    );
}

export default HomePage;
