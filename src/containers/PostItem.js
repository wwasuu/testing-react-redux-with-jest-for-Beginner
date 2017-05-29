import React, { Component } from 'react'

import PostItemComponent from '../components/PostItem'

class PostItem extends Component {
  render() {
    return (
      <PostItemComponent message={this.props.message} />
    )
  }
}

export default PostItem;