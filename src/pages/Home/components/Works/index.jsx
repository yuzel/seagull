import React from 'react';
import styles from './index.module.scss';
import { Slider } from '@alifd/next';

const title = require('./images/title.png')
const arrow = require('./images/arrow.png')
const font = require('./images/font.png')
const icon = require('./images/icon.png')
const illustration = require('./images/illustration.png')
const poster = require('./images/poster.png')

const icon1 = require('./images/icon1.png')
const icon2 = require('./images/icon2.png')

const illustration1 = require('./images/illustration1.png')
const illustration2 = require('./images/illustration2.png')
const illustration3 = require('./images/illustration3.png')

const poster1 = require('./images/poster1.png')
const poster2 = require('./images/poster2.png')

const font1 = require('./images/font-1.png')
const font2 = require('./images/font-2.png')
const font3 = require('./images/font-3.png')
const font4 = require('./images/font-4.png')

export default function Works() {
    return (
        <div>
            <div className={styles.title}>
                <img src={title} alt="" />
            </div>
            <div className={styles.iconArrow}>
                <img src={arrow} alt="" />
            </div>
            <div className={styles.icon}>
                <img src={icon} alt="" />
            </div>
            <div className={styles.iconShow}>
                <div style={{ width: '38%' }}>
                    <Slider slidesToShow={2} arrowPosition="outer" lazyLoad dots={false} autoplay autoplaySpeed={3000}>
                        <div style={{ width: '22.7%' }}><img src={icon1} alt="" className={styles.iconShowPic} /></div>
                        <div style={{ width: '22.7%' }}><img src={icon2} alt="" className={styles.iconShowPic} /></div>
                    </Slider>
                </div>
            </div>
            <div className={styles.iconArrow}>
                <img src={arrow} alt="" />
            </div>
            <div className={styles.icon}>
                <img src={illustration} alt="" />
            </div>
            <div className={styles.iconShow}>
                <div className={styles.posterShow}>
                    <div className={styles.posterPicShow}>
                        <a href="/#/bjLandmark">
                            <img src={illustration1} alt="" className={styles.iconShowPic} />
                        </a>
                    </div>
                    <div className={styles.posterPicShow}>
                        <a href="/#/child">
                            <img src={illustration2} alt="" className={styles.iconShowPic} />
                        </a>
                    </div>
                    <div className={styles.posterPicShow}><img src={illustration3} alt="" className={styles.iconShowPic} /></div>
                </div>
            </div>
            <div className={styles.iconArrow}>
                <img src={arrow} alt="" />
            </div>
            <div className={styles.icon}>
                <img src={poster} alt="" />
            </div>
            <div className={styles.iconShow}>
                <div className={styles.posterShow}>
                    <div className={styles.posterPicShow}><img src={poster1} alt="" className={styles.iconShowPic} /></div>
                    <div className={styles.posterPicShow}><img src={poster2} alt="" className={styles.iconShowPic} /></div>
                </div>
            </div>
            <div className={styles.iconArrow}>
                <img src={arrow} alt="" />
            </div>
            <div className={styles.icon}>
                <img src={font} alt="" />
            </div>
            <div className={styles.iconShow}>
                <div className={styles.posterShow}>
                    <div className={styles.posterPicShow}>
                        <a href="/#/couldCourt">
                            <img src={font1} alt="" className={styles.iconShowPic} />
                        </a>
                    </div>
                    <div className={styles.posterPicShow}>
                        <a href="/#/neighbours">
                            <img src={font2} alt="" className={styles.iconShowPic} />
                        </a>
                    </div>
                    <div className={styles.posterPicShow}>
                        <a href="/#/logo">
                            <img src={font3} alt="" className={styles.iconShowPic} />
                        </a>
                    </div>
                    <div className={styles.posterPicShow}>
                        <a href="/#/fontDesign">
                            <img src={font4} alt="" className={styles.iconShowPic} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}