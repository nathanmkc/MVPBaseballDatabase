import PositionalPlayerList from './PositionalPlayerList.jsx'

class ViewPositionalsPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="welcome table">
        <div>
          <h1>Positional Players</h1>
        </div>
        <div>
          <PositionalPlayerList positionals={this.props.positionals}/>
        </div>
      </div>
    );
  }
}

export default ViewPositionalsPage;