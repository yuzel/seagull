import React from 'react';
import styles from './index.module.scss';
import Header from '@/components/Header';

const banner = require('./images/banner.png');
const colorIcon = require('./images/colorIcon.png');
const handDrawingIcon = require('./images/handDrawingIcon.png');
const lineIcon = require('./images/lineIcon.png');
const realisticIcon = require('./images/realisticIcon.png');


export default function FoodIcon() {
    return (
        <div>
            <Header />
            <div className={styles.wapper}>
                <div className={styles.bannerShow}>
                    <img src={banner} className={styles.head} />
                    <div style={{
                        backgroundImage: `url(${require('./images/bg1.png')})`,
                        backgroundPosition: 'center',
                        backgroundSize: '90% auto',
                        backgroundRepeat: 'no-repeat'
                        }} className={styles.show}>
                        <img src={lineIcon} className={styles.pic} />
                        <img src={colorIcon} className={styles.pic} style={{marginTop: 70}}/>
                        <img src={handDrawingIcon} className={styles.pic} style={{marginTop: 70}}/>
                        <img src={realisticIcon} className={styles.pic} style={{marginTop: 70, marginBottom: 30}}/>
                    </div>
                </div>
            </div>

        </div>
    );
}