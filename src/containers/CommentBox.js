import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addPost } from '../actions/post'
import CommentBoxComponent from '../components/CommentBox'

export class CommentBox extends Component {

  state = {
    message: '',
  }
  
  typing = (event) => {
    this.setState({
      message: event.target.value
    })
  }
  
  addPost = (message) => {
    this.props.addPost(message)
    this.setState({
      message: ''
    })
  }

  render() {
    return (
      <CommentBoxComponent addPost={this.addPost} typing={this.typing} message={this.state.message} />
    )
  }

}

export default connect(
  null,
  {
    addPost,
  }
)(CommentBox)
