import React from 'react';
import styles from './index.module.scss';
import Header from '@/components/Header';
import { Button } from '@alifd/next';

const top = require('./images/top.png');
const pic1 = require('./images/1.png');
const pic2 = require('./images/2.png');
const pic3 = require('./images/3.png');
const pic4 = require('./images/4.png');
const pic5 = require('./images/5.png');
const pic6 = require('./images/6.png');
const phone1 = require('./images/phone1.png');
const phone2 = require('./images/phone2.png');
const phone3 = require('./images/phone3.png');
const phone4 = require('./images/phone4.png');
const banner0 = require('./images/banner0.png');
const banner1 = require('./images/banner1.png');
const banner2 = require('./images/banner2.png');
const banner3 = require('./images/banner3.png');

const props = {
    component: 'a',
    href: '/#/chalkTwo'
};


export default function ChalkOne() {
    return (
        <div>
            <Header />
            <img src={top} style={{ maxWidth: '100%' }} />
            <div className={styles.show}>
                <img src={pic1} className={styles.pic} />
                <img src={pic2} className={styles.pic} />
                <img src={pic3} className={styles.pic} />
                <img src={pic4} className={styles.pic} />
                <img src={pic5} className={styles.pic} />
                <img src={pic6} className={styles.pic} />
            </div>
            <div className={styles.phoneShow}>
                    <div className={styles.phonePicShow}>
                        <img src={phone1} alt="" className={styles.phoneImg} />
                    </div>
                    <div className={styles.phonePicShow}>
                        <img src={phone2} alt="" className={styles.phoneImg} />
                    </div>
                    <div className={styles.phonePicShow}>
                        <img src={phone3} alt="" className={styles.phoneImg} />
                    </div>
                    <div className={styles.phonePicShow}>
                        <img src={phone4} alt="" className={styles.phoneImg} />
                    </div>
            </div>
            <div className={styles.show} style={{marginTop: 30, marginBottom: 30}}>
                <div className={styles.bannerShow}>
                    <img src={banner0} style={{width: '25%'}}/>
                    <img src={banner1} className={styles.banner} />
                    <img src={banner2} className={styles.banner} />
                    <img src={banner3} className={styles.banner} />
                </div>
                <Button {...props} type="secondary" size="large" style={{backgroundColor: '#433f47'}}>下一页</Button>
            </div>
        </div>
    );
}