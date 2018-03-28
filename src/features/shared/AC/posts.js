import axios from 'axios';
import { FETCH_POSTS, ROOT_URL, API_KEY, CREATE_POST } from '../constants';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    CREATE_POST,
    payload: request
  }
}
