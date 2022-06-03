import {environment} from '../../environments/environment'

const {API} = environment;

export const urls = {
  movies: `${API}/discover/movie?api_key=865a7502a1780159827b764af0bee919&page=`,
  img: 'https://image.tmdb.org/t/p/w500',
  genre: `${API}/genre/movie/list?api_key=865a7502a1780159827b764af0bee919`,
  movieById: `${API}/movie/`,
  movieByName: `${API}/search/movie?api_key=865a7502a1780159827b764af0bee919&query=`,
  // login: '/auth/login',
  // registration: '/auth/registration'
}
