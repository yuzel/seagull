import React from 'react';
import styles from './index.module.scss';
import Header from '@/components/Header';

const pic1 = require('./images/1.png');
const pic2 = require('./images/2.png');
const pic3 = require('./images/3.png');



export default function FoodPoster() {
    return (
        <div>
            <Header />
            <div className={styles.show}>
                <img src={pic1} className={styles.pic} />
                <img src={pic2} className={styles.pic} />
                <img src={pic3} className={styles.pic} />
            </div>

        </div>
    );
}