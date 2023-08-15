import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isCheck: false}

  onclick = () => {
    this.setState(prevState => ({
      isCheck: !prevState.isCheck,
    }))
  }

  render() {
    const {user} = this.props
    const {questionText, answerText} = user
    const {isCheck} = this.state
    return (
      <li>
        <div className="InsideContainer">
          <h1 className="questionText">{questionText}</h1>
          <button type="button" className="buttonImage" onClick={this.onclick}>
            {isCheck ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
              />
            )}
          </button>
        </div>
        {isCheck && <hr className="borderColor" />}
        {isCheck ? <p className="answerText">{answerText}</p> : null}
      </li>
    )
  }
}

export default FaqItem
