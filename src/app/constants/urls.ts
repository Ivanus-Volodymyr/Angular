import {environment} from '../../environments/environment'

const {API} = environment;

export const urls = {
  movies: `${API}/discover/movie?api_key=865a7502a1780159827b764af0bee919&page=`,
  genre: `${API}/genre/movie/list?api_key=865a7502a1780159827b764af0bee919`,
  // movieById: '/movie/',
  // movieByName: '/search/movie?api_key=865a7502a1780159827b764af0bee919&query=',
  // login: '/auth/login',
  // registration: '/auth/registration'
}
