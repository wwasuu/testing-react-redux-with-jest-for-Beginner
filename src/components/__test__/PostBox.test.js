import React from 'react'
import { shallow } from 'enzyme'

import PostBox from '../PostBox'
import PostItem from '../../containers/PostItem'

describe('[Unit] PostBox Component', () => {
  let component
  let props
  
  it('Should renders correct structure', () => {
    props = {
      posts: [
        { id: 1, message: 'test1' },
        { id: 2, message: 'test2' },
      ],
    }
    component = shallow(<PostBox {...props} />)
    expect(component.find(PostItem)).toHaveLength(2)
  })
})
