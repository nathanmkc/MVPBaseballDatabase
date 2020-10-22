import AddPitcherPage from './AddPitcherPage.jsx'

class AddPitcherButton extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));
    ReactDOM.render(
      <AddPitcherPage />,
      document.getElementById('app')
    )
  }


  render() {
    return (
      <button onClick={this.handleClick}>Add Pitcher</button>
    )
  }
}

export default AddPitcherButton;