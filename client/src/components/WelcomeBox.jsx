import AddPlayerButton from './AddPlayerButton.jsx';
import ViewPlayersButton from './ViewPlayersButton.jsx';

class WelcomeBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="welcome">
        <div>
          <h1>Nate's Baseball Player Directory</h1>
          <p>Welcome to Nate's Baseball Player Directory. Would you like to enter a new player into the database, or view existing players?</p>
        </div>
        <div>
          <AddPlayerButton /> <ViewPlayersButton />
        </div>
      </div>
    )
  }
};

export default WelcomeBox;