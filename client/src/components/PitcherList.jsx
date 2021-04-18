function Pitcher(props) {
  return (
      <tr>
        <td style={{fontWeight: "bold"}}>{props.name}</td>
        <td>{props.team}</td>
        <td>{props.wins}</td>
        <td>{props.losses}</td>
        <td>{(props.earnedRuns * 9 / props.inningsPitched).toFixed(2)}</td>
        <td>{props.games}</td>
        <td>{props.gamesStarted}</td>
        <td>{props.completeGames}</td>
        <td>{props.shutouts}</td>
        <td>{props.saves}</td>
        <td>{props.saveOpportunities}</td>
        <td>{props.inningsPitched}</td>
        <td>{props.hits}</td>
        <td>{props.runs}</td>
        <td>{props.earnedRuns}</td>
        <td>{props.homeRuns}</td>
        <td>{props.hitBatsmen}</td>
        <td>{props.walks}</td>
        <td>{props.strikeOuts}</td>
        <td>{((props.walks + props.hitBatsmen + props.hits) / props.inningsPitched).toFixed(2)}</td>
      </tr>);
}

function PitcherList(props) {
  const pitchers = props.pitchers;
  const pitcherBoxes = pitchers.map((pitcher) =>
    <Pitcher key={pitcher.id} {pitcher} />
  );
  return (
    <table cellPadding="0" cellSpacing="0">
      <thead>
        <tr>
          <th>Name</th>
          <th>Team</th>
          <th>W</th>
          <th>L</th>
          <th>ERA</th>
          <th>G</th>
          <th>GS</th>
          <th>CG</th>
          <th>SHO</th>
          <th>SV</th>
          <th>SVO</th>
          <th>IP</th>
          <th>H</th>
          <th>R</th>
          <th>ER</th>
          <th>HR</th>
          <th>HB</th>
          <th>BB</th>
          <th>SO</th>
          <th>WHIP</th>
        </tr>
      </thead>
      <tbody>
        {pitcherBoxes}
      </tbody>
    </table>
  )
}

export default PitcherList;