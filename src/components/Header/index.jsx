import React from 'react';
import Logo from '../Logo';
import styles from './index.module.scss';
import Anchor, { Link } from '@alifd/biz-anchor';

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
    <div className={styles.headerContainer}>
      <Logo />
      <div className={styles.headerContent}>
        <Anchor className={styles.headerNavbar}>
          {
            MENUS.map((item, idx) => {
              return (
                <Link key={idx} className={styles.headerMenuItem} href={item.path} title={<>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.subName}>{item.subName}</p></>}>
                </Link>
              );
            })
          }
        </Anchor>
      </div>
    </div>
  );
}
