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
    return (
        <>
            <div>
                <p>
                    <span>01</span>
                    <span>Pick your destination</span>
                </p>

                <picture>
                    <source srcSet={props.moonWebp} type="image/webp" />
                    <source srcSet={props.moonPng} type="image/png" />
                    <img src={props.moonPng} alt={props.name} />
                </picture>
            </div>

            <div>
                <ul>
                    {props.allPlanets.map(planet => {
                        return (
                            <li key={planet}>
                                <NavLink
                                    to={`/destination/${planet.toLowerCase()}`}
                                >
                                    {planet}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>

                <h2>{props.name.toUpperCase()}</h2>

                <p>{props.description}</p>

                <div>
                    <p>AVG. DISTANCE</p>
                    <p>{props.distance}</p>
                </div>
                <div>
                    <p>Est. travel time</p>
                    <p>{props.travel}</p>
                </div>
            </div>
        </>
    );
};

export const Destinations = function (props) {
    const navigate = useNavigate();
    const goMoon = () => navigate('/destination/moon');
    // const goMars = () => navigate('/destination/mars');
    // const goEuropa = () => navigate('/destination/europa');
    // const goTitan = () => navigate('/destination/titan');

    const [data] = useState(info.destinations);
    const [planets, setPlanets] = useState([]);
    useEffect(() => setPlanets(data.map(planet => planet.name)), []);

    const [moon] = useState(data[0]);
    const [mars] = useState(data[1]);
    const [europa] = useState(data[2]);
    const [titan] = useState(data[3]);
    const destination = useParams();

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
                />
            </main>
        );
    }

    // if (
    //     destination.planet !== 'moon' &&
    //     destination.planet !== 'mars' &&
    //     destination.planet !== 'europa' &&
    //     destination.planet !== 'titan'
    // ) {
    //     goMoon();
    // }

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
            />
        </main>
    );
};
