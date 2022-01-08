import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import webpack from 'webpack';

/*
 * __dirname is no more in es6, this is a legal workaround
 * https://nodejs.org/api/esm.html#esm_no_filename_or_dirname
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  /* Application entrypoints */
  entry: {
    /* Entry point for our code, it will change often */
    index: ['regenerator-runtime/runtime.js', './src/script/index.tsx'],
    /*
     * Entry point for the libraries, they are not going to change, so
     * webpack should pack it into another bundle so that browsers could
     * cache it and request only our application code later
     *
     * there was a loader for bootstrap, now it's move on
     *
     */
    // vendor: './src/script/vendor.ts',
  },
  /* Webpack extensions */
  plugins: [
    /* this one generates html with substituted links */
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
  module: {
    /* Preprocessing that runs before bundling */
    rules: [
      /* Typescript compiler */
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      /* Sass transpiler */
      {
        test: /\.(scss|css|sass)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      /* Html loader, required to substitute links in src with links in dist */
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader'],
      },
      {
        test: /\.(gif|jpg|png|mp3|mp4)$/,
        use: {
          loader: 'file-loader',
        },
      },
      /* Fonts loader */
      {
        test: /\.(woff(2)?|ttf|otf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  /* where to search for entrypoints */
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      /* we need this so we can import from common directories without many relative pathing */

      /* NOTE when changing this, please change jest config
       * in package.json and tsconfig.json as well, we had to duplicate
       * the same knowledge there */
      components: path.resolve(__dirname, 'src/script/components'),
      style: path.resolve(__dirname, 'src/style'),
      hooks: path.resolve(__dirname, 'src/script/hooks'),
      assets: path.resolve(__dirname, 'src/assets'),
      features: path.resolve(__dirname, 'src/script/features'),
      themes: path.resolve(__dirname, 'src/script/app/styles/themes'),
      script: path.resolve(__dirname, 'src/script'),
      src: path.resolve(__dirname, 'src'),
    },
  },
  /* when you run `npm start`, that is where source is taken from */
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
  },
};
