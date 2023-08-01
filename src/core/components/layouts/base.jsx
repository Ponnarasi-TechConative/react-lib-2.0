/**
 * @prettier
 */
import React from "react"
import PropTypes from "prop-types"

export default class BaseLayout extends React.Component {
  static propTypes = {
    errSelectors: PropTypes.object.isRequired,
    errActions: PropTypes.object.isRequired,
    specSelectors: PropTypes.object.isRequired,
    oas3Selectors: PropTypes.object.isRequired,
    oas3Actions: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired,
  }

  render() {
    const { specSelectors, getComponent } = this.props


    const url = specSelectors.url()
    const value = specSelectors.value()
    const objval = specSelectors.objval()
    console.log(objval)
    return (
      <div className="swagger-ui">
    
          <div className="information-container">
            <div>
              {url}
              <p>  {value}</p>
              <p>{objval.name}</p>
            </div>
          </div>
      </div>
    )
  }
}
