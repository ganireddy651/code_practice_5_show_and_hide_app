// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstNameCard: false, lastNameCard: false}

  firstName = () => {
    this.setState(prevState => {})
  }

  lastName = () => {}

  render() {
    const {firstNameCard, lastNameCard} = this.state
    return (
      <div className="hide-and-show-bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <button onClick={this.firstName} className="button" type="button">
            Show/Hide Firstname
          </button>
          <button onClick={this.lastName} className="button" type="button">
            Show/Hide Lastname
          </button>
        </div>
        <div className="card-container">
          <div
            onChange={this.firstName()}
            className={`first-name-card ${firstNameCard}`}
          >
            <p>Joe</p>
          </div>
          <div
            onChange={this.lastName()}
            className={`last-name-card ${lastNameCard}`}
          >
            <p>Jonas</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
