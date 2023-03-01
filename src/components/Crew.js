import React, { useState, useEffect, useRef } from 'react';
import styles from './Crew.module.scss';
import data from './../data.json';
import { NavLink, useParams } from 'react-router-dom';

import douglasPng from './../assets/crew/image-douglas-hurley.png';
import douglasWebp from './../assets/crew/image-douglas-hurley.webp';

import markPng from './../assets/crew/image-mark-shuttleworth.png';
import markWebp from './../assets/crew/image-mark-shuttleworth.webp';

import victorPng from './../assets/crew/image-victor-glover.png';
import victorWebp from './../assets/crew/image-victor-glover.webp';

import anoushehPng from './../assets/crew/image-anousheh-ansari.png';
import anoushehWebp from './../assets/crew/image-anousheh-ansari.webp';

const CrewMember = function (props) {
    const imgRef = useRef(null);
    const h1Ref = useRef(null);
    const nameRef = useRef(null);
    const bioRef = useRef(null);

    const domEls = [imgRef, h1Ref, nameRef, bioRef];

    const hide = function () {
        domEls.forEach(el => {
            el.current.style.transition = '';
            el.current.style.opacity = '0';
        });
    };

    const show = function () {
        setTimeout(() => {
            domEls.forEach(el => {
                el.current.style.transition = 'opacity .4s ease-in';
                el.current.style.opacity = '1';
            });
        }, 75);
    };

    const handleFadeIn = function () {
        hide();
        show();
    };

    return (
        <section className={styles.section}>
            <div className={styles.titleBox}>
                <p className={styles.title}>
                    <span className={styles.titleNum}>02</span>
                    <span className={styles.titleText}>Meet your Crew</span>
                </p>
            </div>

            <div className={styles.imgBox} ref={imgRef}>
                <picture>
                    <source srcSet={props.imgs[0]} type="image/png" />
                    <source srcSet={props.imgs[1]} type="image/webp" />
                    <img
                        className={`${styles.img}`}
                        src={props.imgs[0]}
                        alt="Crew Member"
                        style={
                            props.name.split(' ')[0].toLowerCase() === 'douglas'
                                ? { paddingLeft: '15px' }
                                : undefined
                        }
                    />
                </picture>
            </div>

            <div className={styles.contentBox}>
                <h1 className={styles.role} ref={h1Ref}>
                    {props.role}
                </h1>
                <p className={styles.name} ref={nameRef}>
                    {props.name}
                </p>
                <p className={styles.bio} ref={bioRef}>
                    {props.bio}
                </p>
                <div className={styles.circlesBox}>
                    {props.crewData[0].map(member => {
                        return (
                            <NavLink
                                className={styles.link}
                                key={member.role}
                                style={({ isActive }) => {
                                    if (isActive) return { opacity: '1' };
                                    if (
                                        window.location.pathname === '/crew' &&
                                        member.name
                                            .split(' ')[0]
                                            .toLowerCase() === 'douglas'
                                    )
                                        return { opacity: '1' };
                                }}
                                to={`/crew/${member.name
                                    .split(' ')[0]
                                    .toLowerCase()}`}
                                onClick={handleFadeIn}
                            ></NavLink>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export const Crew = function () {
    const crewData = useState(data.crew);
    const douglas = useState({
        name: crewData[0][0].name,
        role: crewData[0][0].role,
        bio: crewData[0][0].bio,
    });
    const mark = useState({
        name: crewData[0][1].name,
        role: crewData[0][1].role,
        bio: crewData[0][1].bio,
    });
    const victor = useState({
        name: crewData[0][2].name,
        role: crewData[0][2].role,
        bio: crewData[0][2].bio,
    });
    const anousheh = useState({
        name: crewData[0][3].name,
        role: crewData[0][3].role,
        bio: crewData[0][3].bio,
    });

    const urlPar = useParams();
    const member = urlPar.member;

    // const maxSlides = data.crew.length;
    const [current, setCurrent] = useState(1);

    const handleKeyDownEvent = function (event) {
        if (event.key === 'ArrowLeft') {
            // setCurrent(prev => prev - 1);
        }

        if (event.key === 'ArrowRight') {
            // setCurrent(prev => prev + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDownEvent);
        return () => {
            window.removeEventListener('keydown', handleKeyDownEvent);
        };
    }, []);

    if (member === mark[0].name.split(' ')[0].toLowerCase()) {
        return (
            <main className={styles.main}>
                <div className={styles.bg}></div>
                <CrewMember
                    crewData={crewData}
                    name={mark[0].name}
                    role={mark[0].role}
                    bio={mark[0].bio}
                    imgs={[markPng, markWebp]}
                />
            </main>
        );
    }

    if (member === victor[0].name.split(' ')[0].toLowerCase()) {
        return (
            <main className={styles.main}>
                <div className={styles.bg}></div>
                <CrewMember
                    crewData={crewData}
                    name={victor[0].name}
                    role={victor[0].role}
                    bio={victor[0].bio}
                    imgs={[victorPng, victorWebp]}
                />
            </main>
        );
    }

    if (member === anousheh[0].name.split(' ')[0].toLowerCase()) {
        return (
            <main className={styles.main}>
                <div className={styles.bg}></div>
                <CrewMember
                    crewData={crewData}
                    name={anousheh[0].name}
                    role={anousheh[0].role}
                    bio={anousheh[0].bio}
                    imgs={[anoushehPng, anoushehWebp]}
                />
            </main>
        );
    }

    return (
        <main className={styles.main}>
            <div className={styles.bg}></div>
            <CrewMember
                crewData={crewData}
                name={douglas[0].name}
                role={douglas[0].role}
                bio={douglas[0].bio}
                imgs={[douglasPng, douglasWebp]}
            />
        </main>
    );
};
