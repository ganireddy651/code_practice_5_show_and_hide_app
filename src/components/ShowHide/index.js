import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  firstName = () => {
    const {firstName} = this.state
    this.setState(() => ({
      firstName: !firstName,
    }))
  }

  lastName = () => {
    const {lastName} = this.state
    this.setState(() => ({
      lastName: !lastName,
    }))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="hide-and-show-bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="hide-and-show-cards-container">
          <div className="first-name-section">
            <button onClick={this.firstName} type="button" className="button">
              Show/Hide Firstname
            </button>
            {firstName ? <p className="first-name-card">Joe</p> : ''}
          </div>
          <div className="last-name-section">
            <button onClick={this.lastName} type="button" className="button">
              Show/Hide Lastname
            </button>
            {lastName ? <p className="last-name-card">Jonas</p> : ''}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
