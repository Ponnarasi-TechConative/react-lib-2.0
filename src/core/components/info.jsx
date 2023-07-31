/**
 * @prettier
 */
import React from "react"
import PropTypes from "prop-types"

class Info extends React.Component {
  static propTypes = {
    url: PropTypes.string,
  }

  render() {
    const {
      url,
    } = this.props
 


    return (
      <div className="info">
     {url}
       
      </div>
    )
  }
}

export default Info
