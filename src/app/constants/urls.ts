import {environment} from '../../environments/environment'

const {API} = environment;

export const urls= {
  cars: `${API}/cars`,
  posts: `${API}/posts`,
  comments: `${API}/comments`,
}
