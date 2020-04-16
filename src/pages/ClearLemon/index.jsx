import React from 'react';
import styles from './index.module.scss';
import Header from '@/components/Header';

const pic1 = require('./images/1.png');
const pic2 = require('./images/2.png');
const pic3 = require('./images/3.png');
const pic4 = require('./images/4.png');
const pic5 = require('./images/5.png');
const pic6 = require('./images/6.png');
const pic7 = require('./images/7.png');
const pic8 = require('./images/8.png');
const pic9 = require('./images/9.png');
const pic10 = require('./images/10.png');
const pic11 = require('./images/11.png');
const pic12 = require('./images/12.png');
const pic13 = require('./images/13.png');
const pic14 = require('./images/14.png');
const pic15 = require('./images/15.png');
const pic16 = require('./images/16.png');



export default function ClearLemon() {
    return (
        <div>
            <Header />
            <div className={styles.wapper}>
                <div className={styles.centerShow}>
                    <div className={styles.show}>
                        <img src={pic1} style={{maxWidth: '100%'}} />
                        <img src={pic2} className={styles.pic} style={{marginTop: 30}}/>
                        <img src={pic3} className={styles.pic} />
                        <img src={pic4} className={styles.pic} />
                        <img src={pic5} className={styles.pic} style={{marginTop: 80}}/>
                        <img src={pic6} className={styles.pic} />
                        <img src={pic7} className={styles.pic} />
                        <img src={pic8} className={styles.pic} style={{marginTop: 30}}/>
                        <img src={pic9} className={styles.pic} />
                        <img src={pic10} className={styles.pic} />
                        <img src={pic11} className={styles.pic} />
                        <img src={pic12} className={styles.pic} />
                        <img src={pic13} className={styles.pic} style={{marginTop: 80}}/>
                        <img src={pic14} className={styles.pic} style={{marginTop: 80}}/>
                        <img src={pic15} className={styles.pic} style={{marginTop: 80}}/>
                        <img src={pic16} className={styles.pic} />
                    </div>
                </div>
            </div>
        </div>
    );
}