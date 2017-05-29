import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPosts } from '../actions/post'
import PostBoxComponent from '../components/PostBox'

class PostBox extends Component {
  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    return (
      <PostBoxComponent posts={this.props.posts} />
    )
  }

}

const mapStateToProps = state => ({
  posts: state.posts,
})


export default connect(
  mapStateToProps,
  {
    getPosts,
  }
)(PostBox)
