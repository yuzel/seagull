import React from 'react';
import Logo from '../Logo';
import styles from './index.module.scss';
import Anchor, { Link } from '@alifd/biz-anchor';
import './style.scss'
const MENUS = [
  {
    name: '个人简介',
    path: '#home/resume',
    subName: 'RESUME'
  },
  {
    name: <span>项&nbsp;&nbsp;&nbsp;&nbsp;目</span>,
    path: '#home/project',
    subName: 'PROJECT'
  },
  {
    name: '作品展示',
    path: '#home/works',
    subName: 'WORKS'
  },
];

export default function Header() {
  return (
    <Anchor className="header-anchor">
      <div className={styles.headerContainer} id="headerContent">
        <div className={styles.headerContent} >
          <Logo />
          <div className={styles.headerNavbar}>
            {
              MENUS.map((item, idx) => {
                return (
                  <div key={idx} className={styles.headerMenuItem}>
                    <Link   key={idx} href={item.path} title={<>
                      <p className={styles.name}>{item.name}</p>
                      <p className={styles.subName}>{item.subName}</p></>}>
                    </Link>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </Anchor >
  );
}
