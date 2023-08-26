/**
 * @prettier
 */
import React from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
export default class BaseLayout extends React.Component {
  static propTypes = {
    errSelectors: PropTypes.object.isRequired,
    errActions: PropTypes.object.isRequired,
    specSelectors: PropTypes.object.isRequired,
    oas3Selectors: PropTypes.object.isRequired,
    oas3Actions: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired,
  };

  render() {
    const { specSelectors, getComponent } = this.props;
    const value = specSelectors.value();
    const objval = specSelectors.objval();
    const Home = getComponent('Home')
    return (
      <div className="rest-import">
        <div className="information-container">
          <div>
            <p>{value}</p>
            <p>{objval.name}</p>
            <p>hello Ponnarasi</p>
          </div>
          <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="contained">{value}</Button>
            <Button variant="outlined">Outlined</Button>
          </Stack>
          <Home title="today" content="welcome"/>
        </div>
      </div>
    );
  }
}
