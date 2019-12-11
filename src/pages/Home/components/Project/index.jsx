import React from 'react';
import styles from './index.module.scss';

const title = require('./images/title.png')

export default function Project() {
    return (
        <div className={styles.wapper}>
            <div className={styles.title}>
                <img src={title} alt="" />
            </div>
        </div>
    );
}
