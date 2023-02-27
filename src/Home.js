import React from 'react';

import bgMobile from './assets/home/background-home-mobile.jpg';
import bgTablet from './assets/home/background-home-tablet.jpg';
import bgDesktop from './assets/home/background-home-desktop.jpg';

const styles = {
    backgroundImage: `url(${bgMobile})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'fixed',
    zIndex: '-2',
    left: '0',
    top: '0',
    width: '100vw',
    height: '100vh',
};

const test = {
    fontFamily: 'Bellefair',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '150px',
    lineHeight: '150px',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    display: 'inline',
};

export const Home = function () {
    return (
        <section style={styles}>{/* <h1 style={test}>Space</h1> */}</section>
    );
};

// So, you want to travel to

// Let’s face it; if you want to go to space, you might as well genuinely go to
// outer space and not hover kind of on the edge of it. Well sit back, and relax
// because we’ll give you a truly out of this world experience!

// Explore
