import React from 'react'
import Game from './game'
import {shallow, mount} from 'enzyme'

it('renders without crashing', () => {
  shallow(<Game />);
});


it('renders game status correctly', () => {
    const wrapper = mount(<Game/>)
    const firstPlayer = wrapper.find('div.game-status').children().first().text()
    expect(firstPlayer).toEqual('Next Move: X')

});