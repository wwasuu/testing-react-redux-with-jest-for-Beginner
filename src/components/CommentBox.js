import React from 'react';
import { Row, Col, FormControl, Button } from 'react-bootstrap';

import style from './CommentBox.css';

const CommentBox = ({ typing, addPost, message }) => (
  <div className="comment-box">
    <div className="col-md-9">
      <input
        type="text"
        placeholder="What's in your head"
        value={message} 
        onChange={typing}
        className="form-control"
      />
    </div>
    <div className="col-md-3">
      <button className="btn btn-primary btn-block" onClick={() => addPost(message)}>ระบาย</button>
    </div>
  </div>
);

export default CommentBox;
