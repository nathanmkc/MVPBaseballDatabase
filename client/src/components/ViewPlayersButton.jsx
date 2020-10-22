import ViewPlayersPage from './ViewPlayersPage.jsx';

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
      <button className="viewPlayersButton" onClick={this.handleClick}>Enter Player Database</button>
    )
  }
}

export default ViewPlayersButton;