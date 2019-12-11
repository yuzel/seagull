import React from 'react';
import styles from './index.module.scss';

const title = require('./images/title.png')
const arrow = require('./images/arrow.png')
const font = require('./images/font.png')
const icon = require('./images/icon.png')
const illustration = require('./images/illustration.png')
const poster = require('./images/poster.png')

export default function Works() {
    return (
        <div>
            <div className={styles.title}>
                <img src={title} alt="" />
            </div>
            <div className={styles.iconArrow}>
                <img src={arrow} alt="" />
            </div>
            <div className={styles.icon}>
                <img src={icon} alt="" />
            </div>
            <div className={styles.iconArrow}>
                <img src={arrow} alt="" />
            </div>
            <div className={styles.icon}>
                <img src={illustration} alt="" />
            </div>
            <div className={styles.iconArrow}>
                <img src={arrow} alt="" />
            </div>
            <div className={styles.icon}>
                <img src={poster} alt="" />
            </div>
            <div className={styles.iconArrow}>
                <img src={arrow} alt="" />
            </div>
            <div className={styles.icon}>
                <img src={font} alt="" />
            </div>
        </div>
    );
}