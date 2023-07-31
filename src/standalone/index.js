import StandaloneLayout from "./layout"
import TopbarPlugin from "plugins/topbar"
import SafeRenderPlugin from "core/plugins/safe-render"

// the Standalone preset

export default [
  TopbarPlugin,
  () => {
    return {
      components: { StandaloneLayout }
    }
  },
  SafeRenderPlugin({
    fullOverride: true,
    componentList: [
      "Topbar",
      "StandaloneLayout",
    ]
  })
]
