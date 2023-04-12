import { FC, PropsWithChildren } from 'react';

import Navigation from '@/layout/navigation/Navigation';
import Sidebar from '@/layout/sidebar/Sidebar';

import styles from './Layout.module.scss';

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navigation />
      <div className={styles.center}>{children}</div>
      <Sidebar />
    </div>
  );
};

export default Layout;
