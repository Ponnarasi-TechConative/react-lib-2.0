/**
 * @prettier
 */
import React from "react"
import PropTypes from "prop-types"
import ImPropTypes from "react-immutable-proptypes"
import { sanitizeUrl } from "core/utils"

export class InfoBasePath extends React.Component {
  static propTypes = {
    host: PropTypes.string,
    basePath: PropTypes.string,
  }

  render() {
    const { host, basePath } = this.props

    return (
      <pre className="base-url">
        [ Base URL: {host}
        {basePath} ]
      </pre>
    )
  }
}

export class InfoUrl extends React.PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
    getComponent: PropTypes.func.isRequired,
  }

  render() {
    const { url, getComponent } = this.props
    const Link = getComponent("Link")

    return (
      <Link target="_blank" href={sanitizeUrl(url)}>
        <span className="url"> {url}</span>
      </Link>
    )
  }
}

class Info extends React.Component {
  static propTypes = {
    title: PropTypes.any,
    description: PropTypes.any,
    version: PropTypes.any,
    info: PropTypes.object,
    url: PropTypes.string,
    host: PropTypes.string,
    basePath: PropTypes.string,
    externalDocs: ImPropTypes.map,
    getComponent: PropTypes.func.isRequired,
    oas3selectors: PropTypes.func,
    selectedServer: PropTypes.string,
  }

  render() {
    const {
      info,
      url,
      host,
      basePath,
      getComponent,
      externalDocs,
      url: specUrl,
    } = this.props
    const title = info.get("title")
 

    const Link = getComponent("Link")
    const InfoUrl = getComponent("InfoUrl")
    const InfoBasePath = getComponent("InfoBasePath")

    return (
      <div className="info">
        <hgroup className="main">
          <h2 className="title">
            {title}
          </h2>
          {host || basePath ? (
            <InfoBasePath host={host} basePath={basePath} />
          ) : null}
          {url && <InfoUrl getComponent={getComponent} url={url} />}
        </hgroup>

       
      </div>
    )
  }
}

export default Info
