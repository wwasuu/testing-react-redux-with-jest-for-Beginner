import React from 'react'
import { shallow } from 'enzyme'

import CommentBox from '../CommentBox'

describe('[Unit] CommentBox Component', () => {
  let component
  let props

  beforeEach(() => {
    props = {
      addPost: jest.fn(),
      typing: jest.fn(),
      message: '',
    }
    component = shallow(<CommentBox {...props} />)
  })

  it('Should call fn after typing', () => {
    component.find('input').simulate('change', {
      target: {
        value: 'Hello',
      },
    })
    expect(props.typing).toHaveBeenCalled()
  })

  it('Should call fn after click button', () => {
    component.setProps({ message: 'Hello' })
    component.find('button').simulate('click')
    expect(props.addPost).toHaveBeenCalledWith('Hello')
  })
})
