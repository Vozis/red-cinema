import { FC } from 'react';

import AuthItems from '@/layout/menu-container/auth/AuthItems';
import MenuItem from '@/layout/menu-container/menu-item/MenuItem';
import { IMenu } from '@/layout/menu-container/menu-item/menu-item.interface';

const Menu: FC<{ menu: IMenu }> = ({ menu }) => {
  const { items, title } = menu;

  return (
    <div className={'mb-14 animate-fade'}>
      <h2 className={'text-gray-500 uppercase text-sm font-semibold pl-layout'}>
        {title}
      </h2>
      <ul className={''}>
        {items && items.length
          ? items.map(item => <MenuItem key={item.link} item={item} />)
          : null}
        {title === 'General' ? <AuthItems /> : null}
      </ul>
    </div>
  );
};

export default Menu;
