import ViewPlayersPage from './ViewPlayersPage.jsx';
import React from 'react';

class ViewPlayersButton extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));
    ReactDOM.render(
      <ViewPlayersPage />,
      document.getElementById('app')
    )
  }

  render () {
    return (
      <button className="viewPlayersButton" onClick={this.handleClick}>View Player Database</button>
    )
  }
}

export default ViewPlayersButton;