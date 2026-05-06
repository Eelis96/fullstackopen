import { useState } from 'react'

const Header = ({ name }) => {
  return <h1>{name}</h1>
}

const Statistic = ({ name, amount }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{amount}</td>
    </tr>
  )
}

const Statistics = ({ good, bad, neutral }) => {
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positive = total === 0 ? 0 : (good / total) * 100

  if (total === 0) {
    return <p>No feedback given</p>
  }

  return (
    <table>
      <tbody>
        <Statistic name="good" amount={good} />
        <Statistic name="neutral" amount={neutral} />
        <Statistic name="bad" amount={bad} />
        <Statistic name="all" amount={total} />
        <Statistic name="average" amount={average.toFixed(2)} />
        <Statistic name="positive" amount={positive.toFixed(1) + " %"} />
      </tbody>
    </table>
  )
}

const Button = ({ text, feedback }) => {
  return <button onClick={feedback}>{text}</button>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const resetAll = () => {
    setGood(0)
    setNeutral(0)
    setBad(0)
  }

  return (
    <div>
      <Header name="give feedback" />
      <Button text="good" feedback={() => setGood(good + 1)} />
      <Button text="neutral" feedback={() => setNeutral(neutral + 1)} />
      <Button text="bad" feedback={() => setBad(bad + 1)} />
      <Button text="reset" feedback={resetAll} />
      <Header name="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App