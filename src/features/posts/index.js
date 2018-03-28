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
        List of blog posts
      </div>
    );
  }
}

// ------------
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }
//
// export default connect(null, mapDispatchToProps)(Posts);
// ------------
// Shorter way without mapDispatch:
export default connect(null, { fetchPosts })(Posts);
