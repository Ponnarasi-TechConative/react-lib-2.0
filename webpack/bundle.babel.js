/**
 * @prettier
 */

import path from "path";
import deepExtend from "deep-extend";
import webpack from "webpack";
import TerserPlugin from "terser-webpack-plugin";
import nodeExternals from "webpack-node-externals";
import { DuplicatesPlugin } from "inspectpack/plugin";

const projectBasePath = path.join(__dirname, "../");

export const customConfig = {
  entry: {
    "sample-library-bundle": ["./src/index.js"],
  },
  output: {
    globalObject: "this",
    library: {
      name: "sampleLibrary",
      export: "default",
    },
  },
  plugins: [
    new DuplicatesPlugin({
      emitErrors: false,
      verbose: false,
    }),
  ],
};

const baseRules = [
  {
    test: /\.jsx?$/,
    include: [
      path.join(projectBasePath, "src"),
      path.join(projectBasePath, "node_modules", "object-assign-deep"),
    ],
    loader: "babel-loader",
    options: {
      retainLines: true,
      cacheDirectory: true,
    },
  },
  { test: /\.(txt|yaml)$/, type: "asset/source" },
  {
    test: /\.(png|jpg|jpeg|gif|svg)$/,
    type: "asset/inline",
  },
];

export default function buildConfig({
  minimize = true,
  mangle = true,
  sourcemaps = true,
  includeDependencies = true,
}) {
  var plugins = [
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ];

  const completeConfig = deepExtend(
    {},
    {
      mode: "production",
      entry: {},
      output: {
        path: path.join(projectBasePath, "dist"),
        publicPath: "/dist",
        filename: "[name].js",
        chunkFilename: "[name].js",
        globalObject: "this",
        library: { type: "umd" },
      },
      target: "web",
      module: { rules: baseRules },
      externals: includeDependencies
        ? { esprima: "esprima" }
        : [
            nodeExternals({
              importType: (moduleName) => {
                return `commonjs ${moduleName}`;
              },
            }),
          ],
      resolve: {
        modules: [path.join(projectBasePath, "./src"), "node_modules"],
        extensions: [".web.js", ".js", ".jsx", ".json", ".less"],
        alias: {
          // these aliases make sure that we don't bundle same libraries twice
          // when the versions of these libraries diverge between rest-import-js and rest-import-ui
          "@babel/runtime-corejs3": path.resolve(
            __dirname,
            "..",
            "node_modules/@babel/runtime-corejs3"
          ),
          "js-yaml": path.resolve(__dirname, "..", "node_modules/js-yaml"),
          lodash: path.resolve(__dirname, "..", "node_modules/lodash"),
          "react-is": path.resolve(__dirname, "..", "node_modules/react-is"),
          "safe-buffer": path.resolve(
            __dirname,
            "..",
            "node_modules/safe-buffer"
          ),
        },
        fallback: {
          fs: false,
          stream: require.resolve("stream-browserify"),
        },
      },
      devtool: sourcemaps
        ? minimize
          ? "nosources-source-map"
          : "cheap-module-source-map"
        : false,
      performance: {
        hints: "error",
        maxEntrypointSize: 13312000,
        maxAssetSize: 133312000,
      },
      optimization: {
        minimize: !!minimize,
        minimizer: [
          (compiler) =>
            new TerserPlugin({
              terserOptions: {
                mangle: !!mangle,
              },
            }).apply(compiler),
        ],
      },
    },
    customConfig
  );

  // deepExtend mangles Plugin instances, this doesn't
  completeConfig.plugins = plugins.concat(customConfig.plugins || []);

  return completeConfig;
}
