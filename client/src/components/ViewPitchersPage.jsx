import PitcherList from './PitcherList.jsx'

class ViewPitchersPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="welcome">
        <div>
          <h1>Pitchers</h1>
        </div>
        <div>
          <PitcherList pitchers={this.props.pitchers}/>
        </div>
      </div>
    );
  }
}

export default ViewPitchersPage;