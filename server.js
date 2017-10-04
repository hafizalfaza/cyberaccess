import express from 'express';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config.dev';
import path from 'path';
import cors from 'cors';

const app = express();

const port = process.env.PORT || 3000;

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
	hot: true,
	publicPath: webpackConfig.output.publicPath,
	noInfo: true
}));

app.use(webpackHotMiddleware(compiler));

app.use(cors());
app.use(bodyParser.json());


app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log('server running on port ' + port)
})