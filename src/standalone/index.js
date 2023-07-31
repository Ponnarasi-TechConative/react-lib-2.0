import StandaloneLayout from "./layout"
import TopbarPlugin from "plugins/topbar"

// the Standalone preset

export default [
  TopbarPlugin,
  () => {
    return {
      components: { StandaloneLayout }
    }
  },
]
