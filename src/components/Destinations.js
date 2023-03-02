import React, { useState, useEffect, useRef } from 'react';
import info from './../data.json';
import styles from './Destinations.module.scss';
import { NavLink, useParams, useNavigate } from 'react-router-dom';

// import moonPng from './../assets/destination/image-moon.png';
// import moonWebp from './../assets/destination/image-moon.webp';

import mainImgsArr from '../Root';

import marsPng from './../assets/destination/image-mars.png';
import marsWebp from './../assets/destination/image-mars.webp';

import europaPng from './../assets/destination/image-europa.png';
import europaWebp from './../assets/destination/image-europa.webp';

import titanPng from './../assets/destination/image-titan.png';
import titanWebp from './../assets/destination/image-titan.webp';

const moonPng = mainImgsArr[0];
const moonWebp = mainImgsArr[1];

const imgsArr = [
    moonPng,
    moonWebp,
    marsPng,
    marsWebp,
    europaPng,
    europaWebp,
    titanPng,
    titanWebp,
];

// // // // // // // // // //

const Component = function (props) {
    const imgRef = useRef(null);
    const nameRef = useRef(null);
    const textRef = useRef(null);
    const statsRef = useRef(null);

    const hidePlanet = () => {
        imgRef.current.style.transition = '';
        imgRef.current.style.opacity = '0';
        imgRef.current.style.transform = 'rotate(10deg) scale(0.9)';
    };

    const animatePlanet = () => {
        setTimeout(() => {
            imgRef.current.style.transition =
                'opacity .25s ease-in-out, transform .5s ease-in-out';
            imgRef.current.style.opacity = '1';
            imgRef.current.style.transform = 'rotate(0) scale(1)';
        }, 75);
    };

    const hideContent = () => {
        nameRef.current.style.transition = '';
        textRef.current.style.transition = '';
        statsRef.current.style.transition = '';
        nameRef.current.style.opacity = '0';
        textRef.current.style.opacity = '0';
        statsRef.current.style.opacity = '0';
    };

    const animateContent = () => {
        setTimeout(() => {
            nameRef.current.style.transition = 'opacity .4s ease-in';
            textRef.current.style.transition = 'opacity .4s ease-in';
            statsRef.current.style.transition = 'opacity .4s ease-in';
            nameRef.current.style.opacity = '1';
            textRef.current.style.opacity = '1';
            statsRef.current.style.opacity = '1';
        }, 75);
    };

    const handleFadeIn = function () {
        hidePlanet();
        animatePlanet();
        hideContent();
        animateContent();
    };

    return (
        <section className={styles.section}>
            <div className={styles.bg}></div>
            <div className={styles.planetWrapper}>
                <p className={styles.title}>
                    <span className={styles.titleNum}>01</span>
                    <span className={styles.titleText}>
                        Pick your destination
                    </span>
                </p>

                <div className={styles.imgWrapper}>
                    <picture>
                        <source srcSet={props.moonWebp} type="image/webp" />
                        <source srcSet={props.moonPng} type="image/png" />
                        <img
                            className={`${styles.img}`}
                            src={props.moonPng}
                            alt={props.name}
                            ref={imgRef}
                        />
                    </picture>
                </div>
            </div>

            <div className={styles.contentWrapper}>
                <ul className={styles.ul}>
                    {props.allPlanets.map(planet => {
                        return (
                            <li className={styles.li} key={planet}>
                                <NavLink
                                    className={`${styles.link}`}
                                    to={{
                                        pathname: `/destination/${planet.toLowerCase()}`,
                                    }}
                                    style={({ isActive }) => {
                                        if (isActive) {
                                            return props.activeLinkStyles;
                                        } else if (
                                            window.location.pathname ===
                                                '/destination' &&
                                            planet === 'Moon'
                                        ) {
                                            return props.activeLinkStyles;
                                        }
                                    }}
                                    onClick={handleFadeIn}
                                >
                                    {planet}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>

                <h2 className={styles.h2} ref={nameRef}>
                    {props.name.toUpperCase()}
                </h2>

                <p className={styles.p} ref={textRef}>
                    {props.description}
                </p>

                <div className={styles.statsWrapper} ref={statsRef}>
                    <div className={styles.distanceWrapper}>
                        <p className={styles.heading}>AVG. DISTANCE</p>
                        <p className={styles.res}>{props.distance}</p>
                    </div>
                    <div className={styles.travelWrapper}>
                        <p className={styles.heading}>Est. travel time</p>
                        <p className={styles.res}>{props.travel}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// // // // // // // // // //

export const Destinations = function (props) {
    useEffect(() => {
        imgsArr.forEach(picture => {
            const img = new Image();
            img.src = picture;
        });
    }, []);

    const navigate = useNavigate();
    const goDestinationPage = () => navigate('/destination');

    const destination = useParams();
    const [data] = useState(info.destinations);
    const [moon] = useState(data[0]);
    const [mars] = useState(data[1]);
    const [europa] = useState(data[2]);
    const [titan] = useState(data[3]);
    const [planets, setPlanets] = useState([]);
    useEffect(() => setPlanets(data.map(planet => planet.name)), []);

    const preventInexistentURL = function () {
        if (
            destination.planet !== 'moon' &&
            destination.planet !== 'mars' &&
            destination.planet !== 'europa' &&
            destination.planet !== 'titan'
        )
            goDestinationPage();
    };

    useEffect(() => preventInexistentURL(), []);

    const activeLinkStyles = {
        color: 'var(--color-white)',
        borderBottom: '3px solid var(--color-white)',
    };

    // if (destination.planet === 'moon') {
    //     return (
    //         <main className={styles.main}>
    //             <Component
    //                 name={moon.name}
    //                 allPlanets={planets}
    //                 moonPng={moonPng}
    //                 moonWebp={moonWebp}
    //                 description={moon.description}
    //                 distance={moon.distance}
    //                 travel={moon.travel}
    //             />
    //         </main>
    //     );
    // }

    if (destination.planet === 'mars') {
        return (
            <main className={styles.main}>
                <Component
                    name={mars.name}
                    allPlanets={planets}
                    moonPng={marsPng}
                    moonWebp={marsWebp}
                    description={mars.description}
                    distance={mars.distance}
                    travel={mars.travel}
                    activeLinkStyles={activeLinkStyles}
                />
            </main>
        );
    }

    if (destination.planet === 'europa') {
        return (
            <main className={styles.main}>
                <Component
                    name={europa.name}
                    allPlanets={planets}
                    moonPng={europaPng}
                    moonWebp={europaWebp}
                    description={europa.description}
                    distance={europa.distance}
                    travel={europa.travel}
                    activeLinkStyles={activeLinkStyles}
                />
            </main>
        );
    }

    if (destination.planet === 'titan') {
        return (
            <main className={styles.main}>
                <Component
                    name={titan.name}
                    allPlanets={planets}
                    moonPng={titanPng}
                    moonWebp={titanWebp}
                    description={titan.description}
                    distance={titan.distance}
                    travel={titan.travel}
                    activeLinkStyles={activeLinkStyles}
                />
            </main>
        );
    }

    return (
        <main className={styles.main}>
            <Component
                name={moon.name}
                allPlanets={planets}
                moonPng={moonPng}
                moonWebp={moonWebp}
                description={moon.description}
                distance={moon.distance}
                travel={moon.travel}
                activeLinkStyles={activeLinkStyles}
            />
        </main>
    );
};
