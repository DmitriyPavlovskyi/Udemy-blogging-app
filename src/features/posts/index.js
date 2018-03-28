import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../shared/AC/posts';
import { Link } from 'react-router';

class Posts extends React.Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-right">
          <Link to="/posts/new" className="btn btn-primary">Add a post</Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`posts/${post.id}`}>
            <span className="float-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      )
    });
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all}
}

// ------------
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }
//
// export default connect(null, mapDispatchToProps)(Posts);
// ------------
// Shorter way without mapDispatch:
export default connect(mapStateToProps, { fetchPosts })(Posts);
