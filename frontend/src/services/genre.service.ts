import { IGenre } from '@/shared/types/genre.types';

import { getGenreApi } from '@/config/api/api.config';
import { axiosClassic } from '@/config/api/axios.interceptor';

export const GenreService = {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<IGenre[]>(getGenreApi(''));
  },

  // async getPopularGenres(limit = 4) {
  //   return axiosClassic.get<IGenre[]>(getGenreApi('/popular'));
  // },
};
