/* eslint-disable no-undef */
window.onload = function() {
  window["RestImportBundle"] = window["rest-import-ui-bundle"]
  // Build a system
  const ui = RestImportBundle({
    dom_id: "#rest-import-ui",
    objval:{
      id:"1",
      "name":'From library'
    },
    value:"Save",
    
    layout: "BaseLayout"
  })

  window.ui = ui

}
