import React from 'react';
import styles from './index.module.scss';
import Header from '@/components/Header';

const banner = require('./images/banner.png');
const pic1 = require('./images/1.png');
const pic4 = require('./images/4.png');
const design_show = require('./images/design_show.png');
const design_method = require('./images/design_method.png');


export default function CouldCourt() {
    return (
        <div>
            <Header />
            <div className={styles.show}>
                <img src={banner} style={{ maxWidth: '100%' }} />
                <img src={design_show} className={styles.pic} />
                <img src={design_method} className={styles.pic} style={{marginLeft: -29}}/>
                <img src={pic1} className={styles.pic} />
                <img src={pic4} className={styles.pic} style={{marginLeft: 30}}/>
            </div>
            <div style={{marginBottom: 10}}></div>
        </div>
    );
}