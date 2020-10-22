class AddPositionalButton extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));
    // ReactDOM.render(
    //   <AddPlayerPage />,
    //   document.getElementById('app')
    // )
  }


  render() {
    return (
      <button onClick={this.handleClick}>Add Positional Player</button>
    )
  }
}

export default AddPositionalButton;