import Board from './board'
import {shallow, mount} from 'enzyme'

it('renders without crashing', () => {
    let blocks = Array(9).fill(null)
    shallow(<Board blocks={blocks}/>);
  });