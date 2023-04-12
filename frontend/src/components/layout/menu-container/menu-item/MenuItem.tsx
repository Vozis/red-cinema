import cn from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { IMenuItem } from '@/layout/menu-container/menu-item/menu-item.interface';

import MaterialIcon from '@/ui/MaterialIcon';

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
  const { asPath } = useRouter();

  return (
    <li
      className={cn('px-8 border-r-4 border-r-transparent transition-colors', {
        'border-r-primary': asPath === item.link,
      })}
    >
      <Link
        href={item.link}
        className={
          'flex items-center text-gray-600 mt-3 cursor-pointer transition-colors hover:text-white'
        }
      >
        <MaterialIcon
          className={cn('text-2lg', {
            'fill-primary': asPath === item.link,
          })}
          name={item.icon}
        />
        <span
          className={cn('ml-3 text-lg', {
            'text-white': asPath === item.link,
          })}
        >
          {item.title}
        </span>
      </Link>
    </li>
  );
};

export default MenuItem;
