import ViewPitchersPage from './ViewPitchersPage.jsx'

class ViewPitchersButton extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    $.get('/pitcher', (data) => {
      ReactDOM.unmountComponentAtNode(document.getElementById('app'));
      ReactDOM.render(
        <ViewPitchersPage pitchers={data}/>,
        document.getElementById('app')
      )
    })
  }


  render() {
    return (
      <button onClick={this.handleClick}>View Pitchers</button>
    )
  }
}

export default ViewPitchersButton;