import ViewPositionalsPage from './ViewPositionalsPage.jsx';
import React from 'react';

class ViewPositionalsButton extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    $.get('/positional', (data) => {
      ReactDOM.unmountComponentAtNode(document.getElementById('app'));
      ReactDOM.render(
        <ViewPositionalsPage positionals={data}/>,
        document.getElementById('app')
      )
    })
  }


  render() {
    return (
      <button onClick={this.handleClick} className="addPositionalButton">View Positional Players</button>
    )
  }
}

export default ViewPositionalsButton;