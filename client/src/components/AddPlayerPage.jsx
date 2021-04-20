import AddPitcherButton from './AddPitcherButton.jsx';
import AddPositionalButton from './AddPositionalButton.jsx';
import React from 'react';

class AddPlayerPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="welcome">
        <div>
          <h1>Add Player</h1>
          <p>Would you like to add a pitcher or a positional player?</p>
        </div>
        <div>
          <AddPitcherButton /> <AddPositionalButton />
        </div>
      </div>
    );
  }
}

export default AddPlayerPage;