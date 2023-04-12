import { FC } from 'react';

import MenuContainer from '@/layout/menu-container/MenuContainer';
import Logo from '@/layout/navigation/Logo';

const Navigation: FC = () => {
  return (
    <div className={'py-layout flex flex-col gap-7'}>
      <Logo />
      <MenuContainer />
    </div>
  );
};

export default Navigation;
