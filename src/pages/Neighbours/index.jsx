import React from 'react';
import styles from './index.module.scss';
import Header from '@/components/Header';

const banner = require('./images/banner.png');
const pic1 = require('./images/1.png');
const pic2 = require('./images/2.png');
const pic3 = require('./images/3.png');
const design_show = require('./images/design_show.png');
const design_method = require('./images/design_method.png');


export default function Neighbours() {
    return (
        <div>
            <Header />
            <div className={styles.show}>
                <img src={banner} style={{ maxWidth: '100%' }} />
                <img src={design_show} className={styles.pic} style={{marginLeft: -210}}/>
                <img src={design_method} className={styles.pic} />
                <img src={pic1} className={styles.pic} />
                <img src={pic2} className={styles.pic} />
                <img src={pic3} className={styles.pic} style={{marginLeft: -221}}/>
            </div>

        </div>
    );
}