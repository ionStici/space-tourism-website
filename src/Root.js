import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './components/navBar';

import moonPng from './assets/destination/image-moon.png';
import moonWebp from './assets/destination/image-moon.webp';

import douglasPng from './assets/crew/image-douglas-hurley.png';
import douglasWebp from './assets/crew/image-douglas-hurley.webp';

import launchLandscape from './assets/technology/image-launch-vehicle-landscape.jpg';
import launchPortrait from './assets/technology/image-launch-vehicle-portrait.jpg';

const mainImgsArr = [
    moonPng,
    moonWebp,
    douglasPng,
    douglasWebp,
    launchLandscape,
    launchPortrait,
];

const loadImgs = function () {
    mainImgsArr.forEach(picture => {
        const img = new Image();
        img.src = picture;
    });
};
loadImgs();

export default mainImgsArr;

export const Root = function () {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
};
