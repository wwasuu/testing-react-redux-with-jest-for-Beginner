import React from 'react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'

import { CommentBox } from '../CommentBox'

describe('[Unit] CommentBox Controller', () => {
  let component
  let props

  beforeEach(() => {
    props = {
      addPost: jest.fn(),
    }
    component = shallow(<CommentBox {...props} />)
  })

  it('Should set state correct when call typing function', () => {
    const event = { target: { value: 'Hello' } }
    const state = {
      message: 'Hello',
    }
    component.instance().typing(event)
    expect(component.state()).toEqual(state);
  })

  it('Should call addPost function and set state correct when call addPoost function', () => {
    const message = 'Hello'
    const state = {
      message: '',
    }
    component.instance().addPost(message)
    expect(props.addPost).toHaveBeenCalledWith('Hello')
    expect(component.state()).toEqual(state);
  })
})
