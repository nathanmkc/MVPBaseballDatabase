function PositionalPlayer(props) {
  return <div>{props.name}</div>;
}

function PositionalPlayerList(props) {
  const positionals = props.positionals;
  const positionalBoxes = positionals.map((positional) =>
    <PositionalPlayer key={positional.id} {...positional} />
  );
  return (
    <div>
      {positionalBoxes}
    </div>
  )
}

export default PositionalPlayerList;