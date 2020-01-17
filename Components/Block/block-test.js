import React from 'react'
import Block  from './block'
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  shallow(<Block/>);
});