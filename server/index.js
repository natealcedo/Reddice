import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackMiddleware from 'webpack-dev-middleware';

const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler, {
	hot: true,
	publicPath: webpackConfig.output.publicPath,
	noInfo: true
}));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => {
	console.log(' server running on port 3000');
});