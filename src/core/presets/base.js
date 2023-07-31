/**
 * @prettier
 */
import err from "core/plugins/err"
import layout from "core/plugins/layout"
import spec from "core/plugins/spec"
import view from "core/plugins/view"
import samples from "core/plugins/samples"
import requestSnippets from "core/plugins/request-snippets"
import logs from "core/plugins/logs"
import swaggerJs from "core/plugins/swagger-js"
import auth from "core/plugins/auth"
import util from "core/plugins/util"
import downloadUrlPlugin from "core/plugins/download-url"
import configsPlugin from "core/plugins/configs"
import deepLinkingPlugin from "core/plugins/deep-linking"
import filter from "core/plugins/filter"
import onComplete from "core/plugins/on-complete"
import safeRender from "core/plugins/safe-render"
import App from "core/components/app"
import AuthorizationPopup from "core/components/auth/authorization-popup"
import AuthorizeBtn from "core/components/auth/authorize-btn"
import AuthorizeOperationBtn from "core/components/auth/authorize-operation-btn"
import Auths from "core/components/auth/auths"
import AuthItem from "core/components/auth/auth-item"
import AuthError from "core/components/auth/error"
import ApiKeyAuth from "core/components/auth/api-key-auth"
import BasicAuth from "core/components/auth/basic-auth"
import Oauth2 from "core/components/auth/oauth2"
import Headers from "core/components/headers"
import Info, { InfoUrl, InfoBasePath } from "core/components/info"
import InfoContainer from "core/containers/info"
import License from "core/components/license"
import BaseLayout from "core/components/layouts/base"
import * as LayoutUtils from "core/components/layout-utils"
import * as JsonSchemaComponents from "core/json-schema-components"

export default function () {
  let coreComponents = {
    components: {
      App,
      authorizationPopup: AuthorizationPopup,
      authorizeBtn: AuthorizeBtn,
      authorizeOperationBtn: AuthorizeOperationBtn,
      auths: Auths,
      AuthItem: AuthItem,
      authError: AuthError,
      oauth2: Oauth2,
      apiKeyAuth: ApiKeyAuth,
      basicAuth: BasicAuth,
      info: Info,
      InfoContainer,
      InfoUrl,
      InfoBasePath,
      License,
      headers: Headers,
      BaseLayout,
    },
  }

  let formComponents = {
    components: LayoutUtils,
  }

  let jsonSchemaComponents = {
    components: JsonSchemaComponents,
  }

  return [
    configsPlugin,
    util,
    logs,
    view,
    spec,
    err,
    layout,
    samples,
    coreComponents,
    formComponents,
    swaggerJs,
    jsonSchemaComponents,
    auth,
    downloadUrlPlugin,
    deepLinkingPlugin,
    filter,
    onComplete,
    requestSnippets,
    safeRender(),
  ]
}
