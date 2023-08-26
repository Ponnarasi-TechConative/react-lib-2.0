import deepExtend from "deep-extend";

import System from "./system";
import ApisPreset from "./presets/apis";
import AllPlugins from "./plugins/all";

// eslint-disable-next-line no-undef

export default function restImport(opts) {
  const defaults = {
    // Some general settings, that we floated to the top
    dom_id: null, // eslint-disable-line camelcase
    domNode: null,
    spec: {},
    url: "",
    value: "",
    objval: {},
    urls: null,
    layout: "BaseLayout",
    presets: [ApisPreset],
    plugins: [],
    pluginsOptions: {
      // Behavior during plugin registration. Can be :
      // - legacy (default) : the current behavior for backward compatibility – last plugin takes precedence over the others
      // - chain : chain wrapComponents when targeting the same core component
      pluginLoadType: "legacy",
    },
    // Inline Plugin
    fn: {},
    components: {},
  };
  const domNode = opts.domNode;
  delete opts.domNode;

  const constructorConfig = deepExtend({}, defaults, opts);

  const storeConfigs = {
    system: {
      configs: constructorConfig.configs,
    },
    plugins: constructorConfig.presets,
    pluginsOptions: constructorConfig.pluginsOptions,
    state: deepExtend(
      {
        layout: {
          layout: constructorConfig.layout,
        },
        spec: {
          spec: "",
          url: constructorConfig.url,
          value: constructorConfig.value,
          objval: constructorConfig.objval,
        },
      },
      {}
    ),
  };

  var store = new System(storeConfigs);

  var system = store.getSystem();

  const downloadSpec = (fetchedConfig) => {
    let localConfig = system.specSelectors.getLocalConfig
      ? system.specSelectors.getLocalConfig()
      : {};
    let mergedConfig = deepExtend(
      {},
      localConfig,
      constructorConfig,
      fetchedConfig || {}
    );

    // deep extend mangles domNode, we need to set it manually
    if (domNode) {
      mergedConfig.domNode = domNode;
    }

    store.setConfigs(mergedConfig);

    if (mergedConfig.domNode) {
      system.render(mergedConfig.domNode, "App");
    } else if (mergedConfig.dom_id) {
      let domNode = document.querySelector(mergedConfig.dom_id);
      system.render(domNode, "App");
    } else if (mergedConfig.dom_id === null || mergedConfig.domNode === null) {
      // do nothing
      // this is useful for testing that does not need to do any rendering
    } else {
      console.error(
        "Skipped rendering: no `dom_id` or `domNode` was specified"
      );
    }

    return system;
  };

  return downloadSpec();
}

// Add presets
restImport.presets = {
  apis: ApisPreset,
};

// All Plugins
restImport.plugins = AllPlugins;
