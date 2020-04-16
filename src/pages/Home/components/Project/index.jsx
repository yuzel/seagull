import React from 'react';
import styles from './index.module.scss';


const title = require('./images/title.png')
const pro1 = require('./images/1.png')

export default function Project() {
    return (
        <div className={styles.wapper}>
            <div className={styles.title}>
                <img src={title} alt="" style={{width: '20%'}} />
            </div>
            <div className={styles.projectShow}>
                <div className={styles.projectPicShow}>
                    <a href="/#/clearLemon">
                        <img src={pro1} alt="" className={styles.projectImg} />
                    </a>
                </div>
                <div className={styles.projectPicShow}>
                    <a href="/#/child">
                        <img src={pro1} alt="" className={styles.projectImg} />
                    </a>
                </div>
                <div className={styles.projectPicShow}>
                    <img src={pro1} alt="" className={styles.projectImg} />
                </div>
            </div>
        </div>
    );
}
