import { FC } from 'react';

import Menu from '@/layout/menu-container/Menu';
import { usePopularGenres } from '@/layout/menu-container/genres/usePopularGenres';

const GenreMenu: FC = () => {
  const { data, isLoading } = usePopularGenres();

  return isLoading ? (
    <div className={'mx-11 mb-6'}>Loading...</div>
  ) : (
    <Menu menu={{ title: 'Popular Genres', items: data || [] }} />
  );
};

export default GenreMenu;
