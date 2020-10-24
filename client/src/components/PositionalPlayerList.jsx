function Positional(props) {
  return (
      <tr>
        <td>{props.name}</td>
        <td>{props.position}</td>
        <td>{props.team}</td>
        <td>{props.games}</td>
        <td>{props.atBats}</td>
        <td>{props.runs}</td>
        <td>{props.hits}</td>
        <td>{props.doubles}</td>
        <td>{props.triples}</td>
        <td>{props.homeRuns}</td>
        <td>{props.RBIs}</td>
        <td>{props.walks}</td>
        <td>{props.strikeOuts}</td>
        <td>{props.stolenBases}</td>
        <td>{props.caughtStealing}</td>
        <td>{(props.hits / props.atBats).toFixed(3).replace(/^0+/, "")}</td>
        <td>{((props.hits + props.walks) / (props.atBats + props.walks)).toFixed(3).replace(/^0+/, "")}</td>
      </tr>);
}

function PositionalPlayerList(props) {
  const positionals = props.positionals;
  const positionalBoxes = positionals.map((positional) =>
    <Positional key={positional.id} {...positional} />
  );
  return (
    <table cellPadding="0" cellSpacing="0">
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Team</th>
          <th>G</th>
          <th>AB</th>
          <th>R</th>
          <th>H</th>
          <th>2B</th>
          <th>3B</th>
          <th>HR</th>
          <th>RBI</th>
          <th>BB</th>
          <th>SO</th>
          <th>SB</th>
          <th>CS</th>
          <th>AVG</th>
          <th>OBP</th>
        </tr>
      </thead>
      <tbody>
        {positionalBoxes}
      </tbody>
    </table>
  )
}

export default PositionalPlayerList;