/**
 * @prettier
 */
import err from "core/plugins/err"
import layout from "core/plugins/layout"
import spec from "core/plugins/spec"
import view from "core/plugins/view"
import requestSnippets from "core/plugins/request-snippets"
import logs from "core/plugins/logs"
import swaggerJs from "core/plugins/swagger-js"
import downloadUrlPlugin from "core/plugins/download-url"
import App from "core/components/app"
import Headers from "core/components/headers"
import Info, { InfoUrl, InfoBasePath } from "core/components/info"
import InfoContainer from "core/containers/info"
import BaseLayout from "core/components/layouts/base"
import * as LayoutUtils from "core/components/layout-utils"

export default function () {
  let coreComponents = {
    components: {
      App,
      info: Info,
      InfoContainer,
      InfoUrl,
      InfoBasePath,
      headers: Headers,
      BaseLayout,
    },
  }

  let formComponents = {
    components: LayoutUtils,
  }



  return [
    logs,
    view,
    spec,
    err,
    layout,
    coreComponents,
    formComponents,
    swaggerJs,
    downloadUrlPlugin,
    requestSnippets,
  ]
}
