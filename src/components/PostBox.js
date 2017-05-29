import React from 'react';
import { Row, Col, Alert } from 'react-bootstrap';

import CommentBox from '../containers/CommentBox';
import PostItem from '../containers/PostItem';
import style from './PostBox.css';

const PostBox = ({ posts }) => {
  return (
    <div className="col-md-4 col-md-offset-4">
      <div className="row feed">
        {
          posts.map(post => <PostItem key={post.id} message={post.message} />)
        }
      </div>
      <CommentBox />
    </div>
  )
};

export default PostBox;
