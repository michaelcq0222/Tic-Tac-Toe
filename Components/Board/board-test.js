import Board from './board'
import {shallow, mount} from 'enzyme'

it('renders without crashing', () => {
    let blocks = Array(9).fill(null)
    shallow(<Board blocks={blocks}/>);
  });

it('calls onClick event on click of a board square', () =>{
    let blocks = Array(9).fill(null)
    const onClick = jest.fn();
    let wrapper = mount(<Board blocks={blocks} onClick={onClick}/>);
    wrapper.find('button.block').first().simulate('click');
    expect(onClick).toBeCalledWith(0)
  })