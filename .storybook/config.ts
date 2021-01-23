import { configure } from "@storybook/react";

const req = require.context("../src", true, /\.stories\.tsx$/);
function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);

const path = require('path');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
};