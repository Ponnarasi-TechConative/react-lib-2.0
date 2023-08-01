/* eslint-disable no-undef */
window.onload = function() {
  window["RestImportBundle"] = window["rest-import-ui-bundle"]
  window["RestImportStandalonePreset"] = window["rest-import-ui-standalone-preset"]
  // Build a system
  const ui = RestImportBundle({
    dom_id: "#rest-import-ui",
    url : 'https://petstore.swagger.io/v2/swagger.json',
    objval:{
      id:"1",
      "name":'Ponnarasi'
    },
    value:"dynamic Value",
    presets: [
      RestImportBundle.presets.apis,
      RestImportStandalonePreset
    ],
    plugins: [
      RestImportBundle.plugins.DownloadUrl
    ],
    requestSnippetsEnabled: true,
    layout: "BaseLayout"
  })

  window.ui = ui

}
