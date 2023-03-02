import React, { useState, useEffect, useRef } from 'react';
import styles from './Technology.module.scss';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import fetch from './../data.json';

import launchLandscape from './../assets/technology/image-launch-vehicle-landscape.jpg';
import launchPortrait from './../assets/technology/image-launch-vehicle-portrait.jpg';

import spaceportLandscape from './../assets/technology/image-spaceport-landscape.jpg';
import spaceportPortrait from './../assets/technology/image-spaceport-portrait.jpg';

import spaceLandscape from './../assets/technology/image-space-capsule-landscape.jpg';
import spacePortrait from './../assets/technology/image-space-capsule-portrait.jpg';

// // // // // // // // // //

const Markup = function (props) {
    const imgRef = useRef(null);
    const contentRef = useRef(null);

    return (
        <>
            <p className={styles.title}>
                <span className={styles.titleNum}>03</span>
                <span className={styles.titleText}>Space Launch 101</span>
            </p>

            <div className={styles.imgBox} ref={imgRef}>
                <picture>
                    <source srcSet={props.imgs[0]} media="(max-width: 999px)" />
                    <source
                        srcSet={props.imgs[1]}
                        media="(min-width: 1000px)"
                    />
                    <img
                        className={styles.img}
                        src={props.imgs[1]}
                        alt={props.name}
                    />
                </picture>
            </div>

            <div className={styles.linkBox}>
                {props.names.map((name, i) => (
                    <NavLink
                        className={styles.link}
                        key={name}
                        to={`/technology/${name}`}
                        style={({ isActive }) =>
                            isActive
                                ? {
                                      backgroundColor: 'var(--color-white)',
                                      color: 'var(--color-black)',
                                  }
                                : undefined
                        }
                    >
                        {i + 1}
                    </NavLink>
                ))}
            </div>

            <div className={styles.contentBox} ref={contentRef}>
                <p className={styles.term}>The terminology…</p>
                <h1 className={styles.h1}>{props.name}</h1>
                <p className={styles.p}>{props.description}</p>
            </div>
        </>
    );
};

// // // // // // // // // //

export const LaunchVehicle1 = function (props) {
    const data = useState(fetch.technology[0]);
    const name = useState(data[0].name);
    const description = useState(data[0].description);
    const names = useState(
        fetch.technology.map(item => item.name.split(' ')[0].toLowerCase())
    );

    return (
        <section className={styles.section}>
            <Markup
                name={name[0]}
                description={description[0]}
                imgs={[launchLandscape, launchPortrait]}
                names={names[0]}
            />
        </section>
    );
};

// // // // // // // // // //

export const Spaceport2 = function (props) {
    const data = useState(fetch.technology[1]);
    const name = useState(data[0].name);
    const description = useState(data[0].description);
    const names = useState(
        fetch.technology.map(item => item.name.split(' ')[0].toLowerCase())
    );

    return (
        <section className={styles.section}>
            <Markup
                name={name[0]}
                description={description[0]}
                imgs={[spaceportLandscape, spaceportPortrait]}
                names={names[0]}
            />
        </section>
    );
};

// // // // // // // // // //

export const Space3 = function (props) {
    const data = useState(fetch.technology[2]);
    const name = useState(data[0].name);
    const description = useState(data[0].description);
    const names = useState(
        fetch.technology.map(item => item.name.split(' ')[0].toLowerCase())
    );

    return (
        <section className={styles.section}>
            <Markup
                name={name[0]}
                description={description[0]}
                imgs={[spaceLandscape, spacePortrait]}
                names={names[0]}
            />
        </section>
    );
};

// // // // // // // // // //

export const Technology = function () {
    const navigate = useNavigate();
    useEffect(() => navigate('/technology/launch'), []);

    return (
        <main className={styles.main}>
            <div className={styles.bg}></div>
            <Outlet />
        </main>
    );
};

// // // // // // // // // //
