export default function Slot({ val1, val2, val3 }) {
  const check = val1 === val2 && val2 === val3;
  return (
    <div>
        <h1>{val1} {val2} {val3}</h1>
      <h2 style={{color: check? "Green" : "red"}}>{check ? "You Win!" : "You Lose!"}</h2>
    {check && <h3>Congrats</h3>}
    </div>
  );
}
