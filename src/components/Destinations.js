import React, { useState, useEffect } from 'react';
import info from './../data.json';
import styles from './Destinations.module.scss';
import { NavLink, useParams, useNavigate } from 'react-router-dom';

import moonPng from './../assets/destination/image-moon.png';
import moonWebp from './../assets/destination/image-moon.webp';

import marsPng from './../assets/destination/image-mars.png';
import marsWebp from './../assets/destination/image-mars.webp';

import europaPng from './../assets/destination/image-europa.png';
import europaWebp from './../assets/destination/image-europa.webp';

import titanPng from './../assets/destination/image-titan.png';
import titanWebp from './../assets/destination/image-titan.webp';

const Component = function (props) {
    const setActiveLink = function ({ isActive }) {
        const style = {
            color: 'var(--color-white)',
            borderBottom: '3px solid var(--color-white)',
        };

        if (isActive) return style;
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
                            className={styles.img}
                            src={props.moonPng}
                            alt={props.name}
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
                                    to={`/destination/${planet.toLowerCase()}`}
                                    style={props.moonTest}
                                >
                                    {planet}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>

                <h2 className={styles.h2}>{props.name.toUpperCase()}</h2>

                <p className={styles.p}>{props.description}</p>

                <div className={styles.distanceWrapper}>
                    <p className={styles.heading}>AVG. DISTANCE</p>
                    <p className={styles.res}>{props.distance}</p>
                </div>
                <div className={styles.travelWrapper}>
                    <p className={styles.heading}>Est. travel time</p>
                    <p className={styles.res}>{props.travel}</p>
                </div>
            </div>
        </section>
    );
};

export const Destinations = function (props) {
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

    console.log(window.location.pathname === '/destination');

    const moonTest = function ({ isActive }) {
        if (window.location.pathname === '/destination') {
            return {
                color: 'var(--color-white)',
                borderBottom: '3px solid var(--color-white)',
            };
        } else if (isActive) {
            return {
                color: 'var(--color-white)',
                borderBottom: '3px solid var(--color-white)',
            };
        }
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
                    moonTest={moonTest}
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
                    moonTest={moonTest}
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
                    moonTest={moonTest}
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
                moonTest={moonTest}
            />
        </main>
    );
};
