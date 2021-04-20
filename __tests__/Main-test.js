import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeBox from '../client/src/components/WelcomeBox.jsx';
import AddPlayerButton from '../client/src/components/AddPlayerButton.jsx';
import ViewPlayersButton from '../client/src/components/ViewPlayersButton.jsx';
import AddPlayerPage from '../client/src/components/AddPlayerPage.jsx';

configure({adapter: new Adapter()});

test('WelcomeBox renders with a add player button and an add pitcher button', () => {
  const wrapper = shallow(<WelcomeBox />);
  expect(wrapper.find(AddPlayerButton)).toHaveLength(1);
  expect(wrapper.find(ViewPlayersButton)).toHaveLength(1);
})
