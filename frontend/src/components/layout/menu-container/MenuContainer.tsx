import { FC } from 'react';

import Menu from '@/layout/menu-container/Menu';
import GenreMenu from '@/layout/menu-container/genres/GenreMenu';
import { firstMenu, userMenu } from '@/layout/menu-container/menu.data';

const MenuContainer: FC = () => {
  return (
    <div>
      <Menu menu={firstMenu} />
      <GenreMenu />
      {/*<Menu menu={userMenu} />*/}
    </div>
  );
};

export default MenuContainer;
