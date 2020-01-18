import React from 'react'
import Game from './game'
import {shallow, mount} from 'enzyme'

it('renders without crashing', () => {
  shallow(<Game />);
});