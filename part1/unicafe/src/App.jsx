import { useState } from "react";

const Button = ({ handler, text }) => {
  return <button onClick={handler}>{text}</button>;
};

const StatLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  if (total > 0) {
    return (
      <table>
        <tbody>
          <StatLine text="Good" value={good} />
          <StatLine text="Neutral" value={neutral} />
          <StatLine text="Bad" value={bad} />
          <StatLine text="All" value={total} />
          <StatLine text="Average" value={average} />
          <StatLine text="Positive" value={positive} />
        </tbody>
      </table>
    );
  }

  return <p>No feedback given</p>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handler={() => setGood(good + 1)} text={"good"} />
      <Button handler={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Button handler={() => setBad(bad + 1)} text={"bad"} />

      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
