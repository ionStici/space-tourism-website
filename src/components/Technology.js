import React, { useState, useEffect } from 'react';
import styles from './Technology.module.scss';
import { NavLink, Outlet } from 'react-router-dom';

export const Technology = function () {
    return (
        <main className={styles.main}>
            <div className={styles.bg}></div>
            <Outlet />
        </main>
    );
};
