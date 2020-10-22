import AddPlayerPage from './AddPlayerPage.jsx';

class AddPlayerButton extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));
    ReactDOM.render(
      <AddPlayerPage />,
      document.getElementById('app')
    )
  }


  render() {
    return (
      <button onClick={this.handleClick}>Add Player</button>
    )
  }
}

export default AddPlayerButton;