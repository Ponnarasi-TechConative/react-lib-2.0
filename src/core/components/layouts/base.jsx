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

    const Row = getComponent("Row")
    const Col = getComponent("Col")

 


    const url = specSelectors.url()
    const value = specSelectors.value()
    const objval = specSelectors.objval()
    return (
      <div className="swagger-ui">
    
          <Row className="information-container">
            <Col mobile={12}>
              {url}
              <p>  {value}</p>
              Comming
            </Col>
          </Row>
      </div>
    )
  }
}
