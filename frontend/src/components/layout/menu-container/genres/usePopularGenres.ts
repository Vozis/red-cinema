import { useQuery } from '@tanstack/react-query';

import { IMenuItem } from '@/layout/menu-container/menu-item/menu-item.interface';

import { getGenreUrl } from '@/config/api/url.config';

import { GenreService } from '@/services/genre.service';

export const usePopularGenres = () => {
  const { data, isLoading } = useQuery(
    ['popular-gere-menu'],
    () => GenreService.getAll(),
    {
      select: ({ data }) =>
        data
          .map(
            genre =>
              ({
                icon: genre.icon,
                link: getGenreUrl(genre.slug),
                title: genre.name,
              } as IMenuItem),
          )
          .splice(0, 4),
      onError: error => {
        console.log(error);
      },
    },
  );

  console.log('data', data);

  return { data, isLoading };
};
