import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Posts from '../features/posts/index';
import PostsNew from '../features/newPosts/index';
import PostReview from '../features/postReview/index';

import Root from './app';

// In nested routes we can get access to inner components via this.props.children in parent component
// IndexRoute needs to render nested component together with parent one at same time
export default (
  <Route path="/" component={Root}>
    <IndexRoute component={Posts} />
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostReview} />
  </Route>
);
