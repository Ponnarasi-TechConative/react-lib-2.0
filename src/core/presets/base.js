/**
 * @prettier
 */
import layout from "core/plugins/layout"
import spec from "core/plugins/spec"
import view from "core/plugins/view"
import App from "core/components/app"
import BaseLayout from "core/components/layouts/base"
import Home from "../components/home"
export default function () {
  let coreComponents = {
    components: {
      App,
      BaseLayout,
      Home
    },
  }

  return [
    view,
    spec,
    layout,
    coreComponents
  ]
}
