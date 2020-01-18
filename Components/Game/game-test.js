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

    const button = wrapper.find('button.block').first()
    button.simulate('click')
    const secondPlayer = wrapper.find('div.game-status').children().first().text()
    expect(secondPlayer).toEqual('Next Move: O')

    const turn2 = wrapper.find('button.block').at(1)
    turn2.simulate('click')
    const turn3 = wrapper.find('button.block').at(4)
    turn3.simulate('click')
    const turn4 = wrapper.find('button.block').at(5)
    turn4.simulate('click')
    const turn5 = wrapper.find('button.block').at(8)
    turn5.simulate('click')
    const winner = wrapper.find('div.game-status').children().first().text()
    expect(winner).toEqual('Winner: X')

    const reset = wrapper.find('button.reset')
    reset.simulate('click')
    const firstPlayer = wrapper.find('div.game-status').children().first().text()
    expect(firstPlayer).toEqual('Next Move: X')
    const button = wrapper.find('button.block').first()
    button.simulate('click')
    const turn2 = wrapper.find('button.block').at(1)
    turn2.simulate('click')
    const turn3 = wrapper.find('button.block').at(2)
    turn3.simulate('click')
    const turn4 = wrapper.find('button.block').at(4)
    turn4.simulate('click')
    const turn5 = wrapper.find('button.block').at(7)
    turn5.simulate('click')
    const turn6 = wrapper.find('button.block').at(6)
    turn6.simulate('click')
    const turn7 = wrapper.find('button.block').at(8)
    turn7.simulate('click')
    const turn8 = wrapper.find('button.block').at(5)
    turn8.simulate('click')
    const turn9 = wrapper.find('button.block').at(3)
    turn9.simulate('click')
    const tie = wrapper.find('div.game-status').children().first().text()
    expect(tie).toEqual("It's a tie")

});

/*123587964*/