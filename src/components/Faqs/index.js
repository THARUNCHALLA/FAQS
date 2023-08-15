import {Component} from 'react'

import './index.css'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {ha: []}

  render() {
    const {faqsList} = this.props
    const {ha} = this.state
    console.log(ha)
    return (
      <div className="FaqsBackgroundContainer">
        <div className="FaqItemContainer">
          <h1 className="heading">FAQs</h1>
          <ul>
            {faqsList.map(each => (
              <FaqItem user={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
