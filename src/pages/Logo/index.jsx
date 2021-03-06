import React from 'react';
import styles from './index.module.scss';
import Header from '@/components/Header';

const banner = require('./images/banner.png');
const design_method = require('./images/design_method.png');
const pic1 = require('./images/1.png');
const pic2 = require('./images/2.png');
const pic3 = require('./images/3.png');
const pic4 = require('./images/4.png');
const final_effect = require('./images/final_effect.png');
const anther = require('./images/anther.png');


export default function Logo() {
    return (
        <div>
            <Header />
            <div className={styles.show}>
                <img src={banner} style={{ maxWidth: '100%' }} />
                <img src={design_method} className={styles.pic} style={{marginLeft: -13}}/>
                <img src={pic1} className={styles.pic} />
                <img src={pic2} className={styles.pic} />
                <img src={pic3} className={styles.pic} />
                <img src={pic4} className={styles.pic} />
                <img src={final_effect} className={styles.pic} />
                <img src={anther} className={styles.pic} style={{marginLeft: -157}} />
            </div>
        </div>
    );
}