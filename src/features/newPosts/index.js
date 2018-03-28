import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../shared/AC/posts';
import { Link } from 'react-router';
import './styles.css';

class PostsNew extends Component {
  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create A New Post</h3>

        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help text-danger">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help text-danger">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content} />
          <div className="text-help text-danger">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a username';
  }

  if (!values.categories) {
    errors.categories = 'Enter categories';
  }

  if (!values.content) {
    errors.content = 'Enter some content';
  }

  return errors;
}

// connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st arg is form config, 2nd is mapStateToProps and 3rd is mapDispatchToProps

export default reduxForm({
  form: 'NewPostsForm',
  fields: ['title', 'categories', 'content'],
  validate
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
