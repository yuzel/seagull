import React from 'react';
import styles from './index.module.scss';

const banner = require('./images/banner.png');
const pic1 = require('./images/1.png');
const pic2 = require('./images/2.png');
const pic3 = require('./images/3.png');
const pic4 = require('./images/4.png');
const pic5 = require('./images/5.png');
const pic6 = require('./images/6.png');
const pic7 = require('./images/7.png');
const pic8 = require('./images/8.png');

export default function LandingIntroBanner() {
    return (
        <div>
            <div className={styles.show}>
                <img src={banner} style={{ maxWidth: '100%' }} />
                <img src={pic1} className={styles.pic} />
                <img src={pic2} className={styles.pic} />
                <img src={pic3} className={styles.pic} />
                <img src={pic4} className={styles.pic} />
                <img src={pic5} className={styles.pic} />
                <img src={pic6} className={styles.pic} />
                <img src={pic7} className={styles.pic} />
                <img src={pic8} className={styles.pic} style={{marginBottom: 20}}/>
            </div>
        </div >
    );
}
