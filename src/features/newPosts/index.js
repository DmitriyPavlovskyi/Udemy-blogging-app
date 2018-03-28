import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../shared/AC/posts';

class PostsNew extends Component {
  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

// connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st arg is form config, 2nd is mapStateToProps and 3rd is mapDispatchToProps

export default reduxForm({
  form: 'NewPostsForm',
  fields: ['title', 'categories', 'content'],
}, null, { createPost })(PostsNew);

// user types comething in .... record it on app state
// state === {
//   form: {
//     NewPostsForm: {
//       title: '...',
//       categories: '...',
//       content: '...',
//     }
//   }
// }
