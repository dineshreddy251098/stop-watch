import {Component} from 'react'
import './index.css'

const initialState = {seconds: 0}

class Stopwatch extends Component {
  state = initialState

  getTimer = () => {
    const {seconds} = this.state
    const minutes = Math.floor(seconds / 60)
    const remainSeconds = Math.floor(seconds - minutes * 60)
    const formateMinutes = minutes > 9 ? minutes : `0${minutes}`
    const formateSeconds =
      remainSeconds > 9 ? remainSeconds : `0${remainSeconds}`

    return `${formateMinutes}:${formateSeconds}`
  }

  increment = () => {
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
  }

  onClickStart = () => {
    this.intervalId = setInterval(this.increment, 1000)
  }

  onClickStop = () => {
    clearInterval(this.intervalId)
  }

  onClickReset = () => {
    this.setState(initialState)
  }

  render() {
    const formateTime = this.getTimer()
    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="card">
          <div className="timer-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p className="timer-heading">Timer</p>
          </div>
          <h1 className="timer">{formateTime}</h1>
          <div className="btn-container">
            <button
              onClick={this.onClickStart}
              className="btn green"
              type="button"
            >
              start
            </button>
            <button
              onClick={this.onClickStop}
              className="btn red"
              type="button"
            >
              stop
            </button>
            <button
              onClick={this.onClickReset}
              className="btn yellow"
              type="button"
            >
              reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
