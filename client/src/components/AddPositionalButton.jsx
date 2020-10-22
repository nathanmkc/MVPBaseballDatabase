import AddPositionalPage from './AddPositionalPage.jsx'

class AddPositionalButton extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));
    ReactDOM.render(
      <AddPositionalPage />,
      document.getElementById('app')
     )
  }


  render() {
    return (
      <button onClick={this.handleClick} className="addPositionalButton">Add Positional Player</button>
    )
  }
}

export default AddPositionalButton;