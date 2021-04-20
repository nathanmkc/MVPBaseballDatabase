import WelcomeBox from './WelcomeBox.jsx';
import React from 'react';

class AddPositionalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'name',
      position: 'C',
      team: 'ARI',
      games: 0,
      atBats: 0,
      runs: 0,
      hits: 0,
      doubles: 0,
      triples: 0,
      homeRuns: 0,
      RBIs: 0,
      walks: 0,
      strikeOuts: 0,
      stolenBases: 0,
      caughtStealing: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var field = event.target.name;
    this.setState({[field]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    $.post('/positional', this.state, (data) => {
      window.alert(data);
    });
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));
    ReactDOM.render(
      <WelcomeBox />,
      document.getElementById('app')
     )
  }

  render() {
    return (
      <div className="welcome">
        <div>
          <h1>Add Positional Player</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" className="nameInput" value={this.state.name} onChange={this.handleChange} />
            </label><br></br>
            <label>
              Position:
              <select name="position" value={this.state.position} onChange={this.handleChange}>
                <option value="C">C</option>
                <option value="1B">1B</option>
                <option value="2B">2B</option>
                <option value="3B">3B</option>
                <option value="SS">SS</option>
                <option value="LF">LF</option>
                <option value="CF">CF</option>
                <option value="RF">RF</option>
                <option value="DH">DH</option>
              </select>
            </label><br></br>
            <label>
              Team:
              <select name="team" value={this.state.team} onChange={this.handleChange}>
                <option value="ARI">ARI</option>
                <option value="ATL">ATL</option>
                <option value="BAL">BAL</option>
                <option value="BOS">BOS</option>
                <option value="CHC">CHC</option>
                <option value="CWS">CWS</option>
                <option value="CIN">CIN</option>
                <option value="CLE">CLE</option>
                <option value="COL">COL</option>
                <option value="DET">DET</option>
                <option value="FLA">FLA</option>
                <option value="HOU">HOU</option>
                <option value="KAN">KAN</option>
                <option value="LAA">LAA</option>
                <option value="LAD">LAD</option>
                <option value="MIL">MIL</option>
                <option value="MIN">MIN</option>
                <option value="NYM">NYM</option>
                <option value="NYY">NYY</option>
                <option value="OAK">OAK</option>
                <option value="PHI">PHI</option>
                <option value="PIT">PIT</option>
                <option value="SD">SD</option>
                <option value="SF">SF</option>
                <option value="SEA">SEA</option>
                <option value="STL">STL</option>
                <option value="TB">TB</option>
                <option value="TEX">TEX</option>
                <option value="TOR">TOR</option>
                <option value="WAS">WAS</option>
              </select>
            </label><br></br>
            <label>
              Games:
              <input type="text" name="games" value={this.state.games} onChange={this.handleChange} />
            </label><br></br>
            <label>
              At Bats:
              <input type="atBats" name="atBats" value={this.state.atBats} onChange={this.handleChange} />
            </label><br></br>
            <label>
              Runs:
              <input type="runs" name="runs" value={this.state.runs} onChange={this.handleChange} />
            </label><br></br>
            <label>
              Hits:
              <input type="text" name="hits" value={this.state.hits} onChange={this.handleChange} />
            </label><br></br>
            <label>
              Doubles:
              <input type="text" name="doubles" value={this.state.doubles} onChange={this.handleChange} />
            </label><br></br>
            <label>
              Triples:
              <input type="text" name="triples" value={this.state.triples} onChange={this.handleChange} />
            </label><br></br>
            <label>
              Home Runs:
              <input type="text" name="homeRuns" value={this.state.homeRuns} onChange={this.handleChange} />
            </label><br></br>
            <label>
              RBIs:
              <input type="text" name="RBIs" value={this.state.RBIs} onChange={this.handleChange} />
            </label><br></br>
            <label>
              Walks:
              <input type="text" name="walks" value={this.state.walks} onChange={this.handleChange} />
            </label><br></br>
            <label>
              Strike Outs:
              <input type="text" name="strikeOuts" value={this.state.strikeOuts} onChange={this.handleChange} />
            </label><br></br>
            <label>
              Stolen Bases:
              <input type="text" name="stolenBases" value={this.state.stolenBases} onChange={this.handleChange} />
            </label><br></br>
            <label>
              Caught Stealing:
              <input type="text" name="caughtStealing" value={this.state.caughtStealing} onChange={this.handleChange} />
            </label><br></br>
            <input type="submit" value="Submit" className="submitButton" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddPositionalPage;