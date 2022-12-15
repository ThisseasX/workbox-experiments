import HtmlWebpackPlugin from 'html-webpack-plugin';
import { InjectManifest } from 'workbox-webpack-plugin';
import type { Configuration } from 'webpack';

const config: Configuration = {
  mode: 'development',
  plugins: [
    new InjectManifest({ swSrc: './src/sw.js' }),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
};

export default config;
