import React from 'react';
import Logo from '../Logo';
import styles from './index.module.scss';

const MENUS = [
  {
    name: '个人简介',
    path: '#design',
    subName: 'RESUME'
  },
  {
    name: <span>项&nbsp;&nbsp;&nbsp;&nbsp;目</span>,
    path: '#material',
    subName: 'PROJECT'
  },
  {
    name: '作品展示',
    path: '#brandlist',
    subName: 'WORKS'
  },
];

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <Logo />
      <div className={styles.headerContent}>
        <div className={styles.headerNavbar}>
          {
            MENUS.map((item, idx) => {
              return (
                <a key={idx} className={styles.headerMenuItem} href={item.path}>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.subName}>{item.subName}</p>
                </a>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}
