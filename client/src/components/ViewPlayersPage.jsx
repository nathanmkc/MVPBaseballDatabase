import ViewPitchersButton from './ViewPitchersButton.jsx';
import ViewPositionalsButton from './ViewPositionalsButton.jsx';

class ViewPlayerPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="welcome">
        <div>
          <h1>View Players</h1>
          <p>Would you like to view pitchers or a positional players?</p>
        </div>
        <div>
          <ViewPitchersButton /> <ViewPositionalsButton />
        </div>
      </div>
    );
  }
}

export default ViewPlayerPage;