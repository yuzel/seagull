import React from 'react';
import styles from './index.module.scss';

const resume = require('./images/resume.png');
const photo = require('./images/photo.png');
const line = require('./images/line.png');

export default function ProductIntro() {
  return (
    <div>
      <div className={styles.resume}>
        <img className={styles.resumeImg} src={resume} style={{width: '25%'}} alt="" />
      </div>
      <div className={styles.photo}>
        <img className={styles.resumeImg} src={photo} style={{width: '20%'}} alt="" />
        <div style={{ paddingLeft: 48, paddingTop: 33 }}>
          <p className={styles.name}>我是白海鸥</p>
          <p className={styles.post}>UI设计师</p>
          <p style={{paddingTop: 10}}>
            <span className={styles.introductionTitle}>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</span>
            <span className={styles.introduction}>女</span>
          </p>
          <p>
            <span className={styles.introductionTitle}>星&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;座：</span>
            <span className={styles.introduction}>水瓶</span>
          </p>
          <p>
            <span className={styles.introductionTitle}>爱&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;好：</span>
            <span className={styles.introduction}>音乐、购物</span>
          </p>
          <p>
            <span className={styles.introductionTitle}>联系方式：</span>
            <span className={styles.introduction}>18810610958</span>
            <span className={styles.introduction}>1129049359@qq.com</span>
          </p>
          <img src={line} alt="" />
          <p>
            <span className={styles.projectTime}>2016.5-至今</span>
            <span className={styles.project} style={{ paddingLeft: 50 }}>清檬智慧健康科技有限公司 UI设计师</span>
          </p>
          <p>
            <span className={styles.projectTime}>2015.3-2016.4</span>
            <span className={styles.project}>军朗广告（设计）有限公司       视觉设计</span>
          </p>
        </div>
      </div>
    </div>
  );
}
