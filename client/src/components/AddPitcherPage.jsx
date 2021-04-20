import WelcomeBox from './WelcomeBox.jsx';
import React from 'react';

class AddPitcherPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'name',
      team: 'ARI',
      wins: 0,
      losses: 0,
      games: 0,
      gamesStarted: 0,
      completeGames: 0,
      shutouts: 0,
      saves: 0,
      saveOpportunities: 0,
      inningsPitched: 0,
      hits: 0,
      runs: 0,
      earnedRuns: 0,
      homeRuns: 0,
      hitBatsmen: 0,
      walks: 0,
      strikeOuts: 0
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
    $.post('/pitcher', this.state, (data) => {
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
          <h1>Add Pitcher</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" className="nameInput" value={this.state.name} onChange={this.handleChange} />
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
              Wins:
              <input type="text" name="wins" value={this.state.wins} onChange={this.handleChange} />
            </label><br></br>
            <label>
              Losses:
              <input type="text" name="losses" value={this.state.losses} onChange={this.handleChange} />
            </label><br></br>
            <label>
              Games:
              <input type="text" name="games" value={this.state.games} onChange={this.handleChange} />
            </label><br></br>
            <label>
              Games Started:
              <input type="text" name="gamesStarted" value={this.state.gamesStarted} onChange={this.handleChange} />
            </label><br></br>
            <label>
              Complete Games:
              <input type="text" name="completeGames" value={this.state.completeGames} onChange={this.handleChange} />
            </label><br></br>
            <label>
              Shutouts:
              <input type="text" name="shutouts" value={this.state.shutouts} onChange={this.handleChange} />
            </label><br></br>
            <label>
              Saves:
              <input type="text" name="saves" value={this.state.saves} onChange={this.handleChange} />
            </label><br></br>
            <label>
              Save Opportunities:
              <input type="text" name="saveOpportunities" value={this.state.saveOpportunities} onChange={this.handleChange} />
            </label><br></br>
            <label>
              Innings Pitched:
              <input type="text" name="inningsPitched" value={this.state.inningsPitched} onChange={this.handleChange} />
            </label><br></br>
            <label>
              Hits:
              <input type="text" name="hits" value={this.state.hits} onChange={this.handleChange} />
            </label><br></br>
            <label>
              Runs:
              <input type="text" name="runs" value={this.state.runs} onChange={this.handleChange} />
            </label><br></br>
            <label>
              Earned Runs:
              <input type="text" name="earnedRuns" value={this.state.earnedRuns} onChange={this.handleChange} />
            </label><br></br>
            <label>
              Home Runs:
              <input type="text" name="homeRuns" value={this.state.homeRuns} onChange={this.handleChange} />
            </label><br></br>
            <label>
              Hit Batsmen:
              <input type="text" name="hitBatsmen" value={this.state.hitBatsmen} onChange={this.handleChange} />
            </label><br></br>
            <label>
              Walks:
              <input type="text" name="walks" value={this.state.walks} onChange={this.handleChange} />
            </label><br></br>
            <label>
              Strike Outs:
              <input type="text" name="strikeOuts" value={this.state.strikeOuts} onChange={this.handleChange} />
            </label><br></br>
            <input type="submit" value="Submit" className="submitButton" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddPitcherPage;