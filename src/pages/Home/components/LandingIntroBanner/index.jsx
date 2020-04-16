import React from 'react';
import styles from './index.module.scss';

const DESIGN = require('./images/DESiGN.png');
const FGX = require('./images/fgx.png');
const banner = require('./images/arrow-banner.png');

export default function LandingIntroBanner() {
  return (
    <div className={styles.landingIntroBanner} style={{ height: '100vh' }}>
      <div
        className={styles.landingIntroBannerBackground}
        style={{
          backgroundImage:
            `url(${require('./images/background.jpg')})`,
          backgroundPosition: 'center',
        }}
      />
      <div className={styles.landingIntroBannerContentWrapper}>
        <div className={styles.landingIntroBannerContent}>
          <div >
            <img src={DESIGN} width="587" height="72" />
          </div>
          <div className={styles.font}><span>设&nbsp;计&nbsp;&nbsp;&nbsp;&nbsp;形&nbsp;式&nbsp;追&nbsp;随&nbsp;功&nbsp;能</span></div>
          <div className={styles.font2}>B&nbsp;H&nbsp;O&nbsp;&nbsp;&nbsp;&nbsp;W&nbsp;E&nbsp;B&nbsp;S&nbsp;I&nbsp;T&nbsp;E</div>
          <div style={{ paddingTop: 40 }}>
            <img src={FGX} width="422" height="6" />
          </div>
          <div style={{ paddingTop: 30 }}>
            <span className={styles.font3}>白海鸥</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={styles.font4}>个人网站</span>
          </div>
          <div style={{ position: "absolute", bottom: 20 }}>
            <img src={banner} width="20" height="40" />
          </div>
        </div>
      </div>
    </div >
  );
}
