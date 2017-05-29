import React from 'react'
import { shallow } from 'enzyme'

import PostItem from '../PostItem'

describe('[Unit] PostItem Controller', () => {
  let component
  let props

  beforeEach(() => {
    props = {
      message: 'Hello',
    }
    component = shallow(<PostItem {...props} />)
  })

  it('Should rendered correct', () => {
    expect(component.find('.alert').text()).toEqual('Hello')
  })
})
