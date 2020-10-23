function Pitcher(props) {
  return <div>{props.name}</div>;
}

function PitcherList(props) {
  const pitchers = props.pitchers;
  console.log(pitchers);
  const pitcherBoxes = pitchers.map((pitcher) =>
    <Pitcher key={pitcher.id} {...pitcher} />
  );
  return (
    <div>
      {pitcherBoxes}
    </div>
  )
}

export default PitcherList;