import path from 'path';
import webpack from 'webpack';

export default {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/client/index.js')
    ],
    output: {
        filename: 'bundle.js',
        path: '/client/bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [path.join(__dirname, '/client'), path.join(__dirname, 'server/shared')],
                loaders: ['react-hot-loader','babel-loader'],
            }
        ]
    },
    resolve: {
        extensions: [' ', '.js']
    },
};
