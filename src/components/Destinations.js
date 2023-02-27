import React, { useState, useEffect } from 'react';
import data from './../data.json';
import styles from './Destinations.module.scss';
import { NavLink, useParams, useNavigate } from 'react-router-dom';

// console.log(data.destinations);

export const Destinations = function (props) {
    const des = useParams();
    const navigate = useNavigate();

    const goMoon = () => navigate('/destination/moon');
    const goMars = () => navigate('/destination/mars');
    const goEuropa = () => navigate('/destination/europa');
    const goTitan = () => navigate('/destination/titan');

    return (
        <main className={styles.main}>
            <ul>{'s'}</ul>
        </main>
    );
};
